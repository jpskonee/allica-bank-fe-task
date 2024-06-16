import React, { SelectHTMLAttributes } from "react";
import styled from "styled-components";

type OptionType = {
  value: string;
  label: string;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  customStyle?: string;
  options?: OptionType[];
}

const Select = ({ options = [], customStyle = "", ...props }: SelectProps) => {
  return (
    <StyledSelect {...props}>
      {options.map((ech) => (
        <StyledOption key={ech.value} value={ech.value}>
          {ech.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;

const StyledSelect = styled.select<SelectProps>`
  padding: 8px 10px;
  border-radius: 10px;
  ${(props) => props.customStyle || ""}
`;

const StyledOption = styled.option`
  padding: 10px 10px;
  margin: 10px 10px;
`;
