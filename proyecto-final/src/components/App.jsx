import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import DetallesDeArtista from "./DetallesDeArtista";
import NotMatch from "./NotFound/NotMatch";
import MisFavoritos from './MisFavoritos';

function App() {
  return (
    <>
    {/* estas son mis rutas  */}
      <BrowserRouter>
        <Routes> 
          

          <Route path="/" element={<Home/>} />
          <Route path="/detallesdeartista/:id" element={<DetallesDeArtista />} />
          <Route path="/misfavoritos" element={<MisFavoritos />} />
          <Route path="*" element={<NotMatch/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
