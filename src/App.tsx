import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import DashBoard from "./pages/DashBoard";
import Matching from "./pages/Matching";
import Calling from "./pages/Calling";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";
import Header from "./components/common/header/Header";
import GlobalStyle from "./assets/styles/GlobalStyle";
import KakaoRedirect from "./pages/login/KakaoRedirect";
import GoogleRedirect from "./pages/login/GoogleRedirect";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/calling" element={<Calling />} />
          <Route path="/oauth/kakao" element={<KakaoRedirect />} />
          <Route path="/oauth/google" element={<GoogleRedirect />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
