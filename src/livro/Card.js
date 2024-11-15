import "./Card.css";

export function Card({ title }) {
  return (
    <div className="card">
      <p>Title: {title}</p>
      <button>Comentar</button>
    </div>
  );
}
