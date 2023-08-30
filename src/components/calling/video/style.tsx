import styled from "styled-components";

export const TextTimerGroup = styled.div`
  display: flex;
  gap: 20px;
  height: 50px;
  width: 100%;
  max-width: 1600px;
  align-items: flex-start;
  /* background-color: yellowgreen; */
  padding: 0px 30px;
  @media (max-width: 1490px) {
    max-width: calc(80%); /* 화면이 1200px 이하일 때 너비 조정 */
  }
`;

export const SideBox = styled.div`
  padding: 0px 10px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 420px;
  max-height: 960px;
  width: 100%;
  height: 960px;
  gap: 26px;

  @media (min-width: 1490px) {
    max-width: calc(40%); /* 화면이 1200px 이하일 때 너비 조정 */
    max-height: calc(100%); /* 화면 높이 기준으로 높이 조정 */
  }

  @media (max-width: 1490px) {
    margin-left: -0px;
    /* margin-top: 150px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 100%; /* 최대 너비를 뷰포트 크기에 맞게 조절 */
    height: auto; /* 높이를 컨텐츠 크기에 맞게 조절 */
    padding: 0px 0px;
  }

  @media (max-width: 1240px) {
    gap: 10px;
  }
`;

export const TotalBox = styled.div`
  /* margin-left: -16%; */
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 20px 10px 0px 10px;
  /* background-color: green; */
  height: 100%;
  max-width: 1600px;
  width: 100%;
  gap: 30px;

  @media (max-width: 1490px) {
    display: flex;
    flex-direction: column;
    max-width: calc(80%); /* 화면이 1200px 이하일 때 너비 조정 */
    max-height: calc(100vh); /* 화면 높이 기준으로 높이 조정 */
  }
`;

export const MatchingBox = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #f0f2f4;
`;

export const VideoWrapper = styled.div`
  /* background-color: purple; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  width: 100%;
  height: 100%;
`;

export const VideoContainer = styled.div`
  /* margin-top: -13%; */
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  width: 519px;
  height: 742px;
`;

export const VideoBox = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;

  box-sizing: border-box; /* 이 부분 추가 */
  border-radius: 30px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
  @media (max-width: 1490px) {
    max-width: calc(100%-80%);
    max-height: calc(100%-60%);
    video {
      max-width: calc(100%-80%);
      max-height: calc(100%-60%);
    }
  }
`;

export const ButtonGroup = styled.div`
  /* background-color: beige; */
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1490px) {
    max-width: calc(100%-80%); /* 화면이 1540px 이하일 때 너비 조정 */
    height: auto; /* 높이를 auto로 설정하여 비율에 맞게 조절 */
    font-size: 14px; /* 폰트 크기 조정 */
  }
`;

export const ThreeButton = styled.div`
  /* background-color: orange; */
  width: 50%;
  display: flex;
  gap: 10px;
  margin-right: 268.47px;
  @media (max-width: 1490px) {
    max-width: calc(50%-30%) !important; /*화면이 1540px 이하일 때 너비 조정 */
  }
`;

export const ButtonStyle = styled.button`
  width: 160px;
  height: 52px;
  border: 1px solid #bababa;
  background-color: #f8f8f8;
  color: #a0a0a0;
  border-radius: 15px;
  font-size: 17px;
  font-weight: 500;

  &:active {
    border-color: #ff6e46;
    color: #ff6e46;
  }

  @media (max-width: 1490px) {
    max-width: calc(100%-80%) !important; /*화면이 1540px 이하일 때 너비 조정 */
    font-size: calc(15px) !important;
  }
`;

export const ButtonInnerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const CallingTextGroup = styled.div`
  /* margin-left: -16%; */
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 20px;
  }
  h4 {
    font-size: 17px;
    font-weight: 500;
    color: #5a5a5a;
  }
`;

export const CallTimer = styled.div`
  margin-bottom: 10px;
  background-color: #ff6e46;
  width: 141px;
  height: 49px;
  border-radius: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
`;

export const MediaWrapper = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  /* align-items: center;
  justify-content: center; */
`;

export const MediaBox = styled.div`
  padding: 50px 60px 20px 60px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1200px; */
  margin: 0px auto;
  /* background-color: blue; */
  /* position: fixed; */

  @media (max-width: 1490px) {
    align-items: center;
  }
`;

export const WithVedioTag = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;

  h4 {
    margin: -60px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #000;
    /* width: 121px; */
    width: 23.35%;
    height: 6.35%;
    /* height: 47px; */
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    position: relative; /* 추가 */
    z-index: 2; /* 추가 */
  }

  @media (max-width: 1490px) {
    h4 {
      max-width: calc(23.35%-22%);
      max-height: calc(6.35%-5.5%);
    }
  }
`;
