import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 전역 스타일링 초기화 진행 후 기본 셋팅
const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');
  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    &::-webkit-scrollbar {
      display: none; /* 크롬, 사파리, 오페라, 엣지 */
    }
  }
  body {
    background: #fafafa;
  }
`;

export default GlobalStyle;
