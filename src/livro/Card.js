import "./Card.css";

export function Card({ title, onMove }) {
  return (
    <div className="card">
      <p>{title}</p>
      <select
        onChange={(e) => onMove(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Mover para...</option>
        <option value="estouLendo">Estou lendo</option>
        <option value="jaLi">Já li</option>
        <option value="queroLer">Quero ler</option>
      </select>
    </div>
  );
}
