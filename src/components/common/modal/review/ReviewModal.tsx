import React from "react";
import * as S from "./style";
import Button from "../../button/Button";

const ReviewModal = () => {
  return (
    <S.Wrap>
      <S.Container>
        {/* 타이틀 */}
        <S.Title>통화후기를 남겨주세요.</S.Title>
        <S.Content>상대방과의 통화가 어땠는지 후기를 남겨주세요!</S.Content>
        {/* 평점 */}
        <S.Grades>
          <S.Grade></S.Grade>
          <S.Grade></S.Grade>
          <S.Grade></S.Grade>
          <S.Grade></S.Grade>
          <S.Grade></S.Grade>
        </S.Grades>
        {/* 후기 */}
        <S.Review placeholder="후기를 입력하세요." />
        <S.ButtonContainer>
          <Button.Primary size="small">취소</Button.Primary>
          <Button.Primary size="small" bc="#323232">
            확인
          </Button.Primary>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrap>
  );
};

export default ReviewModal;
