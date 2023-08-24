import React, { useState } from "react";
import * as S from "./style";
import Button from "../../button/Button";
import * as M from "../notice/style";
import instance from "../../../../api/api";

interface ReportModalProps {
  isReportModalOpen: boolean;
  onClickCancelReport: () => void;
  onClickConfirmReport: () => void;
  nickname: string;
}

const ReportModal: React.FC<ReportModalProps> = (props) => {
  const { isReportModalOpen, onClickCancelReport, onClickConfirmReport, nickname } = props;
  console.log("isReportModalOpen", isReportModalOpen);
  console.log("모달 컴포넌트");
  console.log("nickname", nickname);
  //UseState;
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
  // Handler
  const onClickRadioChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.currentTarget.value);
  };
  const ReportMatchingUser = async () => {
    const requestData = {
      nickname: nickname,
      category: selectedRadio,
    };
    try {
      const response = await instance.post("/api/users/report", requestData);
      return response;
    } catch (error) {
      console.error("Error while creating memo:", error);
    }
  };

  const handleReportConfirmation = () => {
    if (selectedRadio) {
      // 선택된 신고 사유를 처리하는 로직을 추가하세요
      console.log("Selected Report Reason:", selectedRadio);
      //ReportMatchingUser(); 내일 백엔드한테 물어보고 해결하기
      // 모달을 닫습니다.
      onClickConfirmReport();
    } else {
      console.log("Please select a report reason.");
    }
  };

  return (
    <>
      {isReportModalOpen && (
        <M.Wrap>
          {/* 모달 내무 컨테이너 */}
          <S.Container>
            <S.Title>신고하기</S.Title>
            {/* 신고 내용 분류 */}
            <S.ReportSelect>
              <S.TwoSelect>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"언어폭력 및 욕설"}
                    checked={selectedRadio === "언어폭력 및 욕설"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "언어폭력 및 욕설" ? "selected" : ""}
                  />
                  <label>언어폭력 및 욕설</label>
                </S.InputLabelGroup>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"성적 모독"}
                    checked={selectedRadio === "성적 모독"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "성적 모독" ? "selected" : ""}
                  />
                  <label>성적 모독</label>
                </S.InputLabelGroup>
              </S.TwoSelect>
              <S.TwoSelect>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"편견,차별,혐오발언"}
                    checked={selectedRadio === "편견,차별,혐오발언"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "편견,차별,혐오발언" ? "selected" : ""}
                  />
                  <label>편견,차별,혐오발언</label>
                </S.InputLabelGroup>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"광고,홍보,사기"}
                    checked={selectedRadio === "광고,홍보,사기"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "광고,홍보,사기" ? "selected" : ""}
                  />
                  <label>광고,홍보,사기</label>
                </S.InputLabelGroup>
              </S.TwoSelect>
            </S.ReportSelect>
            <S.ButtonContainer>
              <S.ReportBtn onClick={onClickCancelReport}>취소</S.ReportBtn>
              <S.ReportBtn onClick={handleReportConfirmation}>확인</S.ReportBtn>
            </S.ButtonContainer>
          </S.Container>
        </M.Wrap>
      )}
    </>
  );
};

export default ReportModal;
