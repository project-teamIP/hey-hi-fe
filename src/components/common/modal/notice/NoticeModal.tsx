import React from "react";
import * as S from "./style";

const NoticeModal = () => {
  return (
    <S.Wrap>
      {/* 모달 내무 컨테이너 */}
      <S.Container>
        {/* 아이콘 */}
        <S.Icon></S.Icon>
        {/* 타이틀 */}
        <S.Title>텍스트를 입력해주세요.</S.Title>
        {/* 상세 내용 */}
        <S.Content>
          <p>텍스트를 입력해주세요.</p>
          <p>텍스트를 새로 입력해주세요!</p>
        </S.Content>
        {/* 안내문 */}
        <S.NoticeContainer>
          <S.Notice>
            <S.Icon size="small"></S.Icon>
            <p>텍스트를 입력해주세요.</p>
          </S.Notice>
          <S.Notice>
            <S.Icon size="small"></S.Icon>
            <p>텍스트를 입력해주세요.</p>
          </S.Notice>
        </S.NoticeContainer>
        {/* 시작하기 */}
        <S.StartButton>시작하기</S.StartButton>
      </S.Container>
    </S.Wrap>
  );
};

export default NoticeModal;
