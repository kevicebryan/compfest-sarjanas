import {
  accent,
  accent2,
  accent_dark,
  background,
  disabled_color,
  disabled_color2,
  gradient,
  gradient_dark,
  gradient_light,
  secondary,
  shadow,
  shadowHover,
  shadowHoverDisabled,
  white,
} from "@/styles/colors";

import { spacingM, spacingXs } from "@/styles/spaces";
import styled from "styled-components";

type ButtonStyleProps = {
  disabled: boolean;
  outline: boolean;
};

const buttonStyle = (disabled: boolean, outline: boolean) => {
  if (disabled)
    return {
      bg: disabled_color2,
      color: white,
      bgHover: disabled_color2,
      colorHover: white,
      outline: "none",
      shadowHover: shadowHoverDisabled,
    };
  if (outline)
    return {
      bg: "background",
      color: accent,
      bgHover: "background",
      colorHover: accent,
      outline: `1px solid ${accent}`,
      shadowHover: shadow,
    };
  return {
    bg: accent,
    color: white,
    bgHover: accent_dark,
    colorHover: white,
    outline: "none",
    shadowHover: shadowHover,
  };
};

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  cursor: pointer;

  color: ${({ disabled, outline }) => buttonStyle(disabled, outline).color};
  background-color: ${({ disabled, outline }) =>
    buttonStyle(disabled, outline).bg};
  outline: ${({ disabled, outline }) => buttonStyle(disabled, outline).outline};
  box-shadow: ${shadow};

  border: none;
  border-radius: 12px;
  padding: 12px 24px;

  min-width: 100px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${spacingXs};

  transition: all 0.25s ease-in-out;

  & > p,
  span {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
  }

  &:hover {
    box-shadow: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).shadowHover};
    color: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).colorHover};
    background: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).bgHover};
  }

  &:after {
    box-shadow: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).shadowHover};
    color: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).colorHover};
    background: ${({ disabled, outline }) =>
      buttonStyle(disabled, outline).bgHover};
  }

  @media screen and (max-width: 768px) {
    padding: ${spacingXs};
  }
`;
