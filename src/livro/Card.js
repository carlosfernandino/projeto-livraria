import "./Card.css";

export function Card({ title, author, image, onMove }) {
  return (
    <div className="card">
      <img
        src={
          image || "https://via.placeholder.com/150"
        } /* Placeholder se não houver imagem */
        alt={`Capa do livro ${title}`}
        className="card-image"
      />
      <div className="card-content">
        <h3>{title}</h3>
        {author && <p className="card-author">por {author}</p>}
        <select onChange={(e) => onMove(e.target.value)} defaultValue="">
          <option value="" disabled>
            Mover para...
          </option>
          <option value="estouLendo">Estou lendo</option>
          <option value="jaLi">Já li</option>
          <option value="queroLer">Quero ler</option>
        </select>
      </div>
    </div>
  );
}
