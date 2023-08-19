import React, { useEffect, useState } from "react";
import DashBoardBox from "../DashBoardBox";
import styled from "styled-components";
import instance from "../../../api/api";
import { useQuery } from "react-query";
import { DashboardMemosType } from "../../../types/user";
import * as S from "./style";

const Memo = () => {
  const [memoData, setMemoData] = useState<DashboardMemosType[]>([]);
  const [memoInfo, setMemoInfo] = useState<DashboardMemosType>({
    content: "",
    nickname: "",
    id: "",
    title: "",
    date: "",
  });

  console.log("memoData", memoData);
  // 대시보드 정보 조회
  const getDashboardMemoInfo = async () => {
    try {
      const response = await instance.get(`/api/users/dashboard`);
      const memoData = response.data.memos;
      setMemoData(memoData); // memoData를 상태에 저장
    } catch (error) {
      console.error("dashboard 조회 오류", error);
    }
  };

  useEffect(() => {
    getDashboardMemoInfo();
  }, []); // 컴포넌트 마운트 시에만 대시보드 정보 조회

  useEffect(() => {
    if (memoData.length > 0) {
      const selectedMemo = memoData[0]; // 예시로 첫 번째 메모 데이터 선택
      setMemoInfo({
        nickname: selectedMemo.nickname,
        title: selectedMemo.title,
        id: selectedMemo.id,
        content: selectedMemo.content,
        date: selectedMemo.date,
      });
    }
  }, [memoData]);

  return (
    <DashBoardBox size="memo">
      <S.TextContainer>
        <S.WordGroup>
          <h3>내가 쓴 메모</h3>
          <p>더보기</p>
        </S.WordGroup>
        <S.TextBoxGroup>
          {memoData.length > 0 ? (
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
