import { ButtonWrapper } from "./style";

type ButtonProps = {
  label?: string;
  outline?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
  isOnSubmit?: boolean;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  outline = false,
  disabled = false,
  onClick,
  isOnSubmit = false,
  children,
}) => {
  return (
    <>
      {isOnSubmit ? (
        <ButtonWrapper
          type="submit"
          disabled={disabled}
          outline={outline}
          onClick={onClick}
        >
          <span>{label}</span>
        </ButtonWrapper>
      ) : label ? (
        <ButtonWrapper
          type="button"
          disabled={disabled}
          outline={outline}
          onClick={onClick}
        >
          <span>{label}</span>
        </ButtonWrapper>
      ) : children ? (
        <ButtonWrapper
          type="button"
          disabled={disabled}
          outline={outline}
          onClick={onClick}
        >
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          type="button"
          disabled={disabled}
          outline={outline}
          onClick={onClick}
        >
          <span>Click</span>
        </ButtonWrapper>
      )}
    </>
  );
};

export default Button;
