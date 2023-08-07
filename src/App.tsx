import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import DashBoard from "./pages/DashBoard";
import Matching from "./pages/Matching";
import Calling from "./pages/Calling";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";
import Header from "./components/common/header/Header";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
