import { styled } from "styled-components";
import MainTop from "../components/main/mainTop/MainTop";
import MainKeyword from "../components/main/mainKeyword/MainKeyword";

const Main = () => {
  return (
    <Layout>
      <MainTop />
      <MainKeyword />
    </Layout>
  );
};

export default Main;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
