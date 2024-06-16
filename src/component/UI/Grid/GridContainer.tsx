import styled from "styled-components";

interface GridContainerProps {
  mediumColumns?: number;
  largeColumns?: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: ${({ mediumColumns = 2 }) =>
      `repeat(${mediumColumns}, 1fr)`};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${({ largeColumns = 3 }) =>
      `repeat(${largeColumns}, 1fr)`};
  }
`;
