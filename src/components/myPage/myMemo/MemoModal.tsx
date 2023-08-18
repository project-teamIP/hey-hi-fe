import React, { useState } from "react";
import * as S from "./style";
import { MemosType } from "../../../types/user";
import { formatDateTime2 } from "../../../utils/formattedDate";
import { useMutation, useQueryClient } from "react-query";
import { deleteSingleMemo, editMemo } from "../../../api/api";
import Button from "../../common/button/Button";
import { MemoEditType } from "../../../types/types";

interface MemoModalProps {
  memo: MemosType;
  onCloseModalHandler: () => void;
}

const MemoModal: React.FC<MemoModalProps> = ({ memo, onCloseModalHandler }) => {
  // 드랍다운
  const [showDropDown, setShowDropDown] = useState(false);
  const onClickDropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };
  // 메모 수정
  const [isEditing, setIsEditing] = useState(false);
  const [editedMemo, setEditedMemo] = useState({
    id: memo.id,
    title: memo.title,
    content: memo.content,
  });
  const onClickMemoEditHandler = () => {
    setShowDropDown(false);
    setIsEditing(true);
  };
  const editMemoMutation = useMutation((editedMemo: MemoEditType) => editMemo(editedMemo), {
    onSuccess: () => {
      queryClient.invalidateQueries("myMemo");
      setIsEditing(false);
    },
  });
  const onClickMemoEditSubmitHandler = () => {
    editMemoMutation.mutate(editedMemo);
  };
  // 최대 글자수
  const maxLength = 1500;
  // 메모 삭제
  const queryClient = useQueryClient();
  const deleteMemoMutation = useMutation((memoId: number) => deleteSingleMemo(memoId), {
    onSuccess: () => {
      queryClient.invalidateQueries("myMemo");
      alert("메모가 삭제되었습니다.");
    },
  });
  const onClickMemoDeleteHandler = () => {
    setShowDropDown(false);
    deleteMemoMutation.mutate(memo.id);
    onCloseModalHandler();
  };

  return (
    <S.MemoModalOverlay>
      <S.MemoModalBox>
        <S.CloseButton onClick={onCloseModalHandler}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.1 27.3L0 25.2L11.55 13.65L0 2.1L2.1 0L13.65 11.55L25.2 0L27.3 2.1L15.75 13.65L27.3 25.2L25.2 27.3L13.65 15.75L2.1 27.3Z"
              fill="black"
            />
          </svg>
        </S.CloseButton>
        <S.MemoModalHeader $isEditing={isEditing}>
          <p>
            {formatDateTime2(memo.createdAt)} {memo.partnerNickname}과의 통화
          </p>
          <S.MemoModalMore>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedMemo.title}
                  onChange={(e) => setEditedMemo({ ...editedMemo, title: e.target.value })}
                />
                <span>
                  <span className="count">{editedMemo.content.length}자</span> / 1500자
                </span>
              </>
            ) : (
              <>
                <h3>{memo.title}</h3>
                <button onClick={onClickDropDownHandler}>
                  <img
                    src={require("../../../assets/images/mypage/kebab-btn.png")}
                    alt="memo-more"
                  />
                </button>
              </>
            )}
          </S.MemoModalMore>
          {showDropDown && (
            <S.MoreDropdown>
              <button onClick={onClickMemoEditHandler}>
                <img src={require("../../../assets/images/mypage/memo-edit.png")} alt="memo-edit" />
                수정하기
              </button>
              <button onClick={onClickMemoDeleteHandler}>
                <img
                  src={require("../../../assets/images/mypage/memo-delete.png")}
                  alt="memo-delete"
                />
                삭제하기
              </button>
            </S.MoreDropdown>
          )}
        </S.MemoModalHeader>
        {isEditing ? (
          <S.MemoModalBodyEdit>
            <textarea
              value={editedMemo.content}
              onChange={(e) => setEditedMemo({ ...editedMemo, content: e.target.value })}
              maxLength={maxLength}
            />
            <S.EditBtns>
              <Button.Primary
                size="small"
                color="black"
                bc="#EFF0F1"
                fw="700"
                onClick={() => {
                  setIsEditing(false);
                  setEditedMemo({
                    id: memo.id,
                    title: memo.title,
                    content: memo.content,
                  });
                }}>
                취소
              </Button.Primary>
              <Button.Primary size="small" bc="#FF6E46" onClick={onClickMemoEditSubmitHandler}>
                수정
              </Button.Primary>
            </S.EditBtns>
          </S.MemoModalBodyEdit>
        ) : (
          <S.MemoModalBody>{memo.content}</S.MemoModalBody>
        )}
      </S.MemoModalBox>
    </S.MemoModalOverlay>
  );
};

export default MemoModal;
