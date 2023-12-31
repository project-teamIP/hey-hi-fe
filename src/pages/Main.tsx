import { styled } from "styled-components";
import MainTop from "../components/main/mainTop/MainTop";
import MainKeyword from "../components/main/mainKeyword/MainKeyword";
import MainSlide from "../components/main/mainSlide/MainSlide";
import MainReview from "../components/main/mainReview/MainReview";
import Footer from "../components/common/footer/Footer";
import Guide from "./Guide";
import useWindowSize from "../hooks/UseWindowSize";

const Main = () => {
  const { isSmallScreen } = useWindowSize();

  return (
    <>
      {isSmallScreen ? (
        <Guide />
      ) : (
        <Layout>
          <MainTop />
          <MainKeyword />
          <MainSlide />
          <MainReview />
          <Footer />
        </Layout>
      )}
    </>
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
