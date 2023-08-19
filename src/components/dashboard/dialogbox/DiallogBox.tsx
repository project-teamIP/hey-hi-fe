import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import DashBoardBox from "../DashBoardBox";
import { diallogBtnStyle, dialogBoxStyle } from "./style";
import * as M from "../../common/modal/notice/style";
import * as S from "./style";
import svgPath from "../../../assets/images/noticeModal_bang.svg";
import facePath from "../../../assets/images/dissatisfied_Face.svg";
import handPath from "../../../assets/images/sign_language.svg";
import instance from "../../../api/api";

const DiallogBox = () => {
  const navigate = useNavigate();
  const onClickGotoCallRoom = () => {
    navigate("/calling");
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onClickOpenModal = () => {
    setIsModalOpen(true);
  };

  const onClickcloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen, "isModalOpen");

  return (
    <>
      <DashBoardBox style={dialogBoxStyle} size="diallogBox">
        <S.ImageContainer>
          <img src={require("../../../assets/images/dialogbox.png")} alt="dailogbox" />
          <S.InnerGroup>
            <div style={{ fontWeight: "600", fontSize: "35px" }}>
              반가워요!<br></br>스트로베리님!
            </div>
            <S.ButtonWrapper>
              <>
                <Button.Primary style={diallogBtnStyle} onClick={onClickOpenModal}>
                  통화하기
                </Button.Primary>
                {isModalOpen && (
                  <M.Wrap>
                    {/* 모달 내무 컨테이너 */}
                    <M.Container>
                      {/* 아이콘 */}
                      <M.Icon>
                        <img style={{ width: "100%" }} src={svgPath} alt="bang" />
                      </M.Icon>
                      {/* 타이틀 */}
                      <h2>통화 전 한번만 읽어주세요!</h2>
                      {/* 상세 내용 */}
                      <M.Content>
                        <h4>처음 만나는 친구와 대화하기 전</h4>
                        <h4>몇가지만 기억해주세요!</h4>
                      </M.Content>
                      {/* 안내문 */}
                      <M.NoticeContainer>
                        <M.Notice>
                          <M.Icon size="small">
                            <img
                              style={{ width: "48px", height: "48px" }}
                              src={facePath}
                              alt="face"
                            />
                          </M.Icon>
                          <p>
                            상대방에 대한 예의를 지켜주세요. 공격적인 언행 및 차별적인 발언은 신고의
                            대상이 될 수 있습니다.
                          </p>
                        </M.Notice>
                        <M.Notice>
                          <M.Icon size="small">
                            <img
                              style={{ width: "48px", height: "48px" }}
                              src={handPath}
                              alt="hand"
                            />
                          </M.Icon>
                          <p>
                            통화를 종료할때는 매너있게 나간다는 인사 후 통화를 종료해주세요. 그냥
                            대화방을 나갈 시 상대방이 당황스러울수 있습니다.
                          </p>
                        </M.Notice>
                      </M.NoticeContainer>
                      {/* 시작하기 */}
                      <M.StartButton onClick={onClickGotoCallRoom}>통화 시작하기</M.StartButton>
                    </M.Container>
                  </M.Wrap>
                )}
              </>
            </S.ButtonWrapper>
          </S.InnerGroup>
        </S.ImageContainer>
      </DashBoardBox>
    </>
  );
};

export default DiallogBox;
