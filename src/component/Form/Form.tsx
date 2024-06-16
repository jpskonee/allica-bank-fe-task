import { FormHTMLAttributes } from "react";
import styled from "styled-components";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  customStyle?: string;
}

const Form = styled.form<FormProps>`
  ${(prop) => prop?.customStyle || ""}
`;

export default Form;
