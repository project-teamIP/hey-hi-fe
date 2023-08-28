// 회원가입 페이지 슬라이드
export interface SlideProps {
  userData: UserData;
  setUserData: React.Dispatch<
    React.SetStateAction<{
      loginId: string;
      password: string;
      nickname: string;
      country: string;
      gender: string;
      language: string;
      interests: string[];
    }>
  >;
  slideIndex: number;
  onClickNextButtonHandler?: () => void;
  onClickUserRegisterHandler?: () => void;
}

export interface UserData {
  loginId: string;
  password: string;
  nickname: string;
  country: string;
  gender: string;
  language: string;
  interests: string[];
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
  selected: boolean;
};

// 메모
export type MemoEditType = {
  id: number;
  title: string;
  content: string;
};

// 유저정보
export interface UserInfoType {
  nickname: string;
  loginId: string;
  language: string;
  interests: string[];
  image: string;
  country: string;
  cleanPoint: number;
}

//통화방 타입

export interface MatchingUserData {
  interests: string[];
}

export interface MatchingUserProps {
  MatchingUserData: string[];
  // setUserData: React.Dispatch<
  //   React.SetStateAction<{
  //     interests: string[];
  //   }>
  // >;
}

export type CallRoomCategoriProps = {
  interest: string;
  image: string;
  className?: string;
  customSize?: "dashboard" | "callroom";
};

export type NoInterestCategoriProps = {
  className?: string;
  customSize?: "dashboard" | "callroom";
};

export type ProfileImgChagesProps = {
  profile: any;
};
