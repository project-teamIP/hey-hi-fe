import React, { useState } from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";
import Select from "../select/Select";
import countries from "../../../utils/countries.json";
import { SlideProps } from "../../../types/types";
import { useMutation } from "react-query";
import { userNickNameCheck } from "../../../api/api";

const SlideTwo = ({ userData, setUserData, onClickNextButtonHandler }: SlideProps) => {
  // useState
  const [isCheckNickName, setIsCheckNickName] = useState("");

  // 닉네임 중복 체크
  const nickName = userData.nickname;

  // useMutation
  const userNickNameCheckMutation = useMutation(userNickNameCheck);

  // handler
  const onClickuserNickNameCheckHanlder = async () => {
    try {
      const result = await userNickNameCheckMutation.mutateAsync(nickName);
      // response.data를 가공
      setIsCheckNickName(result.message);
    } catch (error) {
      console.error(error);
    }
  };

  // 닉네임, 거주국가, 사용언어, 성별 선택시 버튼 활성화
  const isFormValid =
    isCheckNickName !== "사용 중인 닉네임입니다." &&
    userData.nickname !== "" &&
    userData.country !== "" &&
    userData.language !== "" &&
    userData.gender !== "";

  return (
    <S.Wrap>
      {/* 닉네임 */}
      <S.Title>닉네임</S.Title>
      <S.NameContainer>
        <Input
          placeholder="닉네임 입력"
          value={userData.nickname}
          size="small"
          onChangeHandler={(e) => setUserData({ ...userData, nickname: e.target.value })}
        />
        <Button.Primary
          size="the smallest"
          onClick={onClickuserNickNameCheckHanlder}
          bc={userNickNameCheckMutation.isSuccess ? "#FF6E46" : "#999"}>
          중복확인
        </Button.Primary>
      </S.NameContainer>
      {userNickNameCheckMutation.isSuccess && <S.Message>{isCheckNickName}</S.Message>}

      {/* 거주국가 */}
      <S.Title>거주국가</S.Title>
      <Select
        label="국가를 선택해주세요."
        options={countries}
        size="normal"
        onChangeHandler={(selectedCountry) =>
          setUserData({ ...userData, country: selectedCountry })
        }
      />

      {/* 사용언어 */}
      <S.Title>사용언어</S.Title>
      <Select
        label="언어를 선택해주세요."
        options={["한국어", "English"]}
        size="normal"
        onChangeHandler={(selectedLanguage) =>
          setUserData({ ...userData, language: selectedLanguage })
        }
      />

      {/* 성별 */}
      <S.Title>성별</S.Title>
      <S.InputContainer>
        <input
          type="radio"
          name="gender"
          value="MAN"
          checked={userData.gender === "MAN"}
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        />
        <label>남성</label>
        <input
          type="radio"
          name="gender"
          value="WOMAN"
          checked={userData.gender === "WOMAN"}
          onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
        />
        <label>여성</label>
      </S.InputContainer>

      <Button.Primary
        size="middle"
        onClick={onClickNextButtonHandler}
        bc={isFormValid ? "#FF6E46" : "#999"}
        disabled={!isFormValid} // 유효하지 않을 경우 버튼 비활성화
      >
        다음으로 넘어가기
      </Button.Primary>
    </S.Wrap>
  );
};

export default SlideTwo;
