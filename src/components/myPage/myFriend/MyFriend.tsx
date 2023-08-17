import * as S from "./style";
import * as C from "../../../assets/styles/commonStyle";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteBuddy, getBuddies } from "../../../api/api";
import { BuddiesType } from "../../../types/user";
import Pagination from "../../common/pagination/Pagination";
import { useState } from "react";

const MyFriend = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  //친구 목록 조회
  const { data, isLoading } = useQuery(["myBuddies", currentPage], () => getBuddies(currentPage));

  //친구 목록
  const buddiesList = data?.content || [];

  //친구 삭제
  const deleteBuddyMutation = useMutation((nickname: string) => deleteBuddy(nickname), {
    onSuccess: () => {
      // 친구 삭제 성공하면 해당 친구 캐시 업뎃
      queryClient.invalidateQueries("myBuddies");
    },
  });

  // 친구 삭제 버튼
  const onClickDeleteBuddy = (nickname: string) => {
    if (window.confirm("정말로 친구를 삭제하시겠습니까?")) {
      deleteBuddyMutation.mutate(nickname);
    }
  };

  //페이지네이션 전체 페이지
  const totalPages: number = data?.totalPages || 1;
  console.log("buddy", data, "current page: ", currentPage);

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
    <S.MyFriendBox>
      <h1>친구관리</h1>
      <S.Table>
        <S.TableHead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th> </th>
            <th> </th>
          </tr>
        </S.TableHead>
        <S.TableBody>
          {buddiesList.length === 0 ? (
            <S.TableRow>
              <td></td>
              <td>등록된 친구가 없습니다. </td>
            </S.TableRow>
          ) : (
            buddiesList.map((buddy: BuddiesType) => (
              <S.TableRow key={buddy.loginId}>
                <td>
                  <S.ProfileImg src={buddy.profileImage} alt="user_profile" />
                  <span>{buddy.nickname}</span>
                </td>
                <td>{buddy.loginId}</td>
                <td>
                  <S.FuncBtn>
                    <img src={require(`../../../assets/images/call.png`)} alt="call" />
                  </S.FuncBtn>
                </td>
                <td>
                  <S.FuncBtn onClick={() => onClickDeleteBuddy(buddy.nickname)}>
                    <img
                      src={require(`../../../assets/images/trash-can.png`)}
                      className="smaller"
                      alt="more"
                    />
                  </S.FuncBtn>
                </td>
              </S.TableRow>
            ))
          )}
        </S.TableBody>
      </S.Table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChangePageHandler={setCurrentPage}
      />
    </S.MyFriendBox>
  );
};

export default MyFriend;
