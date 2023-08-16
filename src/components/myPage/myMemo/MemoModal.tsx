import React from "react";
import * as S from "./style"; // 모달 스타일 파일을 import합니다.
import { MemosType } from "../../../types/user";
import { formatDateTime2 } from "../../../utils/formattedDate";
import { MemoModalMore } from "./style";

interface MemoModalProps {
  memo: MemosType; // 클릭한 메모의 데이터를 받아옵니다.
  onClose: () => void; // 모달을 닫는 함수를 받아옵니다.
}

const MemoModal: React.FC<MemoModalProps> = ({ memo, onClose }) => {
  return (
    <S.MemoModalOverlay>
      <S.MemoModalBox>
        <S.CloseButton onClick={onClose}>
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
        <S.MemoModalHeader>
          <p>
            {formatDateTime2(memo.createdAt)} {memo.partnerNickname}과의 통화
          </p>
          <S.MemoModalMore>
            <h3>{memo.title}</h3>
            <img src={require("../../../assets/images/more.png")} alt="memo-more" />
          </S.MemoModalMore>
        </S.MemoModalHeader>

        <S.MemoModalBody>{memo.content}</S.MemoModalBody>
      </S.MemoModalBox>
    </S.MemoModalOverlay>
  );
};

export default MemoModal;
