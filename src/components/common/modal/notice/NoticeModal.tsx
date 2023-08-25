import React from "react";
import * as M from "./style";
import svgPath from "../../../../assets/images/noticeModal_bang.svg";
import facePath from "../../../../assets/images/dissatisfied_Face.svg";
import handPath from "../../../../assets/images/sign_language.svg";

interface NoticecModalProps {
  isNoticeModalOpen: boolean;
  onClickOpenMatchingModal: () => void;
}

const NoticeModal: React.FC<NoticecModalProps> = (props) => {
  const { isNoticeModalOpen, onClickOpenMatchingModal } = props;
  return (
    <>
      {isNoticeModalOpen && (
        <M.Wrap>
          <M.Container>
            <M.Icon>
              <img style={{ width: "100%" }} src={svgPath} alt="bang" />
            </M.Icon>
            <h2>통화 전 한번만 읽어주세요!</h2>
            <M.Content>
              <h4>처음 만나는 친구와 대화하기 전</h4>
              <h4>몇가지만 기억해주세요!</h4>
            </M.Content>
            <M.NoticeContainer>
              <M.Notice>
                <M.Icon size="small">
                  <img style={{ width: "48px", height: "48px" }} src={facePath} alt="face" />
                </M.Icon>
                <p>
                  상대방에 대한 예의를 지켜주세요. 공격적인 언행 및 차별적인 발언은 신고의 대상이 될
                  수 있습니다.
                </p>
              </M.Notice>
              <M.Notice>
                <M.Icon size="small">
                  <img style={{ width: "48px", height: "48px" }} src={handPath} alt="hand" />
                </M.Icon>
                <p>
                  통화를 종료할때는 매너있게 나간다는 인사 후 통화를 종료해주세요. 그냥 대화방을
                  나갈 시 상대방이 당황스러울수 있습니다.
                </p>
              </M.Notice>
            </M.NoticeContainer>
            <M.StartButton onClick={onClickOpenMatchingModal}>통화 시작하기</M.StartButton>
          </M.Container>
        </M.Wrap>
      )}
    </>
  );
};

export default NoticeModal;
