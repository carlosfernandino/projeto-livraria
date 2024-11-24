import { useState } from "react";
import { findAll } from "../livro/LivrosApi";
import { Header } from "./Header";
import { Card } from "../livro/Card";
import { useEstante } from "../livro/EstanteContext";
import "./BuscarLivrosView.css";

export function BuscarLivrosView() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { moverLivro } = useEstante();

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor, insira um título.");
      setResults([]);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const livros = await findAll();
      const livrosFiltrados = livros.filter((livro) =>
        livro.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(livrosFiltrados);
    } catch (err) {
      setError("Erro ao buscar livros.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      <div className="buscar-livros-container">
        <h1>Buscar Livros</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite o título do livro"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="search-results">
          {results.length === 0 && !loading && <p>Nenhum livro encontrado.</p>}
          {results.map((livro) => (
            <Card
              key={livro.id}
              id={livro.id}
              title={livro.title}
              author={livro.authors?.join(", ") || "Desconhecido"}
              image={
                livro.imageLinks?.thumbnail || livro.imageLinks?.smallThumbnail
              }
              onMove={(estante) => moverLivro(livro, estante)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
