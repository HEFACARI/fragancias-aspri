import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./componentes/Banner";
import NavBar from "./componentes/Navbar";
import FHombres from "./componentes/FHombres";
import FMujeres from "./componentes/FMujeres";
import Contacto from "./componentes/Contacto";
import Product from "./componentes/Product";
import Cart from "./componentes/Cart";
import { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {

  useEffect(() => {
      const probarSupabase = async () => {
        const {data, error} = await supabase
        .from('fragancias')
        .select('*')

        console.log("Datos:", data)
        console.log("Error:", error)
      }

      probarSupabase()
    }, [])

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