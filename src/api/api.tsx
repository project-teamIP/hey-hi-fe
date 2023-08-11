import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { LoginInformationData, SignupInformationData } from "../types/types";

// Axios Instance 생성
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  function (config) {
    // 요청 전 수행할 작업
    // 1. 쿠키에서 엑세스 토큰 및 리프레시 토큰 값 가져오기
    const accessToken: string | undefined = Cookies.get("access_token");
    const refreshToken: string | undefined = Cookies.get("refresh_token");

    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    if (refreshToken) {
      config.headers.RefreshToken = `${refreshToken}`;
    }

    console.log("요청 완료", config);
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
    // 응답 성공 처리
    // 데이터 가공도 가능하다.
    console.log("response", response);
    return response;
  },
  function (error: AxiosError) {
    console.log("error", error);
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

// 로그인
const userLogin = async (loginData: LoginInformationData) => {
  const response = await instance.post(`/api/users/login`, loginData);

  // path:/ : 쿠키의 유효범위 설정
  document.cookie = `access_token=${response.headers.accesstoken}; path=/;`;
  document.cookie = `refresh_token=${response.headers.refreshtoken}; path=/`;

  console.log("로그인", response);
  return response.data;
};

export { userRegister, userLogin, userIdCheck };
