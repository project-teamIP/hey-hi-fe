import React, { useState } from "react";
import * as S from "./style";
import Button from "../../button/Button";

const ReportModal = () => {
  // UseState
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  // Handler
  const onClickRadioChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.currentTarget.value);
  };

  return (
    <S.Wrap>
      {/* 모달 내무 컨테이너 */}
      <S.Container>
        <S.Title>신고하기</S.Title>
        {/* 신고 내용 분류 */}
        <S.ReportSelect>
          <input
            type="radio"
            name="report"
            value={"욕설/인신공격"}
            checked={selectedRadio === "욕설/인신공격"}
            onChange={onClickRadioChangeHanlder}
            className={selectedRadio === "욕설/인신공격" ? "selected" : ""}
          />
          <label>욕설/인신공격</label>
          <input
            type="radio"
            name="report"
            value={"영리목적/홍보성"}
            checked={selectedRadio === "영리목적/홍보성"}
            onChange={onClickRadioChangeHanlder}
            className={selectedRadio === "영리목적/홍보성" ? "selected" : ""}
          />
          <label>영리목적/홍보성</label>
          <input
            type="radio"
            name="report"
            value={"기타"}
            checked={selectedRadio === "기타"}
            onChange={onClickRadioChangeHanlder}
            className={selectedRadio === "기타" ? "selected" : ""}
          />
          <label>기타</label>
        </S.ReportSelect>
        {/* 신고 내용 작성 */}
        <S.Report></S.Report>
        {/* 버튼 */}
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

export default ReportModal;
