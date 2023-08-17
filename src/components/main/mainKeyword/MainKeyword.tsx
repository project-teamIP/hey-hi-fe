import * as S from "./style";
// 키워드 svg
import shareSvg from "../../../assets/images/main/share.svg";
import funSvg from "../../../assets/images/main/fun.svg";
import eyesightSvg from "../../../assets/images/main/eyesight.svg";
import languageSvg from "../../../assets/images/main/language.svg";
import experienceSvg from "../../../assets/images/main/experience.svg";

const MainKeyword = () => {
  return (
    <S.MainKeywordBox>
      <S.SectionNum>01</S.SectionNum>
      <h2>
        자연스럽게 친구와 영어로
        <br />h 대화해보고 싶지 않나요?
      </h2>
      <S.BoxContainer>
        <S.KeywordImgBox>
          <img src={shareSvg} alt="keyword_1" />
          <p>
            한 줄로 텍스트를 입력해
            <br />
            문장을 완성해주세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={funSvg} alt="keyword_2" />
          <p>
            한 줄로 텍스트를 입력해
            <br />
            문장을 완성해주세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={eyesightSvg} alt="keyword_3" />
          <p>
            한 줄로 텍스트를 입력해
            <br />
            문장을 완성해주세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={languageSvg} alt="keyword_4" />
          <p>
            한 줄로 텍스트를 입력해
            <br />
            문장을 완성해주세요.
          </p>
        </S.KeywordImgBox>
        <S.KeywordImgBox>
          <img src={experienceSvg} alt="keyword_5" />
          <p>
            한 줄로 텍스트를 입력해
            <br />
            문장을 완성해주세요.
          </p>
        </S.KeywordImgBox>
      </S.BoxContainer>
    </S.MainKeywordBox>
  );
};

export default MainKeyword;
