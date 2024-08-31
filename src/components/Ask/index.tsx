import { useState } from "react";
import Button from "../Button";
import { Form, Result, Wrapper } from "./style";

const Ask: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    // Simulate an API call to get the response
    // Replace this with your actual API call to ChatGPT or another service
    const simulatedResponse = `You asked: ${query}`;
    setResponse(simulatedResponse);
    setQuery(""); // Clear the input field after submission
  };

  return (
    <Wrapper>
      <Result
        readOnly
        placeholder="result will appear here..."
        value={response}
      />
      <Form onSubmit={handleSubmit}>
        <textarea
          placeholder="Ask something..."
          value={query}
          onChange={handleInputChange}
        />{" "}
        <Button label="Ask" isOnSubmit />
      </Form>
    </Wrapper>
  );
};

export default Ask;
