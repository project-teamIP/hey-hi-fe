import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import Select from "../../common/select/Select";
import * as S from "./style";
import countries from "../../../utils/countries.json";
import interests from "../../../utils/interests.json";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { changeProfileImg, getUserInfo, userNickNameCheck } from "../../../api/api";
import pencilSvg from "../../../assets/images/pencil.svg";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";

const MyPageEdit = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    country: "",
    language: "",
    interests: "",
  });
  console.log(userInfo.nickname);
  const tempfunc = () => {};

  //0. 로그인된 사용자 정보 조회
  const { data: user, isLoading } = useQuery("myInfo", getUserInfo);
  console.log("유저정보", user);

  //1. 프로필 이미지 뮤테이션
  const imgChangeMutation = useMutation(changeProfileImg, {
    onSuccess: (data) => {
      alert("프로필 이미지가 변경되었습니다.");
      console.log("이미지 변경 성공:", data);
    },
    onError: (error) => {
      alert("잠시 후 다시 시도해주세요😭");
      console.error("Image change error:", error);
    },
  });

  //2. 닉네임 중복 뮤테이션
  const nickNameCheckMutation = useMutation(userNickNameCheck);

  // 1-1. 프로필 이미지 pc에서 선택
  const onChangeImageHandler = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImg(file);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImgPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // 1-2 프로필 이미지 서버로 전송
  const onClickImageSubmitHandler = () => {
    if (profileImg) {
      const formdataFile = new FormData();
      formdataFile.append("image", profileImg);
      console.log(profileImg, formdataFile.keys);
      imgChangeMutation.mutate(formdataFile);
    } else {
      alert("변경할 이미지를 선택해주세요😉");
    }
  };

  // 2-1. 닉네임 중복 확인

  const onClickNickNameCheckHandler = () => {
    const nickName = userInfo.nickname;
    if (nickName) {
      nickNameCheckMutation.mutate(nickName);
    }
  };

  // 관심사
  const onChangeInterestHandler = (interest: string) => {
    setSelectedInterest(interest);
  };

  // 수정
  const onSubmitUserInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const updatedUserInfo = {
      ...userInfo,
      interest: selectedInterest,
    };
    setUserInfo(updatedUserInfo);
  };

  // 로딩중 스피너 설정
  if (isLoading) {
    return (
      <S.MyPageEditBox>
        <S.LoadingSpinner>
          <img src={rabbitSvg} alt="isLoading" />
        </S.LoadingSpinner>
      </S.MyPageEditBox>
    );
  }

  return (
    <div>
      {user && (
        <S.MyPageEditBox>
          <S.ProfileTop>
            <S.ImgForm>
              {imgPreview ? (
                <img
                  src={imgPreview}
                  alt="profile_pic_preview"
                  style={{ maxWidth: "100%", maxHeight: "18.75rem" }}
                />
              ) : (
                <img src={user.image || rabbitSvg} alt={profileImg ? "profile_pic" : "temp_img"} />
              )}
              <S.ImgInput>
                <label htmlFor="profile-img">
                  <img src={pencilSvg} alt="img-edit-btn" />
                </label>
                <input name="file" type="file" id="profile-img" onChange={onChangeImageHandler} />
                <button type="button" onClick={onClickImageSubmitHandler}>
                  <img src={require(`../../../assets/images/check.png`)} alt="submit-btn" />
                </button>
              </S.ImgInput>
            </S.ImgForm>
            <h1>
              만나서 반가워요!
              <br />
              {user.nickname}님
            </h1>
          </S.ProfileTop>
          <form>
            <S.FormGroup>
              <label htmlFor="nickname">
                닉네임 {nickNameCheckMutation.isSuccess && <span>사용 가능한 닉네임입니다.</span>}
              </label>
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
              <label htmlFor="email">이메일</label>
              <S.EmailReadOnly>{user.loginId}</S.EmailReadOnly>
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="country">거주국가</label>
              <Select label={user.country} options={countries} />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="country">사용언어</label>
              <Select label={user.language} options={["한국어", "English"]} />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="interests">관심사</label>
              <S.RadioGroup>
                {interests.map((interest) => (
                  <S.RadioButton
                    key={interest.name}
                    isselected={selectedInterest === interest.name}>
                    <input
                      type="radio"
                      name="interest"
                      value={interest.name}
                      checked={selectedInterest === interest.name}
                      onChange={() => onChangeInterestHandler(interest.name)}
                    />
                    {interest.name}
                  </S.RadioButton>
                ))}
              </S.RadioGroup>
            </S.FormGroup>
            <S.BtnPosition>
              <Button.Primary size="the smallest" bc="#FF6E46">
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
