import React from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";
import Select from "../select/Select";

const SlideOne = () => {
  return (
    <S.Wrap>
      <div>닉네임</div>
      <div>
        <Input placeholder="닉네임 입력" value="value" />
        <Button.Primary size="small">1</Button.Primary>
      </div>
      <div>거주국가</div>
      <Select label="국가를 선택해주세요." options={["한국", "일본"]} />
    </S.Wrap>
  );
};

export default SlideOne;
