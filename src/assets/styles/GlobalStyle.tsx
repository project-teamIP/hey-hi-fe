import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 전역 스타일링 초기화 진행 후 기본 셋팅
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyle;
