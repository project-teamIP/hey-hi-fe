import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 전역 스타일링 초기화 진행 후 기본 셋팅
const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
