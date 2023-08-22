import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../../utils/reviews.json";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrow";

const MainReview = () => {
  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    autoplay: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.MainReviewBox>
      <S.SectionNum>SAY</S.SectionNum>
      <h1>생생한 유저들의 후기!</h1>
      <p className="subtitle">계속 한줄로 텍스트를 입력해 문장을 완성해주세요.</p>
      <S.ReviewWrapper>
        <S.Cards>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <S.ReviewCard key={index}>
                <img
                  src={require(`../../../assets/images/main/${review.image}.png`)}
                  alt={review.image}
                />
                <S.CardContent>
                  <S.Purpose>{review.purpose}</S.Purpose>
                  <S.Content>{review.content}</S.Content>
                  <S.UserInfo>
                    {review.name} {review.age} | {review.occupation}
                  </S.UserInfo>
                </S.CardContent>
              </S.ReviewCard>
            ))}
          </Slider>
        </S.Cards>
      </S.ReviewWrapper>
    </S.MainReviewBox>
  );
};

export default MainReview;
