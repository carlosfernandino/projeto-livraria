import { createContext, useState, useContext } from "react";

const EstanteContext = createContext();

export function EstanteProvider({ children }) {
  const [estouLendo, setEstouLendo] = useState([]);
  const [jaLi, setJaLi] = useState([]);
  const [queroLer, setQueroLer] = useState([]);

  const moverLivro = (livro, paraEstante) => {
    setEstouLendo((prev) => prev.filter((l) => l.id !== livro.id));
    setJaLi((prev) => prev.filter((l) => l.id !== livro.id));
    setQueroLer((prev) => prev.filter((l) => l.id !== livro.id));

    if (paraEstante === "estouLendo") setEstouLendo((prev) => [...prev, livro]);
    if (paraEstante === "jaLi") setJaLi((prev) => [...prev, livro]);
    if (paraEstante === "queroLer") setQueroLer((prev) => [...prev, livro]);
  };

  return (
    <EstanteContext.Provider value={{ estouLendo, jaLi, queroLer, moverLivro }}>
      {children}
    </EstanteContext.Provider>
  );
}

export function useEstante() {
  return useContext(EstanteContext);
}
