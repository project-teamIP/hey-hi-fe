import { styled } from "styled-components";

export const MyPageEditBox = styled.div`
  height: 874px;
  width: 750px;
  margin-left: 351px;
  margin-top: 87px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
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

  /* 파일 필드 숨기기 */
  input[type="file"] {
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

export const EmailReadOnly = styled.div`
  height: 60px;
  width: 574px;
  border-radius: 15px;
  border: 1px solid #bababa;
  color: #a0a0a0;
  font-size: 18px;
  font-weight: 600;
  padding: 19px 0 20px 28px;
`;

export const BtnPosition = styled.div`
  text-align: end;
  margin-top: -40px;
`;

/* checkbox */
export const CheckBoxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 574px;
  grid-column-gap: 49px;
  grid-row-gap: 20px;
`;

export const SingleCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 19px;
    height: 19px;
    border: 2px solid #bababa;
    border-radius: 50%;
    margin-right: 9px;
    cursor: pointer;

    &:checked {
      background-color: #fff;
      border: 2px solid #ff6e46;
      position: relative;
    }

    &:checked::before {
      content: "";
      display: block;
      text-align: center;
      color: white;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #ff6e46;
      border: 2px solid #ff6e46;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #a0a0a0;

    &.selected {
      color: #323232;
    }
  }
`;
