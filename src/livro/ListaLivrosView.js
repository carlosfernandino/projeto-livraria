import { findAll } from "./LivrosApi";
import { Card } from "./Card";
import { useState } from "react";

import "./ListaLivrosView.css";

export function ListaLivrosView() {
  const [estouLendo, setEstouLendo] = useState([]);
  const [jaLi, setJaLi] = useState([]);
  const [queroLer, setQueroLer] = useState([]);
  const [livros, setLivros] = useState([]);

  const moverLivro = (livro, paraEstante) => {
    // Remove o livro de todas as estantes
    setEstouLendo((prev) => prev.filter((l) => l.id !== livro.id));
    setJaLi((prev) => prev.filter((l) => l.id !== livro.id));
    setQueroLer((prev) => prev.filter((l) => l.id !== livro.id));

    // Adiciona na estante escolhida
    if (paraEstante === "estouLendo") setEstouLendo((prev) => [...prev, livro]);
    if (paraEstante === "jaLi") setJaLi((prev) => [...prev, livro]);
    if (paraEstante === "queroLer") setQueroLer((prev) => [...prev, livro]);
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

      <section>
        <h2>Estou lendo</h2>
        <div className="cards">
          {estouLendo.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Já li</h2>
        <div className="cards">
          {jaLi.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Quero ler</h2>
        <div className="cards">
          {queroLer.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Livros disponíveis</h2>
        <div className="cards">
          {livros.map((l) => (
            <Card
              key={l.id}
              title={l.title}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
