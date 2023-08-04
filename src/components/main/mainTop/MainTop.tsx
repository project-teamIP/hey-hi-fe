import React from "react";
import * as S from "./style";
import Button from "../../common/button/Button";

const MainTop = () => {
  return (
    <S.MainBox>
      <S.ImgBox>
        <img src="" alt="main_1" />
      </S.ImgBox>
      <div>
        <h1>
          텍스트를 입력하고
          <br />
          텍스트를 입력해주세요!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Culpa quis laudantium odio.
          <br />
          Repellendus facilis perspiciatis incidunt dicta sunt.
        </p>
        <Button.Primary size="large">시작하기</Button.Primary>
      </div>
    </S.MainBox>
  );
};

export default MainTop;
