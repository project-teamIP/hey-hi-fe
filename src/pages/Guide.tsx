import React from "react";
import Computer from "../assets/images/computer.svg";
import { styled } from "styled-components";

const Guide = () => {
  return (
    <Wrap>
      <div>
        <img src={Computer} alt="컴퓨터" />
      </div>
      <Title>PC버전으로 접속해주세요</Title>
      <SubTitle>
        콘텐츠 특성 상 아쉽게도 모바일은 지원하지 않습니다.
        <br />
        PC에서 헤이,안녕을 이용해주세요!
      </SubTitle>
      <Button>링크 복사하기</Button>
    </Wrap>
  );
};

export default Guide;

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.div`
  color: #000000;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 76px 0px 31px;
`;

const SubTitle = styled.div`
  color: #9e9e9e;
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 76px;
`;

const Button = styled.button`
  width: 242px;
  height: 63px;
  border: none;
  border-radius: 50px;
  background: #ff6e46;

  /* 폰트 */
  color: #ffffff;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;
`;
