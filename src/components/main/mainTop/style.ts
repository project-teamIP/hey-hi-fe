import { styled } from "styled-components";

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  width: 100%;
  height: 1055px;
`;

export const MainInner = styled.div`
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  p {
    margin-top: 68px;
    font-size: 18px;
    font-weight: 400;
    width: 400px;
    height: 148px;
  }
`;

export const ImgBox = styled.div`
  width: 53.5rem;
  height: 41.5625rem;
  background-color: gray;
  margin-right: 96px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
