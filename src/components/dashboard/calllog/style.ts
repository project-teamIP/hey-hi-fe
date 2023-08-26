import styled, { css } from "styled-components";

export type CallLogInfo = {
  image: string;
  nickname: string;
  country: string;
  time: string;
  date: string;
};

export interface ProfileDivProps {
  image?: string; // image prop을 정의
}

export const ProfileDiv = styled.div<ProfileDivProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: ${(props) => (props.image !== null ? `url(${props.image})` : "none")};
  background-size: cover;
  background-color: ${(props) => (props.image !== null ? "transparent" : "rgba(152, 152, 152, 1)")};
`;

export const CallList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: #f8f9fc;
  width: 100%;
  height: 61px;
  border-radius: 20px;
  border: 1px solid #d8dee9;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: row;
`;
export const CallListBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  /* &:active {
    background-color: ${({ color }) => (color === "#ffe4dc" ? "#e7cdc5" : "#ffe4dc")};
  } */

  ${({ color }) => {
    switch (color) {
      case "friend":
        return css`
          background-color: #ffe4dc;
          &:active {
            background-color: #e7cdc5;
          }
        `;
      case "more":
        return css`
          background-color: transparent;
          /* &:active {
            background-color: #d8dee9; 
          }*/
        `;
      // default:
      //   return css`
      //     background-color: #ffe4dc;
      /* &:active {
            background-color: #e7cdc5;
          } 
        `;*/
    }
  }}

  img {
    max-width: 100%;
    height: auto;
    size: cover;
    top: 0;
    left: 0;
  }
`;

export const CallLogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  align-items: stretch;
  flex-wrap: nowrap;
  margin: 20px;
  gap: 7px;
`;

export const CallLogWrapper = styled.div`
  /* margin: 40px 20px 40px 20px; */
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
  h2 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
  }
`;

export const CallLogMatchingUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 36px;

  p {
    width: 141px;
    white-space: nowrap; // 텍스트를 한 줄로 표시
    overflow: hidden; // 넘치는 내용 숨김
    text-overflow: ellipsis; // 생략 부호 표시
    color: #000;
    font-size: 17px;
    font-weight: 400;
    line-height: 140%;
  }
`;

export const NoCallLogBox = styled.div`
  margin-top: 20px;
  width: 35%;
  height: 35%;
  p {
    margin-top: 33px;
    color: #aeaeae;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    line-height: normal;
  }
`;
