import * as S from "./style";
import { CallRoomCategoriProps } from "../../../types/types";

const MyInterestCategori = ({ interest, image, className }: CallRoomCategoriProps) => {
  return (
    <S.CategoriStyle className={className} size="dashboard">
      <S.Image>
        <img src={`/categori/${image}`} alt={interest} />
      </S.Image>
      <S.Name>{interest}</S.Name>
    </S.CategoriStyle>
  );
};

export default MyInterestCategori;
