import React, { useEffect } from "react";
import styled from "styled-components";
import * as C from "../../assets/styles/commonStyle";
import rabbitSvg from "../../assets/images/profileImg/rabbit1.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userGoogleLogin } from "../../api/api";
import { useMutation } from "react-query";
import { logIn } from "../../redux/modules/userAuth";

const GoogleRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginMutation = useMutation(userGoogleLogin, {
    onSuccess: () => {
      dispatch(logIn());
      navigate("/dashboard");
    },
  });

  // 구글 인가코드
  const queryParams = new URLSearchParams(window.location.search);

  const GOOGLE_CODE = queryParams.get("code");

  useEffect(() => {
    if (GOOGLE_CODE) {
      loginMutation.mutate(GOOGLE_CODE);
    }
  }, []);

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

export default GoogleRedirect;

const Wrap = styled.div`
  margin-top: 70px;
  min-height: 1100px;
`;
