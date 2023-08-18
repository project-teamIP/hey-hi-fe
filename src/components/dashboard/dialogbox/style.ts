import styled from "styled-components";

export const diallogBtnStyle = {
  width: "404px",
  height: "70px",
  borderRadius: "50px",
  fontWeight: "700",
  fontSize: "26px",
  color: "rgba(255, 255, 255, 1)",
};

interface DialogBoxStyle {
  display: string;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems: string;
  justifyContent: "center" | "flex-start" | "space-between" | "space-around";
  backgourndColor: string;
}

export const dialogBoxStyle: DialogBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  backgourndColor: "#FF6E46",
};

export const ButtonWrapper = styled.div`
  margin-top: 180px;
`;

export const ImageContainer = styled.div`
  margin-top: -21px;
  margin-left: -26px;
  width: 100%;
  height: 100%;
  /* width: 450px;
  height: 392px; */
  img {
    top: 0;
    left: 0;
  }
`;

export const InnerGroup = styled.div`
  position: relative;
  margin-top: -400px;
  margin-left: 47px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 1px solid green;
  background-color: transparent;
  z-index: 1;
`;
