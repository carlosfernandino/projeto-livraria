import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Biblioteca Virtual</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/busca">
          <button>Buscar</button>
        </Link>
      </nav>
    </header>
  );
}
