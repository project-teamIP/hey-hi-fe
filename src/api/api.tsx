import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { SignupInformationData } from "../types/types";
import { LoginInformationData } from "../types/types";

// Axios 인스턴스 생성
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 쿠키를 읽어오는 함수
const getCookies = (): { [key: string]: string } => {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";");
  const cookieObject: { [key: string]: string } = {};

  cookieArray.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    cookieObject[name] = value;
  });

  return cookieObject;
};

// 토큰을 헤더에 추가하는 함수
const addTokenToHeaders = (config: any, token: string | undefined, header: string) => {
  if (token) {
    config.headers[header] = token;
  }
};

// 요청 인터셉터 설정
instance.interceptors.request.use(
  async function (config) {
    const cookies = getCookies(); // 쿠키 가져오기
    const { access_token, refresh_token } = cookies;

    addTokenToHeaders(config, access_token, "AccessToken");
    addTokenToHeaders(config, refresh_token, "RefreshToken");

    // 개발환경에서난 콘솔이 보이도록 하기
    if (process.env.NODE_ENV === "development") {
      console.log("요청 완료", config);
    }

    return config;
  },
  function (error: AxiosError) {
    console.log("인터셉트 요청 오류");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  function (response: AxiosResponse<any>) {
    console.log("response", response);
    return response;
  },
  async function (error: AxiosError) {
    console.log("error", error);
    console.log(error.response?.data);
    if (
      error.response?.status === 401 &&
      (error.response.data as any)?.message === "토큰이 만료되었습니다."
    ) {
      const cookies = getCookies();
      const { refresh_token } = cookies;

      // 리프레시 토큰이 존재할 경우에만 실행
      if (refresh_token) {
        try {
          const refreshResponse = await instance.post("/auth/re-access", {
            refresh_token,
          });
          const newAccessToken = refreshResponse.headers.access_token;
          console.log(newAccessToken);
          console.log(refreshResponse);

          if (error.config) {
            const newConfig = { ...error.config };
            addTokenToHeaders(newConfig, newAccessToken, "AccessToken");
            return instance.request(newConfig);
          }
        } catch (refreshError) {
          console.log("액세스 토큰 재발급 실패", refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;

// 회원가입
const userRegister = async (userData: SignupInformationData) => {
  const response = await instance.post(`/api/users/signup`, userData);
  return response.data;
};

// 회원 아이디 중복 조회
const userIdCheck = async (loginId: string) => {
  const response = await instance.get(`/api/users/check?email=${loginId}`);
  return response.data;
};

// 회원 닉네임 중복 조회
const userNickNameCheck = async (nickName: string) => {
  const response = await instance.get(`/api/users/check?nickname=${nickName}`);
  console.log("닉네임 중복 확인", nickName, response.data);
  return response.data;
};

// 로그인
const userLogin = async (loginData: LoginInformationData) => {
  const response = await instance.post(`/api/users/login`, loginData);
  // path:/ : 쿠키의 유효범위 설정
  document.cookie = `access_token=${response.headers.accesstoken}; path=/;`;
  document.cookie = `refresh_token=${response.headers.refreshtoken}; path=/`;

  console.log("로그인", response);
  return response.data;
};

// 카카오 로그인
const userKakaoLogin = async (KAKAO_CODE: string) => {
  const response = await instance.get(`/api/users/login/kakao?code=${KAKAO_CODE}`);
  // path:/ : 쿠키의 유효범위 설정
  document.cookie = `access_token=${response.headers.accesstoken}; path=/;`;
  document.cookie = `refresh_token=${response.headers.refreshtoken}; path=/`;

  console.log("카카오 로그인", response);
  return response.data;
};

// 구글 로그인
const userGoogleLogin = async (GOOGLE_CODE: string) => {
  const response = await instance.get(`/api/users/login/google?code=${GOOGLE_CODE}`);
  // path:/ : 쿠키의 유효범위 설정
  document.cookie = `access_token=${response.headers.accesstoken}; path=/;`;
  document.cookie = `refresh_token=${response.headers.refreshtoken}; path=/`;

  console.log("구글 로그인", response);
  return response.data;
};

export { userRegister, userLogin, userKakaoLogin, userGoogleLogin, userIdCheck, userNickNameCheck };

// 로그아웃
export const userLogout = async () => {
  try {
    const response = await instance.post(`/api/users/logout`);
    if (response.status === 200) {
      alert("로그아웃되었습니다😘");
      return response.data;
    } else {
      console.error("로그아웃 실패");
      return null;
    }
  } catch (error) {
    console.error("로그아웃 중 오류 발생:", error);
    throw error;
  }
};

// 마이페이지 조회
export const getUserInfo = async () => {
  try {
    const response = await instance.get(`/api/users/mypage`);
    return response.data;
  } catch (error) {
    console.error("mypage 조회 오류", error);
  }
};

// 프로필 이미지 변경
export const changeProfileImg = async (image: FormData) => {
  try {
    const request = await instance.put(`/api/users/image`, image, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return request;
  } catch (error) {
    throw error;
  }
};

// 회원정보 수정
export const changeUserInfo = async (userInfo: any) => {
  try {
    const response = await instance.patch(`/api/users`, userInfo);
    return response;
  } catch (error) {
    throw error;
  }
};

// 회원 탈퇴
export const withdrawalUser = async () => {
  try {
    const response = await instance.delete(`/api/users/withdrawal`);
    return response;
  } catch (error) {
    console.error("회원 탈퇴 오류", error);
    throw error;
  }
};

// 친구 조회
export const getBuddies = async (page: number) => {
  try {
    const response = await instance.get(`/api/users/buddy?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("친구 조회 오류", error);
    throw error;
  }
};

//친구 삭제
export const deleteBuddy = async (nickname: string) => {
  console.log("친삭", nickname);
  try {
    const response = await instance.delete(`/api/users/buddy/${nickname}`);

    return response;
  } catch (error) {
    console.error("친구 삭제 오류", error);
    throw error;
  }
};

// 메모 조회 전체
export const getMemos = async (page: number) => {
  try {
    const response = await instance.get(`/api/memos?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("메모목록 조회 오류", error);
    throw error;
  }
};

// 특정 메모 조회
export const getSingleMemo = async (id: number) => {
  try {
    const response = await instance.get(`/api/memo/${id}`);
    return response.data;
  } catch (error) {
    console.error("메모 조회 오류", error);
  }
};

// 메모 삭제
export const deleteSingleMemo = async (id: number) => {
  try {
    const response = await instance.delete(`/api/memo/${id}`);
    return response;
  } catch (error) {
    console.error("메모 조회 오류", error);
  }
};
