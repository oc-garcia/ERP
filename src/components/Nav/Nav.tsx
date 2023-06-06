import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import { SignOut } from "@phosphor-icons/react";

export default function Nav() {
  const { user, handleLogOut } = useContext(UserContext);
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <h1>ERP</h1>
        </Link>
        {user !== null && (
          <div>
            <Link to="/catalogue">Catalogue</Link>
            <Link to="/sales">Sales Tool</Link>
            <button onClick={handleLogOut}>
              <SignOut size={32} color="#fefcfb" />
            </button>
          </div>
        )}
      </nav>
    </HeaderContainer>
  );
}
