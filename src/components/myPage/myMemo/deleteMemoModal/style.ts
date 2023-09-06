import { styled } from "styled-components";

export const DeleteModalOverlay = styled.div`
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

export const DeleteModalBox = styled.div`
  width: 541px;
  height: 281px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
    font-size: 34px;
    font-weight: 700;
  }
`;

export const DeleteModalBody = styled.div`
  margin: 17px 0 29px 0;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  line-height: 140%;
`;

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
