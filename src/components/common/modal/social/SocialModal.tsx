import React from "react";
import * as S from "./style";
import Button from "../../button/Button";
import { useNavigate } from "react-router";
import SocialNotice from "../../../../assets/images/SocialNotice.svg"

const SocialModal = () => {
  const navigate = useNavigate();

  const onClickNavigateHandler = () => {
    navigate("/mypage")
  }

  return (
    <S.Wrap>
      {/* 모달 내무 컨테이너 */}
      <S.Container>
        <S.Img src={SocialNotice} />
        <S.Title>
          마이페이지에서 관심사와
          <br /> 거주국가,언어를 설정해주세요!
        </S.Title>
        <S.SubTitle>소셜로그인으로 가입한 회원은 설정이 필요해요.</S.SubTitle>
        <S.Content>관심사와 거주국가,언어를 설정 시 내 관심사와 언어에 맞춰 친구를 매칭해줍니다. 설정 후 나와 유사한 관심사를 가진 친구와 대화를 나누며 언어교환을 할 수 있어요!</S.Content>
        <S.ButtonContainer>
          <Button.Primary size="large" bc="#FF6E46" onClick={onClickNavigateHandler} >마이페이지로 가기</Button.Primary>
        </S.ButtonContainer>
      </S.Container>
    </S.Wrap>
  );
};

export default SocialModal;
