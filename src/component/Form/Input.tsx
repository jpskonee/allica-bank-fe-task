import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: string;
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input<InputProps>`
  padding: 8px 10px;
  border-radius: 10px;
  ${(props) => props.customStyle || ""}
`;
