import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import Select from "../../common/select/Select";
import * as S from "./style";
import countries from "../../../utils/countries.json";
import interests from "../../../utils/interests.json";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUserInfo } from "../../../api/api";
import pencilSvg from "../../../assets/images/pencil.svg";

const MyPageEdit = () => {
  const tempfunc = () => {};

  const { data: user } = useQuery("myInfo", getUserInfo);
  // 프로필 이미지
  const [profileImg, setProfileImg] = useState(user.image);
  const isImage = profileImg !== null;

  //관심사
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

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
              {isImage ? (
                <img src={profileImg} alt="profile_pic" />
              ) : (
                <img src="https://via.placeholder.com/156" alt="profile_pic" />
              )}
              {/* <img src="https://via.placeholder.com/156" alt="profile_pic" /> */}
              <S.ImgInput>
                <label htmlFor="profile-img">
                  <img src={pencilSvg} alt="img-edit-btn" />
                </label>
                <input type="file" id="profile-img" />
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
