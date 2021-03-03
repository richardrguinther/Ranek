import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import { PagesStorage } from "./context/PagesContext";
import Contato from "./pages/Contato";

// Pages
import Home from "./pages/Home";
import Produto from "./pages/Produto";
// Styles
import "./styles/GlobalStyles.css";

function App() {
  return (
    <BrowserRouter>
      <PagesStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />}></Route>
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </PagesStorage>
    </BrowserRouter>
  );
}

export default App;

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook
