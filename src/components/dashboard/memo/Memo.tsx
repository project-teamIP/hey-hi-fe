import React, { useEffect, useState } from "react";
import DashBoardBox from "../DashBoardBox";
import styled from "styled-components";
import instance from "../../../api/api";
import { useQuery } from "react-query";
import { DashboardMemosType } from "../../../types/user";

const Memo = () => {
  const { data: memoData, error } = useQuery<DashboardMemosType[], Error>(
    "dashboardInfo",
    async () => {
      const response = await instance.get(`/api/users/dashboard`);
      return response.data.memos;
    }
  );

  const [selectedMemo, setSelectedMemo] = useState<DashboardMemosType | null>(null);

  useEffect(() => {
    if (memoData && memoData.length > 0) {
      setSelectedMemo(memoData[0]); // 예시로 첫 번째 메모 데이터 선택
    }
  }, [memoData]);

  if (error) {
    console.error("dashboard 조회 오류", error);
  }

  return (
    <DashBoardBox size="memo">
      <TextContainer>
        <WordGroup>
          <h3>내가 쓴 메모</h3>
          <p>더보기</p>
        </WordGroup>
        <TextBoxGroup>
          {memoData && memoData.length > 0 ? (
            memoData.map((memo, index) => {
              if (index < 4) {
                return (
                  <TextBox key={memo.id}>
                    <div>
                      <TextBoxInfo>
                        <p>{memo.date}</p>
                        <TextBoxTag>{memo.nickname}과의 통화</TextBoxTag>
                      </TextBoxInfo>
                      <h2>{memo.title}</h2>
                      <p>{memo.content}</p>
                    </div>
                  </TextBox>
                );
              }
              return null; // 3보다 큰 인덱스는 렌더링하지 않음
            })
          ) : (
            <p>메모 데이터가 없습니다.</p>
          )}
        </TextBoxGroup>
      </TextContainer>
    </DashBoardBox>
  );
};

const TextBox = styled.div`
  background-color: #f8f9fc;
  margin-top: 30px;
  /* margin: 30px; */
  width: 249px;
  height: 257px;
  flex-shrink: 0;
  padding: 24px 22px 24px 22px;
  border-radius: 20px;
  border: 1px solid #d8dee9;

  h2 {
    color: #3f3f3f;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
  }

  p {
    color: #8c8c8c;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
  }
`;

const TextBoxTag = styled.div`
  padding-top: 5px;
  text-align: center;
  border-radius: 30px;
  width: 109px;
  height: 24px;
  flex-shrink: 0;
  background-color: #ffe4dc;
  color: #ff6e46;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
`;

const TextBoxInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 27px;

  p {
    color: #939393;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
  }
`;

const TextContainer = styled.div`
  margin: 43px 23px 36px 23px;
  overflow: hidden;
`;

const TextBoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: blue;
`;

const WordGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.87px;
  }
  p {
    font-size: 13px;
    font-weight: 600;
    color: #b5b5b5;
    line-height: 15.51px;
  }
`;

export default Memo;
