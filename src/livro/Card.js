import "./Card.css";

export function Card({ title, authors }) {
  return (
    <div className="card">
      <p>Title: {title}</p>
      <p>Authors: {Array.isArray(authors) ? authors.join(", ") : authors}</p>
      <button>Comentar</button>
    </div>
  );
}
