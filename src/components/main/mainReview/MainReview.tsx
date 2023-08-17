import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../../utils/reviews.json";

const MainReview = () => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    autoplay: true,
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
      <S.SectionNum>02</S.SectionNum>
      <h1>생생한 유저들의 후기!</h1>
      <p>계속 한줄로 텍스트를 입력해 문장을 완성해주세요.</p>
      <S.ReviewWrapper>
        <S.Cards>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <S.ReviewCard key={index}>
                <svg
                  width="151"
                  height="133"
                  viewBox="0 0 151 133"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M90.9149 56.9243C88.5891 55.6616 88.1508 50.3186 88.385 47.3672C87.0731 51.2088 84.4492 58.9763 84.4492 59.3136C84.4492 59.7352 88.8061 64.2327 90.3521 64.3732C91.8981 64.5138 101.315 63.9516 101.877 63.6705C102.327 63.4456 103.376 58.7982 103.845 56.5027L100.331 49.897C98.2697 52.4737 95.8334 59.5947 90.9149 56.9243Z"
                    fill="#FF6E46"
                  />
                  <ellipse cx="74.3339" cy="92.759" rx="38.2284" ry="39.3528" fill="#FF6E46" />
                  <rect x="67.5898" width="20.8008" height="77.5812" rx="10.4004" fill="#FF6E46" />
                  <rect
                    x="22.0508"
                    y="23.2656"
                    width="20.8008"
                    height="77.5812"
                    rx="10.4004"
                    transform="rotate(-23.7149 22.0508 23.2656)"
                    fill="#FF6E46"
                  />
                  <rect
                    x="0.910156"
                    y="66.7891"
                    width="20.8008"
                    height="77.5812"
                    rx="10.4004"
                    transform="rotate(-49.4013 0.910156 66.7891)"
                    fill="#FF6E46"
                  />
                  <rect
                    x="118.465"
                    y="18.2734"
                    width="20.8008"
                    height="77.5812"
                    rx="10.4004"
                    transform="rotate(30 118.465 18.2734)"
                    fill="#FF6E46"
                  />
                  <rect
                    x="145.617"
                    y="64.6484"
                    width="20.8008"
                    height="77.5812"
                    rx="10.4004"
                    transform="rotate(75 145.617 64.6484)"
                    fill="#FF6E46"
                  />
                  <path
                    d="M62.996 54.1808C58.7533 55.4858 54.9944 48.8917 53.7849 45.8764L50.1562 54.4774L56.5761 58.1847L69.4159 55.6637L70.1137 39.3516H67.8807C67.9272 40.9333 68.0203 43.9783 68.0203 43.5038C68.0203 42.9106 68.2994 52.5496 62.996 54.1808Z"
                    fill="#FF6E46"
                  />
                  <path
                    d="M112.995 69.2858L116.354 63.5234C113.075 65.4442 106.503 69.342 106.39 69.5669C106.278 69.7918 106.812 74.0644 107.093 76.1725L122.413 73.0805L122.959 70.8318C122.35 71.0661 119.91 71.7032 116.087 72.3778C112.265 73.0524 112.433 70.5976 112.995 69.2858Z"
                    fill="#FF6E46"
                  />
                  <path
                    d="M117.475 93.8881C114.102 94.7876 112.322 98.5261 111.853 100.353H109.604L107.637 93.0448L122.956 89.3906L123.94 92.061C123.19 92.2484 120.848 92.9886 117.475 93.8881Z"
                    fill="#FF6E46"
                  />
                  <path
                    d="M35.5378 97.2608C35.0881 95.2369 29.2133 90.702 26.4023 88.6875H41.3002L45.0949 97.2608C42.8462 100.119 38.2644 105.609 37.9271 104.71C37.5055 103.585 36.1 99.7906 35.5378 97.2608Z"
                    fill="#FF6E46"
                  />
                </svg>
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
