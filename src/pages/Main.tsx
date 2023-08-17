import { styled } from "styled-components";
import MainTop from "../components/main/mainTop/MainTop";
import MainKeyword from "../components/main/mainKeyword/MainKeyword";
import MainSlide from "../components/main/mainSlide/MainSlide";
import MainReview from "../components/main/mainReview/MainReview";

const Main = () => {
  return (
    <Layout>
      <MainTop />
      <MainKeyword />
      <MainSlide />
      <MainReview />
      <footer />
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

  footer {
    width: 100%;
    height: 328px;
    background-color: #545454;
  }
`;
