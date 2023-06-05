import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

export default function Nav() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <h1>ERP</h1>
        </Link>
        <div>
          <Link to="/inventory">Inventory</Link>
          <Link to="/selling">Sales Tool</Link>
        </div>
      </nav>
    </HeaderContainer>
  );
}
