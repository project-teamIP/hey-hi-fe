import { styled } from "styled-components";

export const MyMemoBox = styled.div`
  margin: 67px 0 0 79px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 51px;
    display: inline-block;
    margin-right: 26px;
  }
`;

export const EmptyMsgBox = styled.div`
  width: 1083px;
  height: 600px;
  text-align: center;
  padding-top: 200px;
`;

export const TotalMemoBox = styled.span`
  width: 59px;
  height: 40px;
  border-radius: 23px;
  background-color: #eceff1;
  text-align: center;
  display: inline-block;
  color: #94999e;
  font-size: 23px;
  font-weight: 700;
  padding-top: 12px;
`;

export const MemoCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
`;

export const MemoCard = styled.div`
  width: 330px;
  height: 321px;
  border-radius: 20px;
  border: 1px solid #d8dee9;
  padding: 33px 21px;

  /* 메모 제목 */
  h3 {
    color: #3f3f3f;
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 31px;
  }
  /* 메모 내용 */
  p {
    width: 271px;
    height: 102px;
    padding: 0;
    margin: 0;
    color: #8c8c8c;
    font-size: 15px;
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
  margin-bottom: 31px;

  /* 날짜 */
  & > span:first-child {
    color: #8c8c8c;
    font-size: 15px;
    font-weight: 500;
  }
  /* 상대방 */
  & > span:last-child {
    width: 112px;
    height: 24px;
    background-color: #ffe4dc;
    border-radius: 30px;
    color: #ff6e46;
    font-size: 13px;
    font-weight: 600;
    padding: 7px 0;
    text-align: center;
  }
`;
