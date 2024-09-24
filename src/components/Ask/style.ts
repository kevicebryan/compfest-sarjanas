import { spacingS } from "@/styles/spaces";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Result = styled.div`
  width: 100%;
  height: 60vh;
  max-height: 600px;
  border: 1px solid white;
  border-radius: 12px;
  padding: 16px;
  font-size: 12px;
  line-height: 1.5;
  resize: none;
  color: white;
  font-family: monospace;
  overflow-y: scroll;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${spacingS};
  width: 100%;

  & > textarea,
  input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d1d1d1;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    resize: none;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  & > textarea:focus,
  input:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }

  & > button {
    height: 56px;
    min-width: 120px;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
`;

interface OptionProps {
  isChosen: boolean;
}

export const Option = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  color: white;
  background-color: #007bff;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;

  transition: ease-in-out 0.2s;
  opacity: ${({ isChosen }) => (isChosen ? 1 : 0.25)};
  &:hover {
    opacity: 1;
  }
`;
