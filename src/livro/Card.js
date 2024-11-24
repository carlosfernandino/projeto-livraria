import { Link } from "react-router-dom";
import "./Card.css";

export function Card({ id, title, author, image, onMove }) {
  return (
    <div className="card">
      <Link to={`/livro/${id}`}>
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={`Capa do livro ${title}`}
          className="card-image"
        />
        <div className="card-content">
          <h3>{title}</h3>
          {author && <p className="card-author">por {author}</p>}
        </div>
      </Link>
      <select onChange={(e) => onMove(e.target.value)} defaultValue="">
        <option value="" disabled>
          Mover para...
        </option>
        <option value="estouLendo">Estou lendo</option>
        <option value="jaLi">Já li</option>
        <option value="queroLer">Quero ler</option>
      </select>
    </div>
  );
}
