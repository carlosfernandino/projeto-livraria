import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { findAll } from "../livro/LivrosApi";
import { Header } from "./Header";

export function DetalhesLivroView() {
  const { id } = useParams(); // Pega o ID do livro da URL
  const [livro, setLivro] = useState(null); // Armazena as informações do livro
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento
  const [error, setError] = useState(null); // Armazena erros

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const livros = await findAll(); // Busca todos os livros
        const livroEncontrado = livros.find((livro) => livro.id === id); // Encontra o livro com o ID correspondente
        setLivro(livroEncontrado);
      } catch (err) {
        setError("Erro ao carregar os detalhes do livro.");
      } finally {
        setLoading(false);
      }
    };

    fetchLivro();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  if (!livro) return <p>Livro não encontrado.</p>;

  return (
    <main>
      <Header />
      <div className="detalhes-livro-container">
        <h1>{livro.title}</h1>
        <img
          src={
            livro.imageLinks?.thumbnail ||
            livro.imageLinks?.smallThumbnail ||
            "https://via.placeholder.com/150"
          }
          alt={livro.title}
        />
        <p>
          <strong>Autor(es):</strong>{" "}
          {livro.authors?.join(", ") || "Desconhecido"}
        </p>
        <p>
          <strong>Descrição:</strong>{" "}
          {livro.description || "Sem descrição disponível."}
        </p>
      </div>
    </main>
  );
}
