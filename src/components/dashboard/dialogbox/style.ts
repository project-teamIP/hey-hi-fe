export const diallogBtnStyle = {
  width: "404px",
  height: "70px",
  borderRadius: "50px",
  fontWeight: "700",
  fontSize: "26px",
  color: "rgba(255, 255, 255, 1)",
};

interface DialogBoxStyle {
  padding: string;
  display: string;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems: string;
  justifyContent: "center" | "flex-start" | "space-between" | "space-around";
}

export const dialogBoxStyle: DialogBoxStyle = {
  padding: "40px 30px 40px 30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
};
