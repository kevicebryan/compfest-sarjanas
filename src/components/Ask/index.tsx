import { useState } from "react";
import Button from "@/components/Button";
import { Form, Result, Wrapper } from "./style"; // Assuming these are located properly
import { API_URL } from "@/util/constants";

// Ask Component
interface AskProps {}

const Ask: React.FC<AskProps> = () => {
  const [query, setQuery] = useState(""); // User query
  const [response, setResponse] = useState(""); // Server response

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value); // Update query state as user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
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
      setResponse(data); // Set the server response in the top textarea
    } catch (error) {
      console.error("Error fetching the response:", error);
      setResponse("An error occurred while processing your request.");
    }
  };

  return (
    <Wrapper>
      {/* Textarea for displaying the result (server response) */}
      <Result
        readOnly
        placeholder="Result will appear here..."
        value={response} // Display server response here
      />
      <Form onSubmit={handleSubmit}>
        {/* Textarea for user input */}
        <textarea
          placeholder="Ask something..."
          value={query} // Controlled by query state
          onChange={handleInputChange}
        />
        <Button label="Ask" isOnSubmit />
      </Form>
    </Wrapper>
  );
};

export default Ask;
