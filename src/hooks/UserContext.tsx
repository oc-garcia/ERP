import { createContext, useState } from "react";
import { User, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase-config";

interface IUserContext {
  user: User | null;
  handleSignIn: () => void;
  handleLogOut: () => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  handleSignIn: () => {
    ("");
  },
  handleLogOut: () => {
    ("");
  },
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const data = response.user;
      setUser(data);
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
