import styled from "styled-components";
import { baseColour } from "../../../utils/contants/colors.contant";

interface StyleCardProps {
  customStyle?: string;
}

const StyedCard = styled.div<StyleCardProps>`
  border: 1px solid gray;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 1px 1px 4px ${baseColour.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease, transform 0.3s ease;
  transition-delay: 0.1s;

  &:hover {
    color: white;
    background: ${baseColour.blue};
    cursor: pointer;
    scale: 0.97;
  }

  &:active {
    background: ${baseColour.orange};
    scale: 1;
  }

  ${(props) => props?.customStyle || ""}
`;

export default StyedCard;
