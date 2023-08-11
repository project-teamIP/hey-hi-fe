import React, { useState, useEffect } from "react";
import * as S from "./style";

const CallingPageMemo: React.FC = () => {
  const [memo, setMemo] = useState<string>("");

  useEffect(() => {
    const savedMemo = localStorage.getItem("memo");
    if (savedMemo) {
      setMemo(savedMemo);
    }
  }, []);

  const handleMemoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = event.target.value;
    setMemo(newMemo);
    localStorage.setItem("memo", newMemo);
  };

  // const saveMemoToServer = () => {
  //   fetch('YOUR_API_ENDPOINT', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ memo }), // Send the memo value in the request body
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       console.log('Memo saved to the server');
  //     } else {
  //       console.error('Failed to save memo');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error saving memo:', error);
  //   });
  // };

  return (
    <>
      <S.MemoStyle>
        <h3>메모장</h3>
        <S.MemoTextArea
          value={memo}
          onChange={handleMemoChange}
          placeholder="메모를 입력하세요..."
        />
      </S.MemoStyle>
    </>
  );
};

export default CallingPageMemo;
