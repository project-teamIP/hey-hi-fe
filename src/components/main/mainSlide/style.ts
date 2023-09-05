import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MainSlideBox = styled.div`
  width: 100%;
  height: 1131px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.blue};

  h2 {
    font-size: 40px;
    font-weight: 700;
    width: fit-content;
    line-height: 53px;
    text-align: center;
    margin: 21px 0 76px 0;
    color: white;
  }
`;

export const SectionNum = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: #000;
  color: #fff;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.52px;
  font-weight: 700;
  padding: 10px 0;
  margin-top: 82px;
`;

export const MainSlideInner = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 500px;
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 200px;
  position: relative;
`;

export const Step = styled.div<{ active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF5A00" : colors.light_blue)};
  z-index: 1;
`;

export const StepLine = styled.div<{ active: boolean }>`
  width: 3px;
  height: 100%;
  background-color: ${(props) => (props.active ? "#FF5A00" : colors.light_blue)};
  position: absolute;
  top: 1%;
  left: 3%;
`;

export const TextWrapper = styled.div`
  margin-left: 53px;
  width: 415px;
`;

export const StepTitle = styled.h3<{ active: boolean }>`
  font-size: 32px;
  font-weight: 600;
  color: ${(props) => (props.active ? colors.white : colors.light_blue)};
`;

export const StepTitleUnderline = styled.div<{ active: boolean; length: number }>`
  width: ${(props) => (props.active ? `${props.length * 26}px` : "0")};
  height: 8px;
  background-color: ${colors.header_orange};
  transition: width 0.2s ease;
`;

export const StepContent = styled.p<{ active: boolean }>`
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  color: ${(props) => (props.active ? colors.dark_gray : colors.light_blue)};
  margin-top: 38px;
`;

export const SliderWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 909px;
  max-height: 511px;
  border-radius: 20px;
  border: 8px solid black;
  margin-left: 137px;
  overflow: hidden;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 48%;
  left: 0;
  width: 100%;
`;

export const SlideBtn = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
