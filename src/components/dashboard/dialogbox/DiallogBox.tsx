import Button from "../../common/button/Button";
import DashBoardBox from "../DashBoardBox";
import { diallogBtnStyle, dialogBoxStyle } from "./style";

const DiallogBox = () => {
  return (
    <DashBoardBox size="diallogBox" style={dialogBoxStyle}>
      <div style={{ fontWeight: "600", fontSize: "35px" }}>
        텍스트를 입력하세요!<br></br>입력하세요!
      </div>
      <Button.Primary style={diallogBtnStyle}>통화하기</Button.Primary>
    </DashBoardBox>
  );
};

export default DiallogBox;
