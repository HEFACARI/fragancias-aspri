import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./componentes/Banner";
import NavBar from "./componentes/Navbar";
import FHombres from "./componentes/FHombres";
import FMujeres from "./componentes/FMujeres";
import Contacto from "./componentes/Contacto";
import Product from "./componentes/Product";
import Cart from "./componentes/Cart";

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Banner/>
              </div>
            }
          />
          <Route path="/fraganciashombres" element={<FHombres/>}/>
          <Route path="/fraganciasmujeres" element={<FMujeres/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/carritodecompras" element={<Cart/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;