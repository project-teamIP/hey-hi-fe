import React, { useState, useEffect, useCallback } from "react";
import * as S from "./style";
import instance from "../../../api/api";

interface MemoProps {
  // onSubmit: () => void;
  shouldSubmit: boolean;
  nickname: string;
}

const CallingPageMemo: React.FC<MemoProps> = ({ nickname, shouldSubmit }) => {
  const defaultTitle = `${nickname}과의 통화메모`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null); // 에러 메시지 상태
  const [contentError, setContentError] = useState<string | null>(null); // 에러 메시지 상태
  const [titleLength, setTitleLength] = useState(0);
  const [contentLength, setContentLength] = useState(0); // 글자 수 상태

  const memoTitleChangeHandler = useCallback((e: any) => {
    setTitle(e.target.value);
    if (e.target.value.length > 20) {
      setTitleError("제목은 20자 이내로 입력 가능합니다.");
      setTitle(e.target.value.substring(0, 20)); // 글자 수 제한
      setTitleLength(20); // 글자 수 업데이트
    } else {
      setTitle(e.target.value);
      setTitleError(""); // 에러 제거
      setTitleLength(e.target.value.length); // 글자 수 업데이트
    }
  }, []);

  const memoContentChangeHandler = useCallback((e: any) => {
    setContent(e.target.value);
    if (e.target.value.length > 1500) {
      setContentError("내용은 1500자 이내로 입력 가능합니다.");
      setContent(e.target.value.substring(0, 1500));
    } else {
      setContent(e.target.value);
      setContentError("");
      setContentLength(e.target.value.length);
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      // e.preventDefault();

      if (!title && !content) {
        alert("메모가 없습니다. 저장 없이 대시보드로 이동합니다.");
        return;
      }
      if (isSubmitting) {
        return; // 이미 전송 중인 경우 중복 실행 방지
      }
      try {
        setIsSubmitting(true); // 전송 시작
        const requestData = !title
          ? {
              title: defaultTitle,
              content: content,
              partnerNickname: nickname,
            }
          : {
              title: title,
              content: content,
              partnerNickname: nickname,
            };
        const response = await instance.post("/api/memo", requestData);
        setTitleError(null);
      } catch (error) {
        console.error("Error while creating memo:", error);
      } finally {
        setIsSubmitting(false); // 전송 완료
      }
    },
    [title, content, nickname, isSubmitting]
  );

  useEffect(() => {
    if (shouldSubmit) {
      // @ts-ignore
      handleSubmit();
    }
  }, [shouldSubmit]);
  return (
    <S.MemoContainer>
      <h2>메모장</h2>
      <S.MemoStyle>
        <form onSubmit={handleSubmit}>
          <div>
            <S.MemoTitle
              type="text"
              value={title}
              placeholder="제목을 입력해주세요."
              maxLength={21}
              onChange={memoTitleChangeHandler}
            />
            <hr />
            {titleError && (
              <S.ErrorMessage>
                <p>{titleError}</p>
              </S.ErrorMessage>
            )}
            <S.MemoTextArea
              value={content}
              placeholder="메모를 입력하세요"
              maxLength={1501}
              onChange={memoContentChangeHandler}
            />
            <S.TextGroupBox>
              {contentError && (
                <S.ErrorContentMessage>
                  <p>{contentError}</p>
                </S.ErrorContentMessage>
              )}
              <S.CounterBox>
                <p>{contentLength}자</p>
                <h5>/ 1500자</h5>
              </S.CounterBox>
            </S.TextGroupBox>
          </div>
        </form>
      </S.MemoStyle>
    </S.MemoContainer>
  );
};

export default CallingPageMemo;
