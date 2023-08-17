import { createSlice } from "@reduxjs/toolkit";

function getCookie(cookieName: string) {
  let cookieValue = null;
  if (document.cookie) {
    const array = document.cookie.split(encodeURIComponent(cookieName) + "=");
    if (array.length >= 2) {
      const arraySub = array[1].split(";");
      cookieValue = decodeURIComponent(arraySub[0]);
    }
  }
  return cookieValue;
}

function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const accessToken = getCookie("access_token");
const refreshToken = getCookie("refresh_token");

const initialState = {
  isLoggedIn: !!accessToken,
};

const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      deleteCookie("access_token");
      deleteCookie("refresh_token");
    },
  },
});

export const { logIn, logOut } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
