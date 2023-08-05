import { styled } from "styled-components";

export const MainSlideBox = styled.div`
  width: 100%;
  height: 1231px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  position: relative;
`;

export const Step = styled.div<{ active: boolean }>`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#FF5A00" : "#ECECEC")};
`;

export const StepLine = styled.div<{ active: boolean }>`
  width: 4px;
  height: 100%;
  background-color: ${(props) => (props.active ? "#FF5A00" : "#ECECEC")};
  /* transform: translateY(-50%); */
  position: absolute;
  top: 50%;
  left: 7%;
  z-index: -1;
`;

export const TextWrapper = styled.div`
  margin-left: 86px;
  width: 337px;

  h3 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 924px;
  height: 698px;
  margin-left: 137px;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
`;

export const SlideBtn = styled.button`
  width: 73px;
  height: 73px;
  padding: 8px 16px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
