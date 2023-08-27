import React from "react";
import * as S from "./style";
import { useMutation, useQueryClient } from "react-query";
import { deleteSingleMemo } from "../../../../api/api";

interface DeleteModalProps {
  onClickMemoDeleteModalHandler: () => void;
  memoId: number;
  onDeleted: () => void;
  bc?: string;
  tc?: string;
}

const DeleteMemoModal: React.FC<DeleteModalProps> = ({
  onClickMemoDeleteModalHandler,
  memoId,
  onDeleted,
}) => {
  // 메모 삭제
  const queryClient = useQueryClient();
  const deleteMemoMutation = useMutation((memoId: number) => deleteSingleMemo(memoId), {
    onSuccess: () => {
      queryClient.invalidateQueries("myMemo");
      alert("메모가 삭제되었습니다.");
    },
  });
  const onClickMemoDeleteHandler = () => {
    deleteMemoMutation.mutate(memoId);
    // 삭제 확인 모달 닫기
    onClickMemoDeleteModalHandler();
    // 부모 모달 닫기
    onDeleted();
  };

  return (
    <S.DeleteModalOverlay>
      <S.DeleteModalBox>
        <h3>프로필 사진 설정</h3>
        <S.DeleteModalBody>
          메모를 삭제하시겠습니까? <br />
          삭제 후에는 복구가 어렵습니다.
        </S.DeleteModalBody>
        <S.BtnBox>
          <S.ModalBtn bc="#EFF0F1" tc="#000" onClick={onClickMemoDeleteModalHandler}>
            취소
          </S.ModalBtn>
          <S.ModalBtn onClick={onClickMemoDeleteHandler}>확인</S.ModalBtn>
        </S.BtnBox>
      </S.DeleteModalBox>
    </S.DeleteModalOverlay>
  );
};

export default DeleteMemoModal;
