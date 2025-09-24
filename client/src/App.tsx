import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Agendas from "./pages/agendas";
import Protocol from "./pages/protocol";
import ProductPage from "./pages/productPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/agendas" element={<Agendas />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/shop/:product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
