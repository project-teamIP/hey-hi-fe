import React, { useEffect, useState } from "react";
import DashBoardBox from "../DashBoardBox";
import instance from "../../../api/api";
import { useQuery } from "react-query";
import { DashboardMemosType } from "../../../types/user";
import * as S from "./style";

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
      <S.TextContainer>
        <S.WordGroup>
          <h3>내가 쓴 메모</h3>
          <p>더보기</p>
        </S.WordGroup>
        <S.TextBoxGroup>
          {memoData && memoData.length > 0 ? (
            memoData.map((memo, index) => {
              if (index < 4) {
                return (
                  <S.TextBox key={memo.id}>
                    <div>
                      <S.TextBoxInfo>
                        <p>{memo.date}</p>
                        <S.TextBoxTag>{memo.nickname}과의 통화</S.TextBoxTag>
                      </S.TextBoxInfo>
                      <h2>{memo.title}</h2>
                      <p>{memo.content}</p>
                      {/* <p>Index: {index}</p> */}
                    </div>
                  </S.TextBox>
                );
              }
              return null; // 3보다 큰 인덱스는 렌더링하지 않음
            })
          ) : (
            <p>메모 데이터가 없습니다.</p>
          )}
        </S.TextBoxGroup>
      </S.TextContainer>
    </DashBoardBox>
  );
};

export default Memo;
