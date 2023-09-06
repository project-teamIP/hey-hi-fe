import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";
import mainTextSvg from "../../../assets/images/main/maintext.svg";

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  width: 100%;
  height: 1039px;
  background-color: ${colors.orange};
`;

export const MainInner = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 984px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  // maininner에서 maintext 너비 제외하고 남은 너비 다
  flex: 1;
  max-width: 63.3125rem;
  max-height: 53.75rem;
  margin-right: 2.9375rem;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const MainText = styled.div`
  width: 618px;

  h1 {
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 62px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.36px;
    line-height: 140%;
    margin-bottom: 68px;
  }
`;

export const SvgBox = styled.div`
  text-align: end;
  transform: translateX(8.0625rem);
`;

//띠
export const SvgBox2 = styled.div`
  height: 55px;
  width: 100%;
  padding-top: 13px;
  background-image: url(${mainTextSvg});
  background-repeat: repeat-x;
  background-position: center;
`;
