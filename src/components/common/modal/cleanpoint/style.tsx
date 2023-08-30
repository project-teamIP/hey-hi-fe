import { styled } from "styled-components";
import cleanPath from "../../../../assets/images/cleanPointHandle.svg";

interface SliderTrackProps {
  value: number; // value 속성 추가
}

// 모달 내부
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #fcfcfc;
  width: 541px;
  height: 524px;
  padding: 30px;
  gap: 11px;
`;

// 타이틀
export const Title = styled.div`
  margin-top: 25px;
  color: #000;
  font-size: 34px;
  font-weight: 600;
  line-height: normal;
`;

// 내용
export const Content = styled.div`
  color: #000;
  font-size: 17px;
  font-weight: 400;
  line-height: 140%;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  gap: 19px;
`;

export const RadioButtonGroup = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AddFriend = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;

  input {
    width: 25px;
    height: 25px;
    stroke-width: 1.5px;
    stroke: #a0a0a0;
  }

  label {
    color: #4e4e4e;
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
  }
`;
export const SliderImageContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreText = styled.p<SliderTrackProps>`
  margin-left: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
  white-space: nowrap; /* 추가된 부분 */
  margin-top: -122px;
  z-index: 1;
  margin-right: -12px;

  ${(props) => {
    if (typeof props.value === "number" && props.value < 0) {
      return " margin-right: -18px;";
    }
  }}
`;

export const ScoreTagBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    color: #b5b5b5;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const SliderContainer = styled.div`
  padding: 10px;
  width: 92%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

export const SliderBox = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  margin: 0 auto;
`;

export const SliderTrack = styled.div<SliderTrackProps>`
  position: absolute;
  /* z-index: 1; */
  /* top: 50%; */
  margin-top: 20px;
  width: 406px;
  height: 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #ff6e46;
  /* margin-top: 2.5px; */
  ${(props) => {
    if (props.value < 0) {
      return `  
      width: ${216 - Math.abs(props.value) * 20}px;
      `;
    } else {
      return `
        width: ${216 + Math.abs(props.value) * 20}px;
      `;
    }
  }}
`;

export const SliderImage = styled.img<SliderTrackProps>`
  position: absolute;
  right: 0;
  margin-top: -60px;
  transform: translate(43%, -50%);
  z-index: 1;

  ${(props) => {
    if (typeof props.value === "number" && props.value < 1) {
      return "transform: translate(51%, -50%);";
    } else {
      return " transform: translate(47%, -50%);";
    }
  }}
`;

export const SliderBackground = styled.div`
  border-radius: 6px;
  width: 412px;
  height: 10px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #e7e9ef;
`;

export const SliderInput = styled.input`
  width: 406px;
  height: 10px;
  border-radius: 6px;
  -webkit-appearance: none; /* For older webkit-based browsers */
  appearance: none; /* Standard property for modern browsers */
  background: none;
  margin-top: -35px;

  /* 슬라이더 핸들을 움직일 때의 스타일을 지정합니다 */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 50px;
    height: 50px;
    background-image: url(${cleanPath}); /* 이미지 경로로 수정해주세요 */
    background-size: cover; /* 이미지를 커버하도록 설정 */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -30px;
    /* z-index: 1; */
    ${(props) => {
      if (typeof props.value === "number" && props.value < 1) {
        return "margin-left: -1px;";
      } else {
        return "margin-left: 22px;";
      }
    }}
  }

  /* Firefox용 스타일 */
  &::-moz-range-thumb {
    appearance: none;
    width: 48px;
    height: 48px;
    background-image: url(${cleanPath}); /* 이미지 경로로 수정해주세요 */
    background-size: cover; /* 이미지를 커버하도록 설정 */
    border-radius: 50%;
    cursor: pointer;
    margin-top: -29px;
    /* z-index: 1; */
    ${(props) => {
      if (typeof props.value === "number" && props.value < 0) {
        return;
      } else {
        return "margin-left: 20px;";
      }
    }}
  }
`;
