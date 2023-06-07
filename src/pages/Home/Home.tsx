import { Basket, Database, GoogleLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import { Link } from "react-router-dom";
import { HomeContainer } from "./style";

export default function Home() {
  const { user, handleSignIn } = useContext(UserContext);
  return (
    <HomeContainer>
      {user == null && (
        <>
          <h2>Login</h2>
          <button onClick={handleSignIn}>
            <GoogleLogo size={32} color="#0a1128" />
          </button>
        </>
      )}
      {user != null && (
        <>
          <div>
            {user.photoURL != undefined && <img src={user.photoURL} alt="User avatar" />}
            <h2>Welcome, {user.displayName}.</h2>
          </div>
          <div>
            <Link to="/catalogue">
              <Database size={48} color="#0a1128" />
              Catalogue
            </Link>
            <Link to="/sales">
              <Basket size={48} color="#0a1128" />
              Sales
            </Link>
          </div>
        </>
      )}
    </HomeContainer>
  );
}
