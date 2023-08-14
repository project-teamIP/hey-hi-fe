import { styled } from "styled-components";
import Button from "../button/Button";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  margin: 0 auto;
  padding: 0px 2px;
`;

// 상단 닉네임 / 이메일 / 관심사 컨테이너
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IdContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  margin-top: 28px;
  margin-bottom: 16px;
  font-size: 22px;
  font-weight: bold;
`;

export const Count = styled.div`
  margin-top: 28px;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  margin-top: 8px;
  color: #ff5049;
`;

// 회원가입 2단계 - 거주국가 / 언어 컨테이너
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    width: 24px;
    height: 24px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    margin-right: 46px;
  }
`;

// 회원가입 3단계 - 관심사 컨테이너
export const CategoriContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
  gap: 13px;
`;

export const Categori = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 144px;
  height: 102px;
  border: 1px solid #323232;
  border-radius: 15px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const Name = styled.div`
  margin-top: 5px;
`;

// Button ( 다음으로 넘어가기 )
export const NextButton = styled(Button.Primary)`
  margin-top: 40px;
`;
