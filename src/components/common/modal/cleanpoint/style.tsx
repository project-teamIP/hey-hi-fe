import { styled } from "styled-components";

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
  margin-top: 55px;
  padding: 30px;
  gap: 11px;
`;

// 타이틀
export const Title = styled.div`
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

export const ScoreText = styled.p`
  margin-left: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
  white-space: nowrap; /* 추가된 부분 */
  margin-top: -108px;
  z-index: 1;
  margin-right: -15px;
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
  top: 50%;
  width: 406px;
  height: 10px;
  border-radius: 6px;
  background-color: #ff6e46;
  margin-top: 2.5px;
  ${(props) => {
    if (props.value < 0) {
      return `  
      width: ${212 - Math.abs(props.value) * 20}px;
      `;
    } else {
      return `
        width: ${212 + Math.abs(props.value) * 20}px;
      `;
    }
  }}
`;

export const SliderImage = styled.img`
  position: absolute;
  right: 0;
  margin-top: -45px;
  transform: translate(53%, -50%);
`;

export const SliderBackground = styled.div`
  border-radius: 6px;
  width: 420px;
  height: 10px;
  margin: 0 auto;
  margin-top: 20px;
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
    width: 17px;
    height: 17px;
    background-color: #ff6e46;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 0px 8px rgba(253, 210, 198, 0.5);
    margin-top: -24px;
    z-index: 1;
    padding-left: 5px;
    padding-right: 5px;
    ${(props) => {
      if (typeof props.value === "number" && props.value < 0) {
        return "margin-right: 20px;";
      } else {
        return "margin-left: 10px;";
      }
    }}
  }

  /* Firefox용 스타일 */
  &::-moz-range-thumb {
    appearance: none;
    width: 17px;
    height: 17px;
    background-color: #ff6e46;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 0px 8px rgba(253, 210, 198, 0.7);
    margin-top: -24px;
    z-index: 1;
    padding-left: 5px;
    padding-right: 5px;
    ${(props) => {
      if (typeof props.value === "number" && props.value < 0) {
        return "margin-right: 20px;";
      } else {
        return "margin-left: 10px;";
      }
    }}
  }
`;
