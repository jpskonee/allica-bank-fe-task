import { HtmlHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface TypographyProps extends HtmlHTMLAttributes<any> {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  customStyle?: string;
}

const Typography = ({
  variant = "p",
  children,
  customStyle = "",
  ...res
}: TypographyProps) => {
  return (
    <StyledTypography
      customStyle={customStyle}
      as={variant}
      variant={variant}
      {...res}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div<TypographyProps>`
  margin: 0;
  padding: 0;
  color: inherit;

  ${(props) => {
    switch (props.variant) {
      case "h1":
        return `
          font-size: 2.5rem;
          font-weight: bold;
        `;
      case "h2":
        return `
          font-size: 2rem;
          font-weight: bold;
        `;
      case "h3":
        return `
          font-size: 1.75rem;
          font-weight: bold;
        `;
      case "h4":
        return `
          font-size: 1.5rem;
          font-weight: bold;
        `;
      case "h5":
        return `
          font-size: 1.25rem;
          font-weight: bold;
        `;
      case "h6":
        return `
          font-size: 1rem;
          font-weight: bold;
        `;
      case "p":
      default:
        return `
          font-size: 1rem;
          line-height: 1.4;
        `;
    }
  }}
  ${(props) => props.customStyle || ""}
`;

export default Typography;
