import { createContext, useEffect, useState } from "react";
import { loginService } from "../services/loginService";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
