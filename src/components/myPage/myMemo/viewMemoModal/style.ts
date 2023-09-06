import { styled } from "styled-components";

interface MemoProps {
  $isEditing: boolean;
}

/* ! memo modal */
export const MemoModalOverlay = styled.div`
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

export const MemoModalBox = styled.div`
  width: 968px;
  height: 773px;
  background-color: white;
  padding: 0 45px;
  border-radius: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 37px;
  right: 45px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

export const MemoModalHeader = styled.div<MemoProps>`
  width: 100%;
  height: 200px;
  padding: 72px 0 28px 0;
  border-bottom: 1px solid #d1d1d1;

  p {
    width: fit-content;
    height: 39px;
    padding: 11px 20px;
    color: ${({ $isEditing }) => ($isEditing ? "#323232" : "#ff6e46")};
    font-size: 18px;
    font-weight: 600;
    background-color: ${({ $isEditing }) => ($isEditing ? "#EFF0F1" : "#ffe4dc")};
    border-radius: 30px;
    margin-bottom: 19px;
  }
  /* 메모 제목 조회 모드 */
  h3 {
    color: #3f3f3f;
    font-size: 35px;
    font-weight: 700;
    padding-top: 5px;
  }
  /* 메모 제목 수정 모드 */
  input {
    font-size: 35px;
    font-weight: 700;
    color: #3f3f3f;
    width: 760px;
    border: none;
    padding: 0;
  }
`;

export const MemoModalMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      border-radius: 50%;
      background-color: #f1f1f1;
    }
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: #939393;
  }
  .count {
    color: #ff6e46;
  }
`;

export const MoreDropdown = styled.div`
  width: 178px;
  height: 123px;
  position: absolute;
  top: 15%;
  right: -15%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #d8dee9;
  background: #fff;
  z-index: 1;

  button {
    width: 157px;
    height: 51px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
  }

  button:hover {
    background-color: #f1f1f1;
  }

  img {
    width: 21px;
    height: 21px;
    margin-right: 18px;
  }
`;

/* 메모 내용 조회 모드 */
export const MemoModalBody = styled.p`
  margin-top: 66px;
  width: 100%;
  height: 430px;
  color: #606060;
  font-size: 18px;
  font-weight: 500;
  overflow: scroll;
  padding-top: 5px;
  padding-left: 2px;

  /* 스크롤바 설정 1. 너비 */
  &::-webkit-scrollbar {
    width: 10px;
  }
  /* 스크롤바 설정 2. 길이, 색 */
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #ff6e46;
    border-radius: 10px;
  }
  /* 스크롤바 설정 3. 배경 */
  &::-webkit-scrollbar-track {
    background: #ffe4dc;
  }
`;

/* 메모 내용 수정 모드 */
export const MemoModalBodyEdit = styled.div`
  width: 100%;
  height: 465px;
  margin-top: 66px;

  textarea {
    color: #606060;
    font-size: 18px;
    font-weight: 500px;
    width: 100%;
    height: 400px;
    border: none;
  }
`;

export const EditBtns = styled.div`
  text-align: end;

  button:first-child {
    margin-right: 16px;
  }
`;
