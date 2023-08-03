import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

// Axios Instance 생성
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  function (config) {
    // 요청 전 수행할 작업
    // 1. 로컬 스토리지에서 토큰 값 가져오기
    const token = localStorage.getItem("token");

    if (token !== null) {
      config.headers.Authorization = `${token}`;
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
    // 응답 성공 처리
    // 데이터 가공도 가능하다.
    console.log("response", response);
    return response;
  },
  function (error: AxiosError) {
    console.log("인터셉트 요청 오류");
    return Promise.reject(error);
  }
);

export default instance;
