import React, { useState } from "react";
import * as S from "./style";
import Button from "../../button/Button";
import * as M from "../notice/style";
import instance from "../../../../api/api";
import pointPath from "../../../../assets/images/pointBox.svg";
import { useNavigate } from "react-router";

interface CleanPointModalProps {
  isPointModalOpen: boolean;
  onClickCancelPoint: () => void;
  onClickConfirmPoint: () => void;
  nickname: string;
}

const CleanPointModal: React.FC<CleanPointModalProps> = (props) => {
  const navigate = useNavigate();
  const { isPointModalOpen, onClickCancelPoint, onClickConfirmPoint, nickname } = props;
  const [score, setScore] = useState(0); // 초기 점수 값
  //UseState;
  const [selectedBlockRadio, setSelectedBlockRadio] = useState(false);
  // Handler
  const handleBlockRadioClick = () => {
    setSelectedBlockRadio((prevSelected) => !prevSelected); // 이전 상태 값을 기반으로 업데이트
  };
  //UseState;
  const [selectedRadio, setSelectedRadio] = useState(false);
  // Handler
  const handleRadioClick = () => {
    setSelectedRadio((prevSelected) => !prevSelected); // 이전 상태 값을 기반으로 업데이트
  };
  //클린포인트 점수
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScore = parseInt(event.target.value);
    setScore(newScore);
  };

  const PostCleanPoint = async () => {
    const requestData = {
      partnerNickname: nickname,
      point: score,
    };
    try {
      const response = await instance.put("/api/users/point", requestData);
      return response;
    } catch (error) {
      console.error("클린포인트 Error:", error);
    }
  };
  //차단
  const BlockMatchingUser = async () => {
    const requestData = {
      nicknamepartnerNickname: nickname,
    };
    try {
      const response = await instance.post(`/api/users/block/${nickname}`, requestData);
      return response;
    } catch (error) {
      console.error("차단 Error:", error);
    }
  };

  const PlusFriend = async () => {
    try {
      const response = await instance.post(`/api/users/buddy/${nickname}`);
      return response;
    } catch (error) {
      console.error("친구 추가 Error:", error);
    }
  };

  const onClickConfirmCleanPoint = () => {
    // console.log("매너점수:", score);
    PostCleanPoint();
    onClickConfirmPoint();
    if (selectedRadio) {
      PlusFriend();
    }
    if (selectedBlockRadio) {
      BlockMatchingUser();
    }
    navigate("/dashboard");
  };

  return (
    <>
      {isPointModalOpen && (
        <M.Wrap>
          <S.Container>
            <S.Title>매너점수를 매겨주세요</S.Title>
            <S.Content>상대방과의 통화가 어땠는지 매너점수를 매겨주세요!</S.Content>
            <S.SliderContainer>
              <S.SliderBox>
                <S.SliderTrack value={score}>
                  <S.SliderImageContainer>
                    <S.SliderImage src={pointPath} alt="pointbox" />
                    <S.ScoreText>{score}점</S.ScoreText>
                  </S.SliderImageContainer>
                </S.SliderTrack>
                <S.SliderBackground />
                <S.SliderInput
                  type="range"
                  min="-10"
                  max="10"
                  value={score}
                  onChange={handleSliderChange}
                />
                <S.ScoreTagBox>
                  <p>-10점</p>
                  <p>10점</p>
                </S.ScoreTagBox>
                <S.RadioButtonGroup>
                  <S.AddFriend>
                    <input
                      type="radio"
                      name="addFriend"
                      value={"nickname"}
                      checked={selectedRadio}
                      onClick={handleRadioClick}
                    />
                    <label>방금 통화한 {nickname}님과 친구하기</label>
                  </S.AddFriend>
                  <S.AddFriend>
                    <input
                      type="radio"
                      name="addFriend"
                      value={"nickname"}
                      checked={selectedBlockRadio}
                      onClick={handleBlockRadioClick}
                    />
                    <label>방금 통화한 {nickname}님과 다시 만나지 않기</label>
                  </S.AddFriend>
                </S.RadioButtonGroup>
              </S.SliderBox>
            </S.SliderContainer>
            <S.ButtonContainer>
              <Button.Primary size="small" activebc="#FF6E46" onClick={onClickCancelPoint}>
                취소
              </Button.Primary>
              <Button.Primary size="small" activebc="#FF6E46" onClick={onClickConfirmCleanPoint}>
                확인
              </Button.Primary>
            </S.ButtonContainer>
          </S.Container>
        </M.Wrap>
      )}
    </>
  );
};

export default CleanPointModal;
