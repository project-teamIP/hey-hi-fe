import { styled } from "styled-components";

export const MyMemoBox = styled.div`
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

  img {
    border-radius: 50%;
    margin: 0 10px 0 30px;
  }
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
    width: 40%;
  }

  th:nth-child(2) {
    width: 60%;
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
    padding: 21px 78px;
  }

  td:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
