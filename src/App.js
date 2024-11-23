import "./styles.css";
import { ListaLivrosView } from "./paginas/ListaLivrosView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarLivrosView } from "./paginas/BuscarLivrosView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaLivrosView />}></Route>
        <Route path="/busca" element={<BuscarLivrosView />}></Route>
      </Routes>
    </Router>
  );
}
