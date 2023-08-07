import React from "react";
import * as S from "./style";

const MyMemo = () => {
  return (
    <S.MyMemoBox>
      <h1>나의 메모</h1>
      <S.Table>
        <S.TableHead>
          <tr>
            <th>제목</th>
            <th>통화 정보</th>
          </tr>
        </S.TableHead>
        <S.TableBody>
          <S.TableRow>
            <td>호주문화~!</td>
            <td>
              2023년 08월 08일 화요일 오후 6:20
              <img src="https://via.placeholder.com/60" alt="user_profile" />
              <span>호주사라</span>
            </td>
          </S.TableRow>
        </S.TableBody>
      </S.Table>
    </S.MyMemoBox>
  );
};

export default MyMemo;
