import React from "react";
import styled from "styled-components";
import { baseColour } from "../../utils/contants/colors.contant";
import StyledImage from "../../component/UI/Images/StyledImage";
import logoImg from "../../assets/img/star.png";
import StyledLink from "../../component/UI/Link/StyledLink";

const NavBar = () => {
  return (
    <StyledNavBar data-testid="navbar">
      <StyledLink to={"/"}>
        <StyledImage
          alt="Allica Bank"
          src={logoImg}
          customStyles={`
            width:150px;
            height:60px;
            @media (max-width: 426px) {
              width:180px;
            }
          `}
        />
      </StyledLink>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.header`
  padding: 20px;
  color: white;
  background: ${baseColour.blue};

  @media (max-width: 426px) {
    padding: 10px;
  }
`;

export default NavBar;
