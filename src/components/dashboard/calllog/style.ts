import styled, { css } from "styled-components";

export interface ProfileDivProps {
  image?: string; // image prop을 정의
}

export const ProfileDiv = styled.div<ProfileDivProps>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: ${(props) => (props.image ? `url(${props.image})` : "none")};
  background-size: cover;
  background-color: ${(props) => (props.image ? "transparent" : "rgba(152, 152, 152, 1)")};
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
  &:active {
    background-color: ${({ color }) => (color === "#ffe4dc" ? "#e7cdc5" : "#ffe4dc")};
  }

  ${({ color }) => {
    switch (color) {
      case "friend":
        return css`
          background-color: #ffe4dc;
          &:active {
            background-color: #e7cdc5;
          }
        `;
      case "call":
        return css`
          background-color: #ff6e46;
          &:active {
            background-color: #c95434;
          }
        `;
      default:
        return css`
          background-color: #ffe4dc;
          &:active {
            background-color: #e7cdc5;
          }
        `;
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
  gap: 20px;
`;

export const CallLogWrapper = styled.div`
  margin: 40px 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
