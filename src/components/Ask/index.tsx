import { useState } from "react";
import Button from "../Button";
import { Form, Result, Wrapper } from "./style";
import { API_URL } from "@/util/constants";

const Ask: React.FC = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const fetchResponse = async (query: string) => {
    try {
      const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Failed to fetch the response");
      }
      const data = await res.json();
      return data.answer;
    } catch (error) {
      console.error("Error fetching the response:", error);
      return "An error occurred while fetching the response.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") return;

    const apiResponse = await fetchResponse(query);
    setResponse(apiResponse);
    setQuery("");
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
        />
        <Button label="Ask" isOnSubmit />
      </Form>
    </Wrapper>
  );
};

export default Ask;
