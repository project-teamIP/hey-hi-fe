import * as S from "./style";
import { CallRoomCategoriProps } from "../../../types/types";

const MyInterestCategori = ({ interest, image, className, customSize }: CallRoomCategoriProps) => {
  const combinedClassName = `${className} ${customSize}`;
  return (
    <S.CategoriStyle className={combinedClassName}>
      <S.Image>
        <img src={`/categori/${image}`} alt={interest} />
      </S.Image>
      <S.Name>{interest}</S.Name>
    </S.CategoriStyle>
  );
};

export default MyInterestCategori;
