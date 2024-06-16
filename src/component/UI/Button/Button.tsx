import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { baseColour } from "../../../utils/contants/colors.contant";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  customStyle?: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${baseColour.orange};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  opacity: 1;
  scale: 1;
  transition: all 0.3s ease, transform 0.3s ease;
  transition-delay: 0.1s;

  &:hover {
    opacity: 0.7;
    scale: 0.96;
  }

  &:active {
    opacity: 1;
    scale: 1.02;
  }

  ${(props) => props.customStyle || ""}
`;
