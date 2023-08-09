import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

const Reviews = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <ReviewBox>
      <Slider {...settings}>
        <ReviewCard>
          <h3>1</h3>
        </ReviewCard>
        <ReviewCard>
          <h3>2</h3>
        </ReviewCard>
        <ReviewCard>
          <h3>3</h3>
        </ReviewCard>
        <ReviewCard>
          <h3>4</h3>
        </ReviewCard>
        <ReviewCard>
          <h3>5</h3>
        </ReviewCard>
        <ReviewCard>
          <h3>6</h3>
        </ReviewCard>
      </Slider>
    </ReviewBox>
  );
};

export default Reviews;

// styled-components
const ReviewBox = styled.div`
  width: 1920px;
`;

const ReviewCard = styled.div`
  width: 474px;
  height: 251px;
  border-radius: 29px;
  background-color: ${colors.gray};
`;
