import { useParams } from "react-router-dom";
import { Header } from "./Header";

export function DetalhesLivroView() {
  const { id } = useParams(); // Pega o ID do livro da URL
  const livros = JSON.parse(localStorage.getItem("livros") || "[]"); // Busca os livros do localStorage
  const livro = livros.find((l) => l.id === id); // Encontra o livro pelo ID

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
