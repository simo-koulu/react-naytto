import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return tokenString === null ? "" : userToken;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("username");
    const userName = JSON.parse(userString);
    return userString === null ? "" : userName;
  };

  const [token, setToken] = useState(getToken());

  const [userName, setUserName] = useState(getUser());

  const saveUser = (userToken, userName) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    sessionStorage.setItem("username", JSON.stringify(userName));
    setToken(userToken);
    setUserName(userName);
  };

  const removeUser = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    setToken("");
    setUserName("");
  };

  return {
    saveUser,
    removeUser,
    token,
    userName,
  };
}
