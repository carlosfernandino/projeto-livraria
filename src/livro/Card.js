import "./Card.css";

export function Card({ title, onDelete }) {
  return (
    <div className="card">
      <p>Title: {title}</p>
      <button onClick={onDelete}>Excluir</button>
      <button>Editar</button>
    </div>
  );
}
