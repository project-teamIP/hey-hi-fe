import * as S from "./style";
import Reviews from "./Reviews";

const MainReview = () => {
  return (
    <S.MainReviewBox>
      <S.SectionNum>02</S.SectionNum>
      <h1>생생한 유저들의 후기!</h1>
      <p>계속 한줄로 텍스트를 입력해 문장을 완성해주세요.</p>
      <S.ReviewWrapper>
        <Reviews />
      </S.ReviewWrapper>
    </S.MainReviewBox>
  );
};

export default MainReview;
