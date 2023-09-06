import React, { useState } from "react";
import * as S from "./style";
import { useMutation } from "react-query";
import { changeProfileImgFormData } from "../../../api/api";

interface ImageChangeModalProps {
  onClickToggleModalHandler: () => void;
  bc?: string;
  tc?: string;
}

const ImageChangeModal: React.FC<ImageChangeModalProps> = ({ onClickToggleModalHandler }) => {
  const [profileImg, setProfileImg] = useState<File | string | null>(null);
  const [imgPreview, setImgPreview] = useState(null);

  // 프로필 이미지 뮤테이션
  const imgChangeMutation = useMutation(changeProfileImgFormData, {
    onSuccess: () => {
      alert("프로필 이미지가 변경되었습니다.");
      onClickToggleModalHandler();
    },
    onError: (error) => {
      alert("잠시 후 다시 시도해주세요😭");
      console.error("ImgFormData 오류:", error);
    },
  });

  // 프로필 이미지 pc에서 선택
  const onChangeImageHandler = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImg(file);
      // FileReader 객체를 생성
      const reader = new FileReader();
      // 아랫줄 작업이 완료되면 그 결과를 미리보기로 설정
      reader.onload = (e: any) => {
        setImgPreview(e.target.result);
      };
      // 백그라운드에서 파일을 읽고 데이터 url로 변환. 다 실행되면 onload 이벤트 핸들러 실행됨
      reader.readAsDataURL(file);
    }
  };

  // 기본 이미지에서 선택
  const onClickDefaultImageHandler = (imageName: string) => {
    setImgPreview(null);
    setProfileImg(imageName);
  };

  // 프로필 이미지 서버로 전송
  const onClickImageSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (profileImg) {
      const imgFormData = new FormData();
      // profileImg가 문자열인 경우 (기본 이미지 선택)
      if (typeof profileImg === "string") {
        imgFormData.append("profile", profileImg);
        imgChangeMutation.mutate(imgFormData);
      } else {
        // profileImg가 File 객체인 경우 (파일 업로드)
        // imgFormData에 "image"라는 key로 profileImg를 추가
        imgFormData.append("image", profileImg);
        imgChangeMutation.mutate(imgFormData);
      }
    } else {
      alert("변경할 이미지를 선택해주세요😉");
    }
  };

  return (
    <S.ImgChangeModalOverlay>
      <S.ImgChangeModalBox>
        <h3>프로필 사진 설정</h3>
        <form>
          <S.ImgArray>
            <label htmlFor="imageInput">
              {imgPreview ? (
                <img src={imgPreview} alt="profile_img_preview" />
              ) : (
                <img
                  src={require(`../../../assets/images/mypage/img-select-btn.png`)}
                  alt="img-select-btn"
                />
              )}
              <input
                name="file"
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={onChangeImageHandler}
              />
            </label>
            <img
              src={require(`../../../assets/images/mypage/profile1.png`)}
              alt="profile1"
              onClick={() => onClickDefaultImageHandler("profile1")}
              className={profileImg === "profile1" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile2.png`)}
              alt="profile2"
              onClick={() => onClickDefaultImageHandler("profile2")}
              className={profileImg === "profile2" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile3.png`)}
              alt="profile3"
              onClick={() => onClickDefaultImageHandler("profile3")}
              className={profileImg === "profile3" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile4.png`)}
              alt="profile4"
              onClick={() => onClickDefaultImageHandler("profile4")}
              className={profileImg === "profile4" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile5.png`)}
              alt="profile5"
              onClick={() => onClickDefaultImageHandler("profile5")}
              className={profileImg === "profile5" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile6.png`)}
              alt="profile6"
              onClick={() => onClickDefaultImageHandler("profile6")}
              className={profileImg === "profile6" ? "selected" : ""}
            />
            <img
              src={require(`../../../assets/images/mypage/profile7.png`)}
              alt="profile7"
              onClick={() => onClickDefaultImageHandler("profile7")}
              className={profileImg === "profile7" ? "selected" : ""}
            />
          </S.ImgArray>
          <S.BtnBox>
            <S.ModalBtn bc="#EFF0F1" tc="#000" onClick={onClickToggleModalHandler}>
              취소
            </S.ModalBtn>
            <S.ModalBtn onClick={onClickImageSubmitHandler}>확인</S.ModalBtn>
          </S.BtnBox>
        </form>
      </S.ImgChangeModalBox>
    </S.ImgChangeModalOverlay>
  );
};

export default ImageChangeModal;
