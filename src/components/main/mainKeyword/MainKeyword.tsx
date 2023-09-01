import * as S from "./style";
// 키워드 svg
import shareSvg from "../../../assets/images/main/share.svg";
import funSvg from "../../../assets/images/main/fun.svg";
import eyesightSvg from "../../../assets/images/main/eyesight.svg";
import languageSvg from "../../../assets/images/main/language.svg";
import experienceSvg from "../../../assets/images/main/experience.svg";

const MainKeyword = () => {
  // width 1463px 이하에서 배열 변경
  const isUnder1463 = window.innerWidth < 1463;
  return (
    <S.MainKeywordBox>
      <S.SectionNum>WHY?</S.SectionNum>
      <h2>
        자연스럽게 친구와 영어로
        <br />
        대화해보고 싶지 않나요?
      </h2>
      <S.BoxContainer>
        <S.KeywordImgBox>
          <img src={shareSvg} alt="keyword_1" />
          <p>
            세계 각지의 사람들과
            <br />
            다양한 경험을 나눠보세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={funSvg} alt="keyword_2" />
          <p>
            재미있는 순간을
            <br />
            함께 즐기세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={eyesightSvg} alt="keyword_3" />
          <p>
            새로운 시선을
            <br />
            찾아보세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={languageSvg} alt="keyword_4" />
          <p>
            다른 언어를 사용하여
            <br />
            의사 소통하세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={experienceSvg} alt="keyword_5" />
          <p>
            세상을 더 다양하게
            <br />
            탐험하세요.
          </p>
        </S.KeywordImgBox>
      </S.BoxContainer>
    </S.MainKeywordBox>
  );
};

export default MainKeyword;
