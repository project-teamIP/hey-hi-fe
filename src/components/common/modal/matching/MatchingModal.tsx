import React from "react";
import * as M from "../notice/style";
import * as S from "./style";
import spinPath from "../../../../assets/images/match_spinner.svg";

interface MatchingModalProps {
  isMatchingModalOpen: boolean;
  isCallHidden: boolean;
  isWelcomeHidden: boolean;
  onClickcloseMatchingModal: () => void;
}

const MatchingModal: React.FC<MatchingModalProps> = (props) => {
  const { isMatchingModalOpen, isCallHidden, isWelcomeHidden, onClickcloseMatchingModal } = props;
  return (
    <>
      {isMatchingModalOpen && (
        <M.Wrap>
          <S.MatchingContainer>
            <div hidden={isCallHidden}>
              <h2>매칭완료</h2>
              <p>잠시 후 상대방과 연결됩니다.</p>
            </div>
            <div hidden={isWelcomeHidden}>
              <h2>매칭 중입니다</h2>
              <p>나와 관심사가 비슷한 친구와 매칭을 시도하고 있어요!</p>
            </div>
            <S.MatchingSpinnerBox>
              <S.SpinnerImage style={{ width: "65px", height: "65px" }} src={spinPath} alt="spin" />
            </S.MatchingSpinnerBox>
            <S.MatchingBtn onClick={onClickcloseMatchingModal}>취소</S.MatchingBtn>
          </S.MatchingContainer>
        </M.Wrap>
      )}
    </>
  );
};

export default MatchingModal;
