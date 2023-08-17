import React, { useEffect } from "react";
import styled from "styled-components";
import * as C from "../../assets/styles/commonStyle";
import rabbitSvg from "../../assets/images/profileImg/rabbit1.svg";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userKakaoLogin } from "../../api/api";
import { useMutation } from "react-query";
import { logIn } from "../../redux/modules/userAuth";

const KakaoRedirect = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const loginMutation = useMutation(userKakaoLogin, {
    onSuccess: () => {
      dispatch(logIn());
      navigate("/dashboard");
    },
  });

  // 카카오 인가코드
  const KAKAO_CODE = location.search.split("=")[1];

  useEffect(() => {
    if (KAKAO_CODE) {
      loginMutation.mutate(KAKAO_CODE);
    }
  }, []);

  console.log(KAKAO_CODE);
  return (
    <Wrap>
      <C.SpinnerBox>
        <C.LoadingSpinner>
          <img src={rabbitSvg} alt="isLoading" />
        </C.LoadingSpinner>
      </C.SpinnerBox>
    </Wrap>
  );
};

export default KakaoRedirect;

const Wrap = styled.div`
  margin-top: 70px;
  min-height: 1100px;
`;
