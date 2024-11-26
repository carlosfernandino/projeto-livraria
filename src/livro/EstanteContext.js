import { createContext, useState, useContext } from "react";

const EstanteContext = createContext();

export function EstanteProvider({ children }) {
  const [estouLendo, setEstouLendo] = useState([]);
  const [jaLi, setJaLi] = useState([]);
  const [queroLer, setQueroLer] = useState([]);

  // Mover livro entre estantes
  const moverLivro = (livro, paraEstante) => {
    setEstouLendo((prev) => prev.filter((l) => l.id !== livro.id));
    setJaLi((prev) => prev.filter((l) => l.id !== livro.id));
    setQueroLer((prev) => prev.filter((l) => l.id !== livro.id));

    if (paraEstante === "estouLendo") setEstouLendo((prev) => [...prev, livro]);
    if (paraEstante === "jaLi") setJaLi((prev) => [...prev, livro]);
    if (paraEstante === "queroLer") setQueroLer((prev) => [...prev, livro]);
  };

  // Remover livro de qualquer estante
  const removerLivro = (livro) => {
    if (estouLendo.some((l) => l.id === livro.id)) {
      setEstouLendo((prev) => prev.filter((l) => l.id !== livro.id));
      return { success: true, estante: "Estou lendo" };
    }

    if (jaLi.some((l) => l.id === livro.id)) {
      setJaLi((prev) => prev.filter((l) => l.id !== livro.id));
      return { success: true, estante: "Já li" };
    }

    if (queroLer.some((l) => l.id === livro.id)) {
      setQueroLer((prev) => prev.filter((l) => l.id !== livro.id));
      return { success: true, estante: "Quero ler" };
    }

    return { success: false };
  };

  return (
    <EstanteContext.Provider
      value={{ estouLendo, jaLi, queroLer, moverLivro, removerLivro }}
    >
      {children}
    </EstanteContext.Provider>
  );
}

export function useEstante() {
  return useContext(EstanteContext);
}
