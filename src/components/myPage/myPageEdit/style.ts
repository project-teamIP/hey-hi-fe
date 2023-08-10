import { styled } from "styled-components";

export const MyPageEditBox = styled.div`
  height: 874px;
  width: 574px;
  margin-left: 351px;
  margin-top: 87px;

  label:not(.radio-label) {
    display: block;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

export const ProfileTop = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 50px;

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
  }

  button {
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    background-color: #323232;
    padding: 0;
    bottom: 10px;
    right: 0;

    img {
      width: 20px;
      height: 20px;
      object-fit: scale-down;
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 38px;
`;

export const Gap = styled.div`
  & > :not(:last-child) {
    margin-right: 22px;
  }
`;

export const RadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 574px;
  grid-column-gap: 107px;
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
  margin-top: 57px;
`;
