import { useState } from "react";
import { findAll } from "../livro/LivrosApi";
import { Header } from "./Header";
import "./BuscarLivrosView.css";

export function BuscarLivrosView() {
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [results, setResults] = useState([]); // Armazena os resultados
  const [error, setError] = useState(null); // Armazena erros
  const [loading, setLoading] = useState(false); // Controla o estado de carregamento

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor, insira um título.");
      setResults([]);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const livros = await findAll(); // Chama a função para pegar todos os livros
      const livrosFiltrados = livros.filter(
        (livro) => livro.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra pelo título
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
      <Header /> {/* Cabeçalho com navegação */}
      <div className="buscar-livros-container">
        <h1>Buscar Livros</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite o título do livro"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>} {/* Exibe erros */}
        <div className="search-results">
          {results.length === 0 && !loading && <p>Nenhum livro encontrado.</p>}{" "}
          {/* Mensagem quando não encontra resultados */}
          {results.map((livro) => (
            <div key={livro.id} className="livro-card">
              <img
                src={
                  livro.imageLinks?.thumbnail ||
                  livro.imageLinks?.smallThumbnail ||
                  "https://via.placeholder.com/128x193.png?text=No+Image"
                }
                alt={livro.title}
              />
              <h3>{livro.title}</h3>
              <p>Autor(es): {livro.authors?.join(", ") || "Desconhecido"}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
