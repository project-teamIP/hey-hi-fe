import React, { useState } from "react";
import * as S from "./style";
import * as C from "../../../../assets/styles/commonStyle";
import rabbitSvg from "../../../../assets/images/profileImg/rabbit1.svg";
import { MemosType } from "../../../../types/user";
import { formatDateTime2 } from "../../../../utils/formattedDate";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { editMemo, getSingleMemo } from "../../../../api/api";
import Button from "../../../common/button/Button";
import { MemoEditType } from "../../../../types/types";
import DeleteMemoModal from "../deleteMemoModal/DeleteMemoModal";

interface MemoModalProps {
  memo: MemosType;
  onCloseModalHandler: () => void;
}

const ViewMemoModal: React.FC<MemoModalProps> = ({ memo, onCloseModalHandler }) => {
  const queryClient = useQueryClient();

  // 해당 메모 하나만 조회
  const { data, isLoading } = useQuery(["myMemo", memo.id], () => getSingleMemo(memo.id));
  console.log(data, memo);

  // 드랍다운
  const [showDropDown, setShowDropDown] = useState(false);
  const onClickDropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  // 메모 삭제 확인 모달
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onClickMemoDeleteModalHandler = () => {
    setShowDropDown(false);
    setIsDeleteModalOpen((prevIsDeleteModalOpen) => !prevIsDeleteModalOpen);
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
      queryClient.refetchQueries(["myMemo", memo.id]);
      setIsEditing(false);
      setEditedMemo({
        id: memo.id,
        title: data.title,
        content: data.content,
      });
    },
  });

  const onClickMemoEditSubmitHandler = () => {
    editMemoMutation.mutate(editedMemo);
  };

  // 최대 글자수
  const maxLength = 1500;

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
                <h3>{data.title}</h3>
                <button onClick={onClickDropDownHandler}>
                  <img
                    src={require("../../../../assets/images/mypage/kebab-btn.png")}
                    alt="memo-more"
                  />
                </button>
              </>
            )}
          </S.MemoModalMore>
          {showDropDown && (
            <S.MoreDropdown>
              <button onClick={onClickMemoEditHandler}>
                <img
                  src={require("../../../../assets/images/mypage/memo-edit.png")}
                  alt="memo-edit"
                />
                수정하기
              </button>
              <button onClick={onClickMemoDeleteModalHandler}>
                <img
                  src={require("../../../../assets/images/mypage/memo-delete.png")}
                  alt="memo-delete"
                />
                삭제하기
              </button>
            </S.MoreDropdown>
          )}
          {/* 삭제 확인 모달 */}
          {isDeleteModalOpen && (
            <DeleteMemoModal
              memoId={memo.id}
              onClickMemoDeleteModalHandler={onClickMemoDeleteModalHandler}
              onDeleted={onCloseModalHandler}
            />
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
                    title: data.title,
                    content: data.content,
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
          <S.MemoModalBody>
            {/* 화면에 보여질 때 <br /> 태그를 줄바꿈으로 변환 */}
            {data.content.split("\n").map((line: string, index: number) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </S.MemoModalBody>
        )}
      </S.MemoModalBox>
    </S.MemoModalOverlay>
  );
};

export default ViewMemoModal;
