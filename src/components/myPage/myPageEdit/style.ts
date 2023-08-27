import { styled } from "styled-components";

export const MyPageEditBox = styled.div`
  height: 874px;
  width: 750px;
  margin-left: 351px;
  margin-top: 87px;
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

export const ProfileTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileImageBox = styled.div`
  height: 103px;
  width: 103px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ModalToggleBtn = styled.button`
  background: none;
  border: none;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 1px;
  bottom: 6px;
  padding: 0;
  cursor: pointer;
`;

export const MannerPoint = styled.div`
  width: 92px;
  height: 29px;
  color: #373737;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.24px;
  border-radius: 10px;
  background-color: #efefef;
  padding-top: 10px;
  text-align: center;
  margin-top: 11px;
`;

export const FormGroup = styled.div`
  margin-bottom: 34px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
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

/* ! image change modal */
export const ImgChangeModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(94, 94, 94, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ImgChangeModalBox = styled.div`
  width: 541px;
  height: 493px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    text-align: center;
    font-size: 34px;
    font-weight: 700;
  }
`;

export const ImgArray = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 14px;
  grid-column-gap: 29px;
  margin: 51px auto;

  img {
    width: 77px;
    height: 77px;
    border-radius: 50%;
    text-align: center;
    object-fit: contain;
    cursor: pointer;
  }

  input {
    display: none;
  }
`;

export const ImgInput = styled.div``;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
`;

export const ModalBtn = styled.button<{ bc?: string; tc?: string }>`
  width: 185px;
  height: 70px;
  border-radius: 50px;
  background: ${(props) => props.bc || "#FF6E46"};
  color: ${(props) => props.tc || "#fff"};
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.52px;
  border: none;
  padding: 0;
  cursor: pointer;
`;
