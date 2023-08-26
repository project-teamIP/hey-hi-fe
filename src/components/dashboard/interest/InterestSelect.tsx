import { useQuery } from "react-query";
import * as S from "./style";
import { getUserInfo } from "../../../api/api";
import MyInterestSelect from "./MyInterestSelet";

const InterestSelect = () => {
  const { data } = useQuery("userInfo", () => getUserInfo());
  const userData = data;
  // console.log("관심사", userData?.interests);
  return (
    <S.InterestWrapper>
      <h3>나의 관심사</h3>
      <S.InterestBoxContainer>
        <MyInterestSelect MatchingUserData={userData?.interests} />
      </S.InterestBoxContainer>
    </S.InterestWrapper>
  );
};

export default InterestSelect;
