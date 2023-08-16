import { styled } from "styled-components";

export const MyMemoBox = styled.div`
  margin: 4.1875rem 0 0 4.9375rem;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: top;
  height: 96px;

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
  border-radius: 1.25rem;
  border: 0.0625rem solid #d8dee9;
  padding: 2.0625rem 1.3125rem;

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
