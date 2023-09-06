import React, { useState } from "react";
import * as S from "./style";
import * as M from "../notice/style";
import instance from "../../../../api/api";
import Button from "../../button/Button";

interface ReportModalProps {
  isReportModalOpen: boolean;
  onClickCancelReport: () => void;
  onClickConfirmReport: () => void;
  nickname: string;
}

const ReportModal: React.FC<ReportModalProps> = (props) => {
  const { isReportModalOpen, onClickCancelReport, onClickConfirmReport, nickname } = props;
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
      const result = window.confirm("정말 신고하시겠습니까?");
      if (result) {
        window.alert("신고을 진행합니다.");
        ReportMatchingUser();
        // 모달을 닫습니다.
        onClickConfirmReport();
      } else {
        window.alert("신고를 취소했습니다.");
        return;
      }
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
                    value={"ABUSIVE_LANGUAGE"}
                    checked={selectedRadio === "ABUSIVE_LANGUAGE"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "ABUSIVE_LANGUAGE" ? "selected" : ""}
                  />
                  <label>언어폭력 및 욕설</label>
                </S.InputLabelGroup>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"SEXUAL_HARASSMENT"}
                    checked={selectedRadio === "SEXUAL_HARASSMENT"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "SEXUAL_HARASSMENT" ? "selected" : ""}
                  />
                  <label>성적 모독</label>
                </S.InputLabelGroup>
              </S.TwoSelect>
              <S.TwoSelect>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"DISCRIMINATION"}
                    checked={selectedRadio === "DISCRIMINATION"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "DISCRIMINATION" ? "selected" : ""}
                  />
                  <label>편견,차별,혐오발언</label>
                </S.InputLabelGroup>
                <S.InputLabelGroup>
                  <input
                    type="radio"
                    name="report"
                    value={"SCAM"}
                    checked={selectedRadio === "SCAM"}
                    onChange={onClickRadioChangeHanlder}
                    className={selectedRadio === "SCAM" ? "selected" : ""}
                  />
                  <label>광고,홍보,사기</label>
                </S.InputLabelGroup>
              </S.TwoSelect>
            </S.ReportSelect>
            <S.ButtonContainer>
              <Button.Primary size="small" activebc="#FF6E46" onClick={onClickCancelReport}>
                취소
              </Button.Primary>
              <Button.Primary size="small" activebc="#FF6E46" onClick={handleReportConfirmation}>
                확인
              </Button.Primary>
            </S.ButtonContainer>
          </S.Container>
        </M.Wrap>
      )}
    </>
  );
};

export default ReportModal;
