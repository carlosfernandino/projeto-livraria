import { findAll } from "./LivrosApi";
import { Card } from "./Card";
import { useState } from "react";
import "./ListaLivrosView.css";

export function ListaLivrosView() {
  const [estouLendo, setEstouLendo] = useState([]);
  const [jaLi, setJaLi] = useState([]);
  const [queroLer, setQueroLer] = useState([]);
  const [livros, setLivros] = useState([]);
  const [expanded, setExpanded] = useState({
    estouLendo: false,
    jaLi: false,
    queroLer: false,
  });

  const moverLivro = (livro, paraEstante) => {
    setEstouLendo((prev) => prev.filter((l) => l.id !== livro.id));
    setJaLi((prev) => prev.filter((l) => l.id !== livro.id));
    setQueroLer((prev) => prev.filter((l) => l.id !== livro.id));

    if (paraEstante === "estouLendo") setEstouLendo((prev) => [...prev, livro]);
    if (paraEstante === "jaLi") setJaLi((prev) => [...prev, livro]);
    if (paraEstante === "queroLer") setQueroLer((prev) => [...prev, livro]);
  };

  const toggleEstante = (estante) => {
    setExpanded((prev) => ({
      ...prev,
      [estante]: !prev[estante],
    }));
  };

  return (
    <main>
      <h1>Minha Biblioteca</h1>
      <button
        onClick={async () => {
          const livros = await findAll();
          setLivros(livros);
        }}
      >
        LISTAR
      </button>

      {/* Estante: Estou lendo */}
      <section>
        <h2 onClick={() => toggleEstante("estouLendo")}>
          <i
            className={`fas ${
              expanded.estouLendo ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
          Estou lendo
        </h2>
        <div
          className={`cards ${expanded.estouLendo ? "expanded" : "collapsed"}`}
        >
          {estouLendo.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      {/* Estante: Já li */}
      <section>
        <h2 onClick={() => toggleEstante("jaLi")}>
          <i
            className={`fas ${
              expanded.jaLi ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
          Já li
        </h2>
        <div className={`cards ${expanded.jaLi ? "expanded" : "collapsed"}`}>
          {jaLi.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      {/* Estante: Quero ler */}
      <section>
        <h2 onClick={() => toggleEstante("queroLer")}>
          <i
            className={`fas ${
              expanded.queroLer ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
          Quero ler
        </h2>
        <div
          className={`cards ${expanded.queroLer ? "expanded" : "collapsed"}`}
        >
          {queroLer.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      {/* Livros disponíveis */}
      <section>
        <h2>Livros disponíveis</h2>
        <div className="cards">
          {livros.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
