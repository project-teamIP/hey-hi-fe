import React from "react";
import * as S from "./style";
import Button from "../../button/Button";

const ExitModal = () => {
  return (
    <S.Wrap>
      {/* 모달 내무 컨테이너 */}
      <S.Container>
        <S.Title>나가기</S.Title>
        <S.Content>통화를 종료하시겠습니까?</S.Content>
        <S.ButtonContainer>
          <Button.Primary size="small">취소</Button.Primary>
          <Button.Primary size="small">나가기</Button.Primary>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrap>
  );
};

export default ExitModal;
