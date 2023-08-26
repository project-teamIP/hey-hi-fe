import { styled } from "styled-components";

interface IconProps {
  size?: "small" | "normal";
}

// 전체 레이아웃
export const Wrap = styled.div`
  top: -10%;
  left: -10%;
  width: 120vw;
  height: 120vh;
  /* 급하게 바꿈 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  /* width: 100vw;
  height: 100vh; */

  background: rgb(160, 160, 160, 0.8);
  z-index: 2;
`;

// 모달 내부
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 540px;
  margin: 0px auto;
  padding: 50px 23px 42px;
  border-radius: 30px;
  background: #ffffff;

  h2 {
    color: #000;
    font-size: 34px;
    font-weight: 700;
    line-height: normal;
  }
  h4 {
    color: #000;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    line-height: 135%; /* 22.95px */
  }
`;

// 아이콘
export const Icon = styled.div<IconProps>`
  width: ${(props) =>
    ({
      normal: "58px",
      small: "48px",
    })[props.size || "normal"]};
  height: ${(props) =>
    ({
      normal: "58px",
      small: "48px",
    })[props.size || "normal"]};
  background: transparent;
`;

// 타이틀
export const Title = styled.div`
  font-size: 34px;
  margin: 18px 0px 13px;
`;

// 내용
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
`;

// 안내문
export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0px 21px;
  gap: 21px;
`;

export const Notice = styled.div`
  display: flex;
  width: 496px;
  height: 98px;
  align-items: center;
  padding: 0px 35px 0px 30px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  gap: 30px;

  p {
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 140%; /* 21px */
  }
`;

// 시작하기 버튼
export const StartButton = styled.button`
  width: 404px;
  height: 70px;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.52px;
  border: none;
  border-radius: 50px;
  background-color: #ff6e46;
`;
