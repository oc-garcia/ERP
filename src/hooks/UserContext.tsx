import { createContext, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../services/firebase.js";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return <UserContext.Provider value={{ user, handleSignIn, handleLogOut }}>{children}</UserContext.Provider>;
};
