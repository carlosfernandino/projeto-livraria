import { findAll, deleteById } from "./LivrosApi";
import { Card } from "./Card";
import { useState } from "react";

import "./ListaLivrosView.css";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);

  return (
    <main>
      <h1>Lista de livros</h1>
      <button
        onClick={async () => {
          const livros = await findAll();
          setLivros(livros);
        }}
      >
        LISTAR
      </button>

      <button>ADICIONAR</button>
      <div className="cards">
        {livros.map((l) => (
          <Card
            title={l.title}
            onDelete={async () => {
              await deleteById(l.id);
              alert("Livro removido com sucesso!");

              const livros = await findAll();
              setLivros(livros);
            }}
          />
        ))}
      </div>
    </main>
  );
}
