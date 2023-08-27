import * as S from "./style";
import * as C from "../../../assets/styles/commonStyle";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import Select from "../../common/select/Select";
import countries from "../../../utils/countries.json";
import interests from "../../../utils/interests.json";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { changeUserInfo, getUserInfo, userNickNameCheck } from "../../../api/api";
import pencilSvg from "../../../assets/images/pencil.svg";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";
import { UserInfoType } from "../../../types/user";
import ImageChangeModal from "./ImageChangeModal";

const MyPageEdit = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    nickname: "",
    country: "",
    language: "",
    interests: [] as string[],
  });
  // 프로필 이미지 변경 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickToggleModalHandler = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  // 관심사 다중 선택
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // 로그인된 사용자 정보 조회
  const { data: user, isLoading } = useQuery("myInfo", getUserInfo);

  useEffect(() => {
    if (user) {
      setUserInfo({
        nickname: user.nickname,
        country: user.country,
        language: user.language,
        interests: user.interests,
      });
      setSelectedInterests(user.interests);
    }
  }, [user]);

  // 관심사 핸들러
  const onChangeInterestsHandler = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      // 이미 선택된 경우 -> 선택 해제
      setSelectedInterests((prevInterests) => prevInterests.filter((item) => item !== interest));
    } else {
      // 선택되지 않은 경우 -> 선택 (최대 4개까지)
      if (selectedInterests.length < 4) {
        setSelectedInterests((prevInterests) => [...prevInterests, interest]);
      } else {
        // 이미 4개를 선택한 경우
        alert("관심사는 최대 4개까지 선택할 수 있습니다.");
      }
    }
  };

  // 닉네임 중복 뮤테이션
  const nickNameCheckMutation = useMutation(userNickNameCheck);

  // 업데이트 뮤테이션
  const userInfoChangeMutation = useMutation(changeUserInfo, {
    onSuccess: (data) => {
      alert("정보가 변경되었습니다.");
    },
    onError: (error) => {
      alert("잠시 후 다시 시도해주세요😭");
      console.error("Image change error:", error);
    },
  });

  // 닉네임 중복 확인
  const onClickNickNameCheckHandler = () => {
    const nickName = userInfo.nickname;
    if (nickName) {
      nickNameCheckMutation.mutate(nickName, {
        onSuccess: (data) => {
          console.log("닉넴 중복 확인 결과", data);
        },
        onError: (error) => {
          console.error("닉넴 중복 확인 오류", error);
        },
      });
    }
  };

  // 계정 정보 수정 submit
  const onSubmitUserInfo = () => {
    if (selectedInterests.length === 0) {
      alert("1개 이상의 관심사를 선택해주세요.");
      return;
    }

    const updatedUserInfo = {
      ...userInfo,
      interests: selectedInterests,
    };
    console.log("관심사", userInfo, selectedInterests, updatedUserInfo);
    userInfoChangeMutation.mutate(updatedUserInfo);
  };

  // 로딩중 스피너 설정
  if (isLoading) {
    return (
      <C.SpinnerBox>
        <C.LoadingSpinner>
          <img src={rabbitSvg} alt="isLoading" />
        </C.LoadingSpinner>
      </C.SpinnerBox>
    );
  }

  return (
    <div>
      {user && (
        <S.MyPageEditBox>
          <S.ProfileTop>
            <S.ProfileTopLeft>
              <S.ProfileImageBox>
                <img src={user.image} alt="profile_pic" />
                <S.ModalToggleBtn type="button" onClick={onClickToggleModalHandler}>
                  <img src={pencilSvg} alt="submit-btn" />
                </S.ModalToggleBtn>
                {/* 모달 */}
                {isModalOpen && (
                  <ImageChangeModal onClickToggleModalHandler={onClickToggleModalHandler} />
                )}
              </S.ProfileImageBox>
              <S.MannerPoint>매너점수 : {user.cleanPoint}</S.MannerPoint>
            </S.ProfileTopLeft>
            <h1>
              만나서 반가워요!
              <br />
              {user.nickname}님
            </h1>
          </S.ProfileTop>
          <form>
            <S.FormGroup>
              <S.FormLabel htmlFor="nickname">
                닉네임 {nickNameCheckMutation.isSuccess && <span>사용 가능한 닉네임입니다.</span>}
              </S.FormLabel>
              <S.Gap>
                <Input
                  value={userInfo.nickname}
                  placeholder={user.nickname}
                  onChangeHandler={(e) => setUserInfo({ ...userInfo, nickname: e.target.value })}
                  size="etc"
                />
                <Button.Primary
                  size="the smallest"
                  bc="#757575"
                  onClick={onClickNickNameCheckHandler}>
                  중복확인
                </Button.Primary>
              </S.Gap>
            </S.FormGroup>
            <S.FormGroup>
              <S.FormLabel htmlFor="email">이메일</S.FormLabel>
              <S.EmailReadOnly>{user.loginId}</S.EmailReadOnly>
            </S.FormGroup>
            <S.FormGroup>
              <S.FormLabel htmlFor="country">거주국가</S.FormLabel>
              <Select
                label={user.country}
                options={countries}
                onChangeHandler={(selectedCountry) =>
                  setUserInfo({ ...userInfo, country: selectedCountry })
                }
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.FormLabel htmlFor="country">사용언어</S.FormLabel>
              <Select
                label={user.language}
                options={["한국어", "English"]}
                onChangeHandler={(selectedLanguage) =>
                  setUserInfo({ ...userInfo, language: selectedLanguage })
                }
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.FormLabel htmlFor="interests">관심사</S.FormLabel>
              <S.CheckBoxGroup>
                {interests.map((interest) => (
                  <S.SingleCheckbox key={interest.name}>
                    <input
                      type="checkbox"
                      id={interest.name}
                      checked={selectedInterests.includes(interest.name)}
                      onChange={() => onChangeInterestsHandler(interest.name)}
                    />
                    <label
                      className={selectedInterests.includes(interest.name) ? "selected" : ""}
                      htmlFor={interest.name}>
                      {interest.name}
                    </label>
                  </S.SingleCheckbox>
                ))}
              </S.CheckBoxGroup>
            </S.FormGroup>
            <S.BtnPosition>
              <Button.Primary size="the smallest" bc="#FF6E46" onClick={onSubmitUserInfo}>
                정보 수정
              </Button.Primary>
            </S.BtnPosition>
          </form>
        </S.MyPageEditBox>
      )}
    </div>
  );
};

export default MyPageEdit;
