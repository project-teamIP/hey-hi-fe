import React, { useState } from "react";
import * as S from "./style";
import { useMutation } from "react-query";
import { changeProfileImg } from "../../../api/api";

interface ImageChangeModalProps {
  onClickToggleModalHandler: () => void;
  bc?: string;
  tc?: string;
}

const ImageChangeModal: React.FC<ImageChangeModalProps> = ({ onClickToggleModalHandler }) => {
  const [profileImg, setProfileImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [selectedDefaultImage, setSelectedDefaultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  // 프로필 이미지 뮤테이션
  const imgChangeMutation = useMutation(changeProfileImg, {
    onSuccess: () => {
      setIsLoading(false);
      alert("프로필 이미지가 변경되었습니다.");
      onClickToggleModalHandler();
    },
    onError: (error) => {
      alert("잠시 후 다시 시도해주세요😭");
      console.error("Image change error:", error);
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
  console.log("프로필 이미지 선택", imgPreview, profileImg);
  // 기본 이미지에서 선택
  const onSelectDefaultImageHandler = (imageName: string) => {
    setSelectedDefaultImage(imageName);
  };

  // 프로필 이미지 서버로 전송
  const onClickImageSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (profileImg) {
      setIsLoading(true);
      const formdataFile = new FormData();
      // formdataFile에 "image"라는 key로 profileImg를 추가
      formdataFile.append("image", profileImg);
      imgChangeMutation.mutate(formdataFile);
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
              src={require(`../../../assets/images/mypage/default-img1.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img2.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img3.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img4.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img5.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img6.png`)}
              alt="default-img1"
            />
            <img
              src={require(`../../../assets/images/mypage/default-img7.png`)}
              alt="default-img1"
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
