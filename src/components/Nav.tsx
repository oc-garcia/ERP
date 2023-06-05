import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <h1>ERP</h1>
      </nav>
      <Link to="/catalogue">Catalogue</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/selling">Selling</Link>
    </header>
  );
}
