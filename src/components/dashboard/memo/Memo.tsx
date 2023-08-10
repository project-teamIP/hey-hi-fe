import React from "react";
import DashBoardBox from "../DashBoardBox";
import styled from "styled-components";

const Memo = () => {
  return (
    <DashBoardBox size="memo">
      <TextContainer>
        <WordGroup>
          <h3>내가 쓴 메모</h3>
          <p>더보기</p>
        </WordGroup>
        <TextBoxGroup>
          <TextBox>
            <h4>08/01</h4>
            <p>
              Copy Lorem ipsum dolor sit amet consectetur.Dictum placerat imperdiet iaculis
              tellus.abddvcddfsefsefewfwefewf
            </p>
            <LineStyle>
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </LineStyle>
          </TextBox>
          <TextBox>
            <h4>08/01</h4>
            <p>
              Copy Lorem ipsum dolor sit amet consectetur.Dictum placerat imperdiet iaculis
              tellus.abddvcddfsefsefewfwefewf
            </p>
            <LineStyle>
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </LineStyle>
          </TextBox>
          <TextBox>
            <h4>08/01</h4>
            <p>
              Copy Lorem ipsum dolor sit amet consectetur.Dictum placerat imperdiet iaculis
              tellus.abddvcddfsefsefewfwefewf
            </p>
            <LineStyle>
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </LineStyle>
          </TextBox>
          <TextBox>
            <h4>08/01</h4>
            <p>
              Copy Lorem ipsum dolor sit amet consectetur.Dictum placerat imperdiet iaculis
              tellus.abddvcddfsefsefewfwefewf
            </p>
            <LineStyle>
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </LineStyle>
          </TextBox>
          <TextBox>
            <h4>08/01</h4>
            <p>
              Copy Lorem ipsum dolor sit amet consectetur.Dictum placerat imperdiet iaculis
              tellus.abddvcddfsefsefewfwefewf
            </p>
            <LineStyle>
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
              <HorizontalLine />
            </LineStyle>
          </TextBox>
        </TextBoxGroup>
      </TextContainer>
    </DashBoardBox>
  );
};

const svgCode = `
<svg width="5547" height="6203" viewBox="0 0 5547 6203" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M239.095 0C107.046 0 0 105.188 0 234.943V5967.56C0 6097.32 107.046 6202.51 239.095 6202.51H4329.34L5539.23 4886.82V5969.44C5539.23 6078.43 5463.7 6170.08 5361.3 6196.63C5467.64 6172.79 5547 6079.28 5547 5967.56V234.943C5547 105.188 5439.96 0 5307.91 0H239.095Z" fill="#E2E8F2" fill-opacity="0.25"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4327.64 6202.56L5539.25 4885H4566.74C4434.68 4885 4327.64 4990.18 4327.64 5119.94V6202.56Z" fill="#D8DCE8"/>
</svg>
`;

const encodedSvg = encodeURIComponent(svgCode);
const svgUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
const TextBox = styled.div`
  margin-top: 30px;
  background-image: url(${svgUrl}); /* 이미지 URL을 넣어주세요 */
  background-size: cover;
  background-position: center top;
  height: 264px;
  width: 232px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 25px 0px #e2e8f2;

  h4 {
    font-size: 13px;
    font-weight: 600;
    color: #000000;
  }

  p {
    font-size: 13px;
    font-weight: 500;
    color: #707070;
    line-height: 38px;
  }
`;

const HorizontalLine = styled.div`
  border-top: 1px solid #e2e2e2; /* 가로선의 색과 두께를 설정합니다 */
  width: 100%; /* 가로선의 너비를 설정합니다 */
`;

const LineStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -120px;
  gap: 35px;
  bottom: 0; /* 아래쪽에 배치하도록 합니다 */
  left: 0; /* 왼쪽에 배치하도록 합니다 */
  width: 100%; /* 너비를 100%로 설정하여 가로선을 부모 박스에 맞게 만듭니다 */
`;

const TextContainer = styled.div`
  margin: 20px 20px 20px 20px;
  overflow: hidden;
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 23.87px;
  }
`;

const TextBoxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const WordGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 13px;
    font-weight: 600;
    color: #b5b5b5;
    line-height: 15.51px;
  }
`;

export default Memo;
