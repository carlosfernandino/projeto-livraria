import "./styles.css";
import { ListaLivrosView } from "./paginas/ListaLivrosView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarLivrosView } from "./paginas/BuscarLivrosView";
import { DetalhesLivroView } from "./paginas/DetalhesLivroView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaLivrosView />} />
        <Route path="/busca" element={<BuscarLivrosView />} />
        <Route path="/livro/:id" element={<DetalhesLivroView />} />
      </Routes>
    </Router>
  );
}
