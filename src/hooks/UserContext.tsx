import { createContext, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";

export const UserContext = createContext({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({});
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
      setUser({});
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return <UserContext.Provider value={{ user, handleSignIn, handleLogOut }}>{children}</UserContext.Provider>;
};
