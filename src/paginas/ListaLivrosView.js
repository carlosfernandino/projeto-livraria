import { useState } from "react";
import { Card } from "../livro/Card";
import { findAll } from "../livro/LivrosApi";
import { Header } from "./Header";
import { useEstante } from "../livro/EstanteContext";
import "./ListaLivrosView.css";

export function ListaLivrosView() {
  const { estouLendo, jaLi, queroLer, moverLivro } = useEstante();
  const [livros, setLivros] = useState([]);
  const [expanded, setExpanded] = useState({
    estouLendo: false,
    jaLi: false,
    queroLer: false,
  });

  const toggleEstante = (estante) => {
    setExpanded((prev) => ({
      ...prev,
      [estante]: !prev[estante],
    }));
  };

  const listarLivros = async () => {
    try {
      const livros = await findAll();
      setLivros(livros);
    } catch (error) {
      console.error("Erro ao listar os livros:", error);
    }
  };

  return (
    <main>
      <Header />
      <button onClick={listarLivros}>LISTAR</button>

      {/* Estantes */}
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
              id={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

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
              id={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

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
              id={l.id}
              title={l.title}
              author={l.authors?.join(", ") || "Autor desconhecido"}
              image={l.imageLinks?.thumbnail || l.imageLinks?.smallThumbnail}
              onMove={(estante) => moverLivro(l, estante)}
            />
          ))}
        </div>
      </section>

      {/* Livros Disponíveis */}
      <section>
        <h2>Livros disponíveis</h2>
        <div className="cards">
          {livros.map((l) => (
            <Card
              key={l.id}
              id={l.id}
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
