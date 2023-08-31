import { useEffect, useState } from "react";
import DashBoardBox from "../DashBoardBox";
import instance from "../../../api/api";
import { useQuery } from "react-query";
import { DashboardMemosType } from "../../../types/user";
import * as S from "./style";
import noMemoPath from "../../../assets/images/noMemo.svg";
import { useNavigate } from "react-router-dom";

const Memo = () => {
  const navigate = useNavigate();
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

  const onClickGotoMypageMemo = () => {
    localStorage.setItem("activePage", "나의메모");
    navigate("/mypage");
  };

  return (
    <DashBoardBox size="memo">
      <S.TextContainer>
        <S.WordGroup>
          <h3>내가 쓴 메모</h3>
          <p onClick={onClickGotoMypageMemo}>더보기</p>
        </S.WordGroup>
        <S.TextBoxGroup>
          {memoData && memoData.length > 0 ? (
            memoData.map((memo, index) => {
              if (index < 4) {
                return (
                  <S.TextBox key={memo.id}>
                    <S.TextBoxInfo>
                      <p>{memo.date}</p>
                      <S.TextBoxTag>{memo.nickname}과의 통화</S.TextBoxTag>
                    </S.TextBoxInfo>
                    <S.TextBody>
                      <h2>{memo.title}</h2>
                      <p>{memo.content}</p>
                    </S.TextBody>
                    {/* <p>Index: {index}</p> */}
                  </S.TextBox>
                );
              }
              return null; // 3보다 큰 인덱스는 렌더링하지 않음
            })
          ) : (
            <S.NoMemoWrapper>
              <S.NoMemoBox>
                <img style={{ width: "100%" }} src={noMemoPath} alt="noMemo" />
                <p>아직 작성된 메모가 없어요</p>
              </S.NoMemoBox>
            </S.NoMemoWrapper>
          )}
        </S.TextBoxGroup>
      </S.TextContainer>
    </DashBoardBox>
  );
};

export default Memo;
