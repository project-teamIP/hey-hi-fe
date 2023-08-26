import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MainReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 719px;
  background-color: #2c2c2c;

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 53px;
    margin-top: 28px;
    color: #fff;
  }

  .subtitle {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
  }
`;

export const ReviewSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0 102px 0;
`;

export const SectionNum = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: #ff6e46;
  color: #fff;
  font-size: 13px;
  text-align: center;
  letter-spacing: 0.52px;
  font-weight: 700;
  padding: 11px 0;
  margin-top: 91px;
`;

export const ReviewWrapper = styled.div`
  margin-top: 102px;
`;

export const Cards = styled.div`
  width: 1920px;
`;

export const ReviewCard = styled.div`
  width: 474px !important;
  height: 251px;
  border-radius: 29px;
  background-color: ${colors.gray};
  display: flex !important;
  justify-content: space-around;
  align-items: center;
  margin: 0 25px;
`;

export const CardContent = styled.div`
  width: 272px;
  height: 195px;
  margin-top: 28px;
  position: relative;
`;

export const Purpose = styled.p`
  width: max-content;
  height: 29px;
  padding: 0 10px;
  background-color: ${colors.blue};
  color: ${colors.gray};
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  margin-bottom: 13px;
`;

export const Content = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  width: 236px;
`;

export const UserInfo = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: #959595;
  position: absolute;
  bottom: 0;
`;

/* 커스텀 화살표 */
export const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`;
