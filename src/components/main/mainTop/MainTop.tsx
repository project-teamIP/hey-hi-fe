import * as S from "./style";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
//svg img
import mainTopSvg from "../../../assets/images/main/maintop.svg";
import mainTopSvg2 from "../../../assets/images/main/maintop2.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../types/user";

const MainTop = () => {
  // 로그인한 사용자가 접근 시 로그인 화면 말고 대쉬보드로 연결용
  const state = useSelector((state: RootState) => state.isLoggedIn.isLoggedIn);

  // width 1463px 이하에서 svg 변경
  const isUnder1463 = window.innerWidth < 1463;

  return (
    <div>
      <S.MainBox>
        <S.MainInner>
          <S.ImgBox>
            <img src={isUnder1463 ? mainTopSvg2 : mainTopSvg} alt="main-top" />
          </S.ImgBox>
          <S.MainText>
            <S.SvgBox>
              <svg
                width="234"
                height="141"
                viewBox="0 0 234 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 107.477C67.2072 112.646 182.007 108.351 143.549 49.8088C95.4765 -23.3683 46.5631 6.85665 82.3136 53.8846C110.914 91.5069 203.155 124.049 245.7 135.618"
                  stroke="#D14A00"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </S.SvgBox>
            <h1>
              헤이,안녕을 통해
              <br />
              언어를 교환해보세요!
            </h1>
            <p>
              언어를 교환하면서 관심사도 함께 공유하고 자연스럽게 친구를 만들어 보세요!
              <br />
              나와 잘맞는 친구를 만드는건 물론이고 나의 외국어 실력도 쑥쑥 늘거에요.
              <br />
              지금 바로 헤이,안녕을 시작해보세요!
            </p>
            <Link to={state ? "/dashboard" : "/login"}>
              <Button.Primary size="large" bc="#000">
                헤이,안녕 시작하기
              </Button.Primary>
            </Link>
          </S.MainText>
        </S.MainInner>
      </S.MainBox>
      <S.SvgBox2></S.SvgBox2>
    </div>
  );
};

export default MainTop;
