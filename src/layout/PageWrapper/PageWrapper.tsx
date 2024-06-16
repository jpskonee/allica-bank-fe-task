import React, { ReactNode } from "react";
import styled from "styled-components";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <StyledPageWrapper data-testid="page-wrapper">{children}</StyledPageWrapper>
  );
};

const StyledPageWrapper = styled.div`
  max-width: 1400px;
  padding: 30px 15px 100px;
  margin: 0 auto;
  min-height: 80vh;

  @media (min-width: 768px) {
    padding: 30px 20px 100px;
  }
`;

export default PageWrapper;
