import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const API = process.env.REACT_APP_BASE_URL+"/api";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [user, setUser] = useState("");
  // const [services, setServices] = useState("");
  // const [isLoading, setIsLoading] = useState(true)

  const authorizationToken = `Bearer ${token}`;

  const storTokenInLocalStorage = (token) => {
    setToken(token);
    return localStorage.setItem("authToken", token);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN ", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("authToken");
  };

  // JWT authentication

  const userAuthentication = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        return;
      }
      const response = await fetch(API+"/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("user data ", data.msg);
        setUser(data.msg);
        // setIsLoading(false);
      } else {
        console.log("Error: ", response.statusText);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storTokenInLocalStorage,
        isLoggedIn,
        LogoutUser,
        user,
        API,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};

export default AuthContext;
