import React from "react";
import * as S from "./style";
import Button from "../button/Button";
import Input from "../input/Input";
import Select from "../select/Select";
import countries from "../../../utils/countries.json";
import { SlideProps } from "../../../types/types";
import { useMutation } from "react-query";
import { userNickNameCheck } from "../../../api/api";

const SlideTwo = ({ userData, setUserData, onClickNextButtonHandler }: SlideProps) => {
  // 닉네임 중복 체크
  const nickName = userData.nickname;

  // useMutation
  const userNickNameCheckMutation = useMutation(userNickNameCheck);

  // handler
  const onClickuserNickNameCheckHanlder = () => {
    userNickNameCheckMutation.mutate(nickName);
  };

  console.log(nickName);
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
        <Button.Primary size="the smallest" onClick={onClickuserNickNameCheckHanlder}>
          중복확인
        </Button.Primary>
      </S.NameContainer>
      {userNickNameCheckMutation.isSuccess && (
        <S.ErrorTyping>사용 가능한 닉네임입니다.</S.ErrorTyping>
      )}

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
        options={["한국어", "영어"]}
        size="normal"
        onChangeHandler={(selectedLanguage) =>
          setUserData({ ...userData, language: selectedLanguage })
        }
      />

      {/* 성별 */}
      <S.Title>성별</S.Title>
      <S.InputContainer>
        <input type="radio" name="gender" value={userData.gender} />
        <label>남성</label>
        <input type="radio" name="gender" value={userData.gender} />
        <label>여성</label>
      </S.InputContainer>

      <Button.Primary size="middle" onClick={onClickNextButtonHandler} bc="#FF6E46">
        다음으로 넘어가기
      </Button.Primary>
    </S.Wrap>
  );
};

export default SlideTwo;
