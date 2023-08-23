import * as S from "../../dashboard/interest/style";
import { CallRoomCategoriProps } from "../../../types/types";

const MatchingUserCategori = ({ interest, image, className, size }: CallRoomCategoriProps) => {
  return (
    <S.CategoriStyle className={className} size="callroom">
      <S.Image>
        <img src={`/categori/${image}`} alt={interest} />
      </S.Image>
      <S.Name>{interest}</S.Name>
    </S.CategoriStyle>
  );
};

export default MatchingUserCategori;
