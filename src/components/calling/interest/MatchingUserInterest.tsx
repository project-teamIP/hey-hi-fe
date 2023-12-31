import { useRef } from "react";
import { MatchingUserProps } from "../../../types/types";
import interests from "../../../utils/interests.json";
import MatchingUserCategori from "./MatchingUserCategori";
import NoInterestBox from "../../../components/dashboard/interest/NoInterestBox";

const MatchingUserInterest = ({ MatchingUserData }: MatchingUserProps) => {
  const filteredInterests = useRef<{ name: string; image: string }[]>([]);

  if (Array.isArray(MatchingUserData)) {
    const arrayUserData = Array.from(MatchingUserData); // 유사 배열을 배열로 변환
    filteredInterests.current = interests.filter((interest) =>
      arrayUserData.includes(interest.name)
    );
    // console.log("filteredInterests", filteredInterests.current);
  } else {
    console.log("MatchingUserData가 배열 형태가 아닙니다.");
  }

  return (
    <>
      {filteredInterests.current.map((interest, index) => (
        <MatchingUserCategori
          key={interest.name}
          interest={interest.name} // interest 값 전달
          image={interest.image} // image 값 전달
          className={`box-color-${index % 4}`}
          customSize="callroom"
        />
      ))}
      {Array.from({ length: Math.max(4 - filteredInterests.current.length, 0) }).map((_, index) => (
        <NoInterestBox
          key={`noInterest-${index}`}
          className={`box-color-${(filteredInterests.current.length + index) % 4}`}
          customSize="callroom"
        />
      ))}
    </>
  );
};
export default MatchingUserInterest;
