import React from "react";
import * as S from "./style";
import Button from "../../button/Button";
import * as M from "../notice/style";

interface ExitRoomModalProps {
  isExitModalOpen: boolean;
  onClickCancelExitRoom: () => void;
  onClickConfirmExitRoom: () => void;
}
const ExitModal: React.FC<ExitRoomModalProps> = (props) => {
  const { isExitModalOpen, onClickCancelExitRoom, onClickConfirmExitRoom } = props;
  return (
    <>
      {isExitModalOpen && (
        <M.Wrap>
          <S.Container>
            <S.TextBox>
              <S.Title>나가기</S.Title>
              <S.Content>통화를 종료하시겠습니까?</S.Content>
            </S.TextBox>
            <S.ButtonContainer>
              <Button.Primary size="small" activebc="#FF6E46" onClick={onClickCancelExitRoom}>
                취소
              </Button.Primary>
              <Button.Primary size="small" activebc="#FF6E46" onClick={onClickConfirmExitRoom}>
                나가기
              </Button.Primary>
            </S.ButtonContainer>
          </S.Container>
        </M.Wrap>
      )}
    </>
  );
};

export default ExitModal;
