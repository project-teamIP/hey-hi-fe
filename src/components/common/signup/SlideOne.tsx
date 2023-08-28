import React, { useState, useEffect } from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";
import { SlideProps } from "../../../types/types";
import { useMutation } from "react-query";
import { userIdCheck } from "../../../api/api";

const SlideOne = ({ userData, setUserData, onClickNextButtonHandler }: SlideProps) => {
  // 상태관리
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loginIdError, setloginIdError] = useState("");
  const [isloginIdValid, setIsloginIdValid] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  // 이메일 중복 체크
  const loginId = userData.loginId;

  // Mutation
  const userIdCheckMutation = useMutation(userIdCheck);

  // 비밀번호 확인
  useEffect(() => {
    setPasswordMatch(userData.password === passwordCheck);
  }, [userData.password, passwordCheck]);

  // 비밀번호 유효성 검사
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    return passwordRegex.test(password);
  };

  // 이메일 유효성 검사
  const validateLoginId = (loginId: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(loginId);
  };

  // 이메일 유효성 변경 시 이메일 상태 업데이트
  useEffect(() => {
    setIsloginIdValid(validateLoginId(loginId));
  }, [loginId]);

  // 비밀번호 유효성 검사 및 상태 업데이트
  const onChangePasswordHandler = (password: string) => {
    if (!validatePassword(password)) {
      setPasswordError("비밀번호는 8~16자리로, 영어와 숫자를 포함하여 입력해주세요.");
    } else {
      setPasswordError("");
    }
    setUserData({ ...userData, password: password });
  };

  // 중복 이메일 체크 함수
  const onClickLoginIdCheckHanlder = async () => {
    if (isloginIdValid) {
      try {
        // 이메일 유효성 검사 통과한 경우에만 API 호출
        const result = await userIdCheckMutation.mutateAsync(loginId);
        // response.data를 가공
        setIsMessage(result.message);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 이메일 유효성 검사 후 데이터 전송
  const onChangeEmailHandler = (loginId: string) => {
    if (loginId === "") {
      setloginIdError("");
    } else if (!validateLoginId(loginId)) {
      setloginIdError("올바른 이메일 형식으로 입력해주세요.");
    } else {
      setloginIdError("");
    }
    setUserData({ ...userData, loginId: loginId });
  };

  // 모든 입력 항목이 유효한지 검사
  const isFormValid =
    isloginIdValid &&
    userIdCheckMutation.isSuccess &&
    isMessage !== "이미 가입된 이메일입니다." &&
    passwordMatch &&
    passwordCheck !== "" &&
    validatePassword(userData.password);

  console.log(userData);
  return (
    <S.Wrap>
      {/* 닉네임 */}
      <S.Title>이메일</S.Title>
      <S.IdContainer>
        <Input
          placeholder="example@gmail.com"
          value={userData.loginId}
          type="text"
          onChangeHandler={(e) => onChangeEmailHandler(e.target.value)}
          size="small"
        />
        <Button.Primary
          size="the smallest"
          onClick={onClickLoginIdCheckHanlder}
          bc={userIdCheckMutation.isSuccess ? "#FF6E46" : "#999"}>
          중복확인
        </Button.Primary>
      </S.IdContainer>

      {/* 중복 체크 성공 시 메시지 표시 */}
      {loginIdError && <S.Message>{loginIdError}</S.Message>}
      {userIdCheckMutation.isSuccess && <S.Message>{isMessage}</S.Message>}

      {/* 비밀번호 */}
      <S.Title>비밀번호</S.Title>
      <Input
        placeholder="비밀번호"
        value={userData.password}
        type="password"
        size="medium"
        onChangeHandler={(e) => onChangePasswordHandler(e.target.value)}
      />
      {/* 비밀번호 유효성 표시 */}
      {passwordError && <S.Message>{passwordError}</S.Message>}

      {/* 비밀번호 확인 */}
      <S.Title>비밀번호 확인</S.Title>
      <Input
        placeholder="비밀번호 재입력"
        value={passwordCheck}
        type="password"
        size="medium"
        onChangeHandler={(e) => setPasswordCheck(e.target.value)}
      />

      {/* 비밀번호 일치 여부에 따른 메시지 표시 */}
      {!passwordMatch && passwordCheck !== "" && (
        <S.Message>비밀번호가 일치하지 않습니다.</S.Message>
      )}

      {/* 다음으로 넘어가기 */}
      <S.NextButton
        size="middle"
        onClick={onClickNextButtonHandler}
        bc={isFormValid ? "#FF6E46" : "#999"} // 유효할 때만 활성화된 스타일 적용
        disabled={!isFormValid} // 유효하지 않을 경우 버튼 비활성화
      >
        다음으로 넘어가기
      </S.NextButton>
    </S.Wrap>
  );
};

export default SlideOne;
