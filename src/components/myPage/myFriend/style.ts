import { styled } from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const MyFriendBox = styled.div`
  margin: 67px 0 0 79px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 51px;
  }
`;

export const Table = styled.table`
  width: 1083px;
  border-collapse: collapse;
  border-radius: 20px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #d2d2d2;
`;

export const ProfileImg = styled.img`
  height: 66px;
  width: 66px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const TableHead = styled.thead`
  height: 66px;
  width: 100%;
  border-bottom: 1px solid #d2d2d2;

  th {
    vertical-align: middle;
    font-size: 22px;
    font-weight: 600;
    text-align: start;
    padding: 22px 91px;
  }

  th:nth-child(1) {
    width: 60%;
  }

  th:nth-child(2) {
    width: 40%;
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #d2d2d2;

  td {
    height: 115px;
    vertical-align: middle;
    padding: 21px 0;
    font-size: 18px;
    font-weight: 600;
  }

  td:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    line-height: 50%;
    padding-left: 30px;
  }
`;

export const FuncBtn = styled.button`
  width: 52px;
  height: 52px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .smaller {
    background-color: ${colors.gray};
    border-radius: 50%;
    padding: 10px;
    object-fit: scale-down;
  }
`;
