import { getMemos } from "../../../api/api";
import * as S from "./style";
import * as C from "../../../assets/styles/commonStyle";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";
import { useQuery } from "react-query";
import { MemosType } from "../../../types/user";
import Pagination from "../../common/pagination/Pagination";
import { useState } from "react";

const MyMemo = () => {
  const { data, isLoading } = useQuery("myInfo", getMemos);
  // 메모 목록
  const memoList = data?.content || [];
  const totalMemos = data?.totalElements || 0;
  console.log("메모: ", memoList, "페이지네이션: ", data);

  //페이지네이션 전체 페이지
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages: number = data?.totalPages || 1;

  // 로딩중 스피너 설정
  if (isLoading) {
    return (
      <C.SpinnerBox>
        <C.LoadingSpinner>
          <img src={rabbitSvg} alt="isLoading" />
        </C.LoadingSpinner>
      </C.SpinnerBox>
    );
  }

  return (
    <S.MyMemoBox>
      <h1>나의 메모</h1>
      <S.TotalMemoBox>{totalMemos}</S.TotalMemoBox>

      {memoList.length === 0 ? (
        <S.EmptyMsgBox>등록된 메모가 없습니다.</S.EmptyMsgBox>
      ) : (
        memoList.map((memo: MemosType) => (
          <S.MemoCards>
            <S.MemoCard>
              <S.CardHeader>
                <span>날짜</span>
                <span>누구와의 통화</span>
              </S.CardHeader>
              <h3>제목</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem adipisci at
                consequuntur atque quaerat corporis facilis nisi? Consectetur repellat deleniti
                inventore, tempora earum dolore? Dignissimos magnam dolorum vero dolor!
              </p>
            </S.MemoCard>{" "}
          </S.MemoCards>
        ))
      )}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </S.MyMemoBox>
  );
};

export default MyMemo;
