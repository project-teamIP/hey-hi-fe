import { getMemos } from "../../../api/api";
import * as S from "./style";
import * as C from "../../../assets/styles/commonStyle";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";
import { useQuery, useQueryClient } from "react-query";
import { MemosType } from "../../../types/user";
import Pagination from "../../common/pagination/Pagination";
import { useEffect, useState } from "react";
import { formatDateTime } from "../../../utils/formattedDate";
import ViewMemoModal from "./viewMemoModal/ViewMemoModal";

const MyMemo = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useQuery(["myMemos", currentPage], () => getMemos(currentPage));

  // 메모 목록
  const memoList = data?.content || [];
  const totalMemos = data?.totalElements || 0;

  // 페이지네이션 전체 페이지
  const totalPages: number = data?.totalPages || 1;

  // 메모 조회 모달 - 클릭한 메모의 정보를 저장하는 상태
  const [selectedMemo, setSelectedMemo] = useState<MemosType | null>(null);
  const onClickMemoModalHandler = (memo: MemosType) => {
    setSelectedMemo(memo);
  };

  const closeModalHandler = () => {
    setSelectedMemo(null);
    queryClient.prefetchQuery(["myMemos", currentPage]);
  };

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
      <S.PageTitle>
        <h1>나의 메모</h1>
        <span>{totalMemos}</span>
      </S.PageTitle>
      <S.MemoCards>
        {memoList.length === 0 ? (
          <S.EmptyMsgBox>등록된 메모가 없습니다.</S.EmptyMsgBox>
        ) : (
          memoList.map((memo: MemosType) => (
            <S.MemoCard key={memo.id} onClick={() => onClickMemoModalHandler(memo)}>
              <S.CardHeader>
                <span>{formatDateTime(memo.createdAt)}</span>
                <span>{memo.partnerNickname}과의 통화</span>
              </S.CardHeader>
              <h3>{memo.title}</h3>
              <p>{memo.content}</p>
            </S.MemoCard>
          ))
        )}
      </S.MemoCards>
      {/* 페이지네이션 */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChangePageHandler={setCurrentPage}
      />
      {/* 모달 */}
      {selectedMemo && (
        <ViewMemoModal memo={selectedMemo} onCloseModalHandler={closeModalHandler} />
      )}
    </S.MyMemoBox>
  );
};

export default MyMemo;
