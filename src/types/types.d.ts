// 회원가입 페이지 슬라이드
export interface SlideProps {
  slideIndex: number;
  onClickNextButtonHandler: () => void;
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
