// 회원가입 페이지 슬라이드
export interface SlideProps {
  userData: {
    loginId: string;
    password: string;
    nickname: string;
    country: string;
    gender: string;
    language: string;
    interest: string;
  };
  setUserData: React.Dispatch<
    React.SetStateAction<{
      loginId: string;
      password: string;
      nickname: string;
      country: string;
      gender: string;
      language: string;
      interest: string;
    }>
  >;
  slideIndex: number;
  onClickNextButtonHandler?: () => void;
  onClickUserRegisterHandler?: () => void;
}

// 로그인
export type LoginInformationData = {
  loginId: string;
  password: string;
};

// 회원가입
export type SignupInformationData = {
  loginId: string;
  password: string;
  nickname: string;
};

// 카테고리
export type CategoriProps = {
  interest: string;
  image: string;
  onClick: () => void;
};
