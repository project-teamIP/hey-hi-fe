import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";
import DashBoardBox from "../DashBoardBox";
import { diallogBtnStyle, dialogBoxStyle } from "./style";
import * as S from "./style";
import { getUserInfo } from "../../../api/api";
import { useQuery } from "react-query";
import NoticeModal from "../../common/modal/notice/NoticeModal";

const DiallogBox = () => {
  const navigate = useNavigate();
  const { data } = useQuery("userInfo", () => getUserInfo());
  const userData = data;
  // console.log("userData", userData?.nickname);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = React.useState(false);

  const onClickOpenNoticeModal = () => {
    setIsNoticeModalOpen(true);
  };

  const onClickOpenMatchingModal = () => {
    setIsNoticeModalOpen(false);
    navigate("/calling");
  };

  return (
    <>
      <NoticeModal
        isNoticeModalOpen={isNoticeModalOpen}
        onClickOpenMatchingModal={onClickOpenMatchingModal}
      />
      <DashBoardBox style={dialogBoxStyle} size="diallogBox">
        <S.ImageContainer>
          <img src={require("../../../assets/images/dialogbox.png")} alt="dailogbox" />
          <S.InnerGroup>
            <div style={{ fontWeight: "600", fontSize: "35px" }}>
              반가워요!<br></br>
              {userData?.nickname}님!
            </div>
            <S.ButtonWrapper>
              <Button.Primary style={diallogBtnStyle} bc="#000" onClick={onClickOpenNoticeModal}>
                통화하기
              </Button.Primary>
            </S.ButtonWrapper>
          </S.InnerGroup>
        </S.ImageContainer>
      </DashBoardBox>
    </>
  );
};

export default DiallogBox;
