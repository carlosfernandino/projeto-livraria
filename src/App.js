import "./styles.css";
import { ListaLivrosView } from "./livro/ListaLivrosView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BuscarLivrosView } from "./livro/BuscarLivrosView";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<ListaLivrosView/>}></Route>
        <Route path="/busca" element= {<BuscarLivrosView/>}></Route>
      </Routes>
    </Router>
  );
}
