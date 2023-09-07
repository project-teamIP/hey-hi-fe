import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 전역 스타일링 초기화 진행 후 기본 셋팅
const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('../../../public/fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif !important;
    font-style: normal;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    background: #fafafa;
  }
`;

export default GlobalStyle;
