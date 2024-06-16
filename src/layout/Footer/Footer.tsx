import React from "react";
import styled from "styled-components";
import { baseColour } from "../../utils/contants/colors.contant";
import Typography from "../../component/UI/Typography/Typography";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter data-testid="footer">
      <Typography variant="p">Allica Bank Task © {year}</Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 10px 20px;
  color: white;
  text-align: center;
  background: ${baseColour.blue};
`;

export default Footer;
