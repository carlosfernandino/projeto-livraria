import "./styles.css";
import { ListaLivrosView } from "./paginas/ListaLivrosView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarLivrosView } from "./paginas/BuscarLivrosView";
import { DetalhesLivroView } from "./paginas/DetalhesLivroView";
import { EstanteProvider } from "./livro/EstanteContext";

export default function App() {
  return (
    <EstanteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ListaLivrosView />} />
          <Route path="/busca" element={<BuscarLivrosView />} />
          <Route path="/livro/:id" element={<DetalhesLivroView />} />
        </Routes>
      </Router>
    </EstanteProvider>
  );
}
