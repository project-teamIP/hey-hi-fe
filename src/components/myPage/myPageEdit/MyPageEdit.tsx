import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import Select from "../../common/select/Select";
import * as S from "./style";
import countries from "../../../utils/countries.json";
import interests from "../../../utils/interests.json";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { changeProfileImg, getUserInfo } from "../../../api/api";
import pencilSvg from "../../../assets/images/pencil.svg";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";

const MyPageEdit = () => {
  //이미지
  const [profileImg, setProfileImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const mutation = useMutation(changeProfileImg, {
    onSuccess: () => {
      alert("프로필 이미지가 변경되었습니다.");
    },
    onError: (error) => {
      console.error("Image change error:", error);
    },
  });
  const tempfunc = () => {};

  const { data: user, isLoading } = useQuery("myInfo", getUserInfo);
  if (isLoading) {
    return (
      <p>
        <img src={rabbitSvg} alt="isLoading" />
        Loading...
      </p>
    );
  }

  // 프로필 이미지
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

  const onClickImageSubmitHandler = () => {
    if (profileImg) {
      const formdataFile = new FormData();
      formdataFile.append("file", profileImg);

      mutation.mutate(formdataFile);
    }
  };

  const onChangeInterestHandler = (selectedInterest: string) => {
    if (selectedInterests.includes(selectedInterest)) {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== selectedInterest));
    } else if (selectedInterests.length < 4) {
      setSelectedInterests([...selectedInterests, selectedInterest]);
    }
  };

  return (
    <div>
      {user && (
        <S.MyPageEditBox>
          <S.ProfileTop>
            <S.ImgForm>
              {imgPreview ? ( // Show preview image if available
                <img
                  src={imgPreview}
                  alt="profile_pic_preview"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              ) : (
                <img
                  src={user.image || rabbitSvg} // Show user.image if available, or fallback to rabbitSvg
                  alt={profileImg ? "profile_pic" : "temp_img"}
                />
              )}
              <S.ImgInput>
                <label htmlFor="profile-img">
                  <img src={pencilSvg} alt="img-edit-btn" />
                </label>
                <input type="file" id="profile-img" onChange={onChangeImageHandler} />
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
              <label htmlFor="nickname">닉네임</label>
              <S.Gap>
                <Input value="" placeholder={user.nickname} onChangeHandler={tempfunc} size="etc" />
                <Button.Primary size="the smallest" bc="#757575">
                  중복확인
                </Button.Primary>
              </S.Gap>
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="email">이메일</label>
              <Input value={user.userId} placeholder={user.loginId} size="large" />
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
                    className="radio-label"
                    key={interest}
                    isSelected={selectedInterests.includes(interest)}
                    onClick={() => onChangeInterestHandler(interest)}>
                    <input type="radio" checked={selectedInterests.includes(interest)} readOnly />
                    {interest}
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
