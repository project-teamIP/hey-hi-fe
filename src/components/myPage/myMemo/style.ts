import { styled } from "styled-components";

export const MyMemoBox = styled.div`
  margin: 4.1875rem 0 0 4.9375rem;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: top;
  height: 6rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0.3125rem 1.625rem 3.1875rem 0;
  }

  span {
    width: 3.6875rem;
    height: 2.5rem;
    border-radius: 1.4375rem;
    background-color: #eceff1;
    text-align: center;
    color: #94999e;
    font-size: 1.4375rem;
    font-weight: 700;
    padding-top: 0.75rem;
  }
`;

export const EmptyMsgBox = styled.div`
  width: 67.6875rem;
  height: 37.5rem;
  text-align: center;
  padding-top: 12.5rem;
`;

export const MemoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.9375rem;
`;

export const MemoCard = styled.div`
  width: 20.625rem;
  height: 20.0625rem;
  background-color: #fff;
  border-radius: 1.25rem;
  border: 1px solid #d8dee9;
  padding: 2.0625rem 1.3125rem;
  cursor: pointer;

  /* 메모 제목 */
  h3 {
    color: #3f3f3f;
    font-size: 1.6875rem;
    font-weight: 700;
    margin-bottom: 1.9375rem;
  }
  /* 메모 내용 */
  p {
    width: 16.9375rem;
    height: 6.375rem;
    padding: 0;
    margin: 0;
    color: #8c8c8c;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 170%;
    /* 말줄임 */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.9375rem;

  /* 날짜 */
  & > span:first-child {
    color: #8c8c8c;
    font-size: 0.9375rem;
    font-weight: 500;
  }
  /* 상대방 */
  & > span:last-child {
    width: 7rem;
    height: 1.5rem;
    background-color: #ffe4dc;
    border-radius: 1.875rem;
    color: #ff6e46;
    font-size: 0.8125rem;
    font-weight: 600;
    padding: 0.4375rem 0;
    text-align: center;
  }
`;

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

export const MemoModalHeader = styled.div`
  width: 100%;
  height: 200px;
  padding: 72px 0 28px 0;
  border-bottom: 1px solid #d1d1d1;

  p {
    width: fit-content;
    height: 39px;
    padding: 11px 20px;
    color: #ff6e46;
    font-size: 18px;
    font-weight: 600;
    background-color: #ffe4dc;
    border-radius: 30px;
  }

  h3 {
    color: #3f3f3f;
    font-size: 35px;
    font-weight: 700;
    margin-top: 19px;
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

export const MemoModalBody = styled.p`
  margin-top: 66px;
  width: 100%;
  height: 430px;
  color: #606060;
  font-size: 18px;
  font-weight: 500;
  overflow: scroll;

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
