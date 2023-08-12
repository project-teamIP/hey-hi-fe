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
