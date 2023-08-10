import React from "react";
import Button from "../../common/button/Button";
import DashBoardBox from "../DashBoardBox";
import { diallogBtnStyle, dialogBoxStyle } from "./style";
import * as S from "./style";

const DiallogBox = () => {
  return (
    <DashBoardBox style={dialogBoxStyle} size="diallogBox">
      <S.ImageContainer>
        <img src={require("../../../assets/images/dialogbox.png")} alt="dailogbox" />
        <S.InnerGroup>
          <div style={{ fontWeight: "600", fontSize: "35px" }}>
            반가워요!<br></br>스트로베리님!
          </div>
          <S.ButtonWrapper>
            <Button.Primary style={diallogBtnStyle}>통화하기</Button.Primary>
          </S.ButtonWrapper>
        </S.InnerGroup>
      </S.ImageContainer>
    </DashBoardBox>
  );
};

export default DiallogBox;
