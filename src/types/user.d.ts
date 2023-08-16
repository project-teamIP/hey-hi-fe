// 회원가입
export type SignupFormValues = {
  email: string;
  nickname: string;
  password: string;
  code: string;
};

// 로그인
export type LoginFormValues = {
  email: string;
  password: string;
};

export type RootState = {
  isLoggedIn: {
    isLoggedIn: boolean;
  };
};

// 개인정보 수정
export type UserInfoType = {
  nickname: string;
  country: string;
  language: string;
  interest: string;
};

//친구목록
export type BuddiesType = {
  nickname: string;
  loginId: string;
  profileImage: string;
};

//메모목록
export type MemosType = {
  content: string;
  createdAt: string;
  id: number;
  modifiedAt: string;
  partnerImage: string;
  partnerNickname: string;
  title: string;
};
