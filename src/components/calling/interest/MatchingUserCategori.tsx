import * as S from "./Style";
import { CallRoomCategoriProps } from "../../../types/types";

const MatchingUserCategori = ({ interest, image }: CallRoomCategoriProps) => {
  return (
    <S.CategoriStyle>
      <S.Image>
        <img src={`/categori/${image}`} alt={interest} />
      </S.Image>
      <S.Name>{interest}</S.Name>
    </S.CategoriStyle>
  );
};

export default MatchingUserCategori;
