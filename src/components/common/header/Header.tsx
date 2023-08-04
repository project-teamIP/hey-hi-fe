import Button from "../button/Button";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderBox>
      <S.HeaderInner>
        <S.Nav>
          <h1>
            <S.StyledLink to="/">LOGO</S.StyledLink>
          </h1>
          <ul>
            <li>
              <S.StyledLink to="/dashboard">home</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/">FAQ</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/">뭐넣지</S.StyledLink>
            </li>
          </ul>
        </S.Nav>
        <S.StyledLink to="/login">
          <Button.Primary size="loginbtn" outlined>
            로그인 / 회원가입
          </Button.Primary>
        </S.StyledLink>
      </S.HeaderInner>
    </S.HeaderBox>
  );
};

export default Header;
