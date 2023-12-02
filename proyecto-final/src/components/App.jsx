import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import DetallesDeArtista from "./PaginaDos/DetallesDeArtista";
import NotMatch from "./NotFound/NotMatch";

function App() {
  return (
    <>
    {/* estas son mis rutas  */}
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/detallesdeartista" element={<DetallesDeArtista/>} />
          <Route path="*" element={<NotMatch/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
