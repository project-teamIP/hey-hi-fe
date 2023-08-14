import { keyframes, styled } from "styled-components";

//로딩중 화면
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 2s linear infinite;
`;

export const MyPageEditBox = styled.div`
  height: 874px;
  width: 750px;
  margin-left: 351px;
  margin-top: 87px;

  label:not(.radio-label) {
    display: block;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

export const ProfileTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 39px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-left: 73px;
  }
`;

export const ImgForm = styled.div`
  height: 156px;
  width: 156px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;

export const ImgInput = styled.div`
  label {
    width: 35px;
    height: 35px;
    position: absolute;
    left: 0;
    bottom: -10px;
    cursor: pointer;
  }

  input[type="file"] {
    /* 파일 필드 숨기기 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  button {
    background: none;
    border: none;
    width: 33px;
    height: 33px;
    position: absolute;
    right: 1px;
    bottom: 6px;
    padding: 0;
    cursor: pointer;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 34px;
`;

export const Gap = styled.div`
  & > :not(:last-child) {
    margin-right: 22px;
  }
`;

export const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 574px;
  grid-column-gap: 49px;
`;

export const RadioButton = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;

  input[type="radio"] {
    height: 24px;
    width: 24px;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    font-weight: bold;
  `}
`;

export const BtnPosition = styled.div`
  text-align: end;
  margin-top: -40px;
`;
