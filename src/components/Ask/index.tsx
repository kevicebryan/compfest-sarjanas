import { useState } from "react";
import Button from "@/components/Button";
import { Form, Option, OptionsWrapper, Result, Wrapper } from "./style"; // Assuming these are located properly
import { API_URL } from "@/util/constants";

// Ask Component
interface AskProps {}

const Ask: React.FC<AskProps> = () => {
  const [query, setQuery] = useState(""); // User query
  const [response, setResponse] = useState(""); // Server response
  const [options, setOptions] = useState<string[]>([]); // Options for the user to choose from
  const [chosenOption, setChosenOption] = useState(-1);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value); // Update query state as user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;
    try {
      if (options.length > 0) {
        const res = await fetch(`${API_URL}/path`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic: options[chosenOption],
            description: query,
            pathid: "1",
          }), // Send the query in the body
        });
        if (!res.ok) {
          throw new Error("Failed to fetch the response from /path");
        }
        const data = await res.json();
        setResponse(data);
        const extractedOptions = extractNumberedItems(data);
        setOptions(extractedOptions);
        setChosenOption(-1);
      } else {
        const res = await fetch(`${API_URL}/extract`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }), // Send the query in the body
        });
        if (!res.ok) {
          throw new Error("Failed to fetch the response from /extract");
        }
        const data = await res.json();
        setResponse(data);
        const extractedOptions = extractNumberedItems(data);
        setOptions(extractedOptions);
      }
    } catch (error) {
      console.error("Error fetching the response:", error);
      setResponse("An error occurred while processing your request.");
    } finally {
      setQuery("");
    }
  };

  const extractNumberedItems = (text: string): string[] => {
    const regex = /^\s*\d+\.\s*(.+?)(?=\s*\d+\.|\n|$)/gm;
    const matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1].trim()); // Push the matched item (trimmed) to the array
    }

    return matches;
  };

  const handlePickOption = (index: number) => {
    setChosenOption(index);
  };

  return (
    <Wrapper>
      {/* Textarea for displaying the result (server response) */}
      <Result>
        {options.length > 0 ? (
          <OptionsWrapper>
            <p>Choose one of these paths</p>
            {/* Display the options extracted from the server response */}
            {options.map((option, index) => (
              <Option
                key={index}
                isChosen={index === chosenOption}
                onClick={() => handlePickOption(index)}
              >
                {option}
              </Option>
            ))}
          </OptionsWrapper>
        ) : (
          "Result will appear here..."
        )}
      </Result>
      <Form onSubmit={handleSubmit}>
        {/* Textarea for user input */}
        <textarea
          placeholder={
            options.length > 0
              ? "Pick one from above and ellaborate more about your desired path..."
              : "I want to be an AI Engineer"
          }
          value={query} // Controlled by query state
          onChange={handleInputChange}
        />
        <Button label="Ask" isOnSubmit disabled={query.length <= 0} />
      </Form>
    </Wrapper>
  );
};

export default Ask;
