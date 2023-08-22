import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const VideoContainer = styled.div`
  margin-top: -13%;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  max-width: 519px;
  max-height: 742px;
  width: 519px;
  height: 742px;
`;

export const VideoBox = styled.div`
  /* background-color: white; */
  max-width: 519px;
  max-height: 742px;
  width: 519px;
  height: 742px;

  box-sizing: border-box; /* 이 부분 추가 */
  border-radius: 30px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`;

export const ButtonGroup = styled.div`
  /* background-color: beige; */
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
`;

export const ButtonInnerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const CallingTextGroup = styled.div`
  margin-left: -16%;
  /* background-color: white; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  h2 {
    font-size: 22px;
    font-weight: 600;
  }
  h4 {
    font-size: 17px;
    font-weight: 500;
    color: #5a5a5a;
  }
`;

export const CallTimer = styled.div`
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

export const MediaBox = styled.div`
  padding: 50px 30px 20px 30px;
  width: 100%;
  max-width: 1200px;
  z-index: 1;
  h2 {
    color: #000;
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  }

  h4 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  }
`;

export const WithVedioTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  h4 {
    margin-top: -60px;
    margin-left: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #000;
    width: 121px;
    height: 47px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }
`;

//매칭 모달
export const MatchingContainer = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 541px;
  height: 376px;
  padding: 50px 23px 42px;
  border-radius: 30px;
  background: #ffffff;

  h2 {
    color: #000;
    font-size: 34px;
    text-align: center;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
  }
  h4 {
    color: #000;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    line-height: 140%; /* 22.95px */
  }
`;
export const MatchingSpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  height: 156px;
  width: 541px;
`;
export const MatchingBtn = styled.button`
  width: 326px;
  height: 70px;
  border-radius: 50px;
  background-color: #eff0f1;
  color: #000;
  font-size: 26px;
  font-weight: 700;
  line-height: normal;
  border: none;

  &:active {
    background-color: #ff6e46;
    color: #ffffff;
  }
`;
