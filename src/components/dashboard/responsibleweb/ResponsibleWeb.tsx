import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 33px;
`;

const DefaultStyleBody = styled.div`
  background-color: #f0f0f0;
`;

const CustomStyleBody = styled.div`
  /* 화면 너비가 1025px 이상일 때 */
  @media (min-width: 1025px) {
    background-color: #fd0606;
  }
`;

const ResponsiveWeb: React.FC = () => {
  return (
    <Container>
      <DefaultStyleBody>
        <h1>Responsive Web</h1>
        {/* 웹페이지의 내용 */}
      </DefaultStyleBody>

      <CustomStyleBody>
        <h1>Responsive Web (Custom Style)</h1>
        {/* 웹페이지의 내용 */}
      </CustomStyleBody>
    </Container>
  );
};

export default ResponsiveWeb;
