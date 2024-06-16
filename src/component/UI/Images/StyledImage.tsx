import { ImgHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  customStyles?: string;
}

const StyledImage = styled.img<StyledImageProps>`
  ${(props) => props.customStyles || ""};
`;

export default StyledImage;
