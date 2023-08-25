import * as S from "./style";
import { NoInterestCategoriProps } from "../../../types/types";
import findingPath from "../../../assets/images/findingInterest.svg";

const NoInterestBox = ({ className, customSize }: NoInterestCategoriProps) => {
  const combinedClassName = `${className} ${customSize}`;
  return (
    <S.DefaultCategoriStyle className={combinedClassName}>
      <S.Image>
        <img src={findingPath} alt="finding" />
      </S.Image>
      <S.Name>찾는 중...</S.Name>
    </S.DefaultCategoriStyle>
  );
};

export default NoInterestBox;
