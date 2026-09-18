// import { createContext, useState } from "react"


// export const Context = createContext()

// const ContextProvider = ({children}) => {
//     const [cart, setCart] = useState([])

//     return(
//         <Context.Provider value={{cart, setCart}}>
//             {children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider

import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const carritoGuardado = localStorage.getItem("cart")//convierte el arreglo en texto, guarda texto, localStorage guarda texto

        return carritoGuardado
        ? JSON.parse(carritoGuardado)//convierte el texto en un arreglo, Necesitamos el array
        : []
    })

    const actualizarCart = (nuevoCart) => {
        setCart(nuevoCart)
        localStorage.setItem("cart", JSON.stringify(nuevoCart))//convierte el arreglo en texto, localStorage guardaTexto
    }

    return(
        <Context.Provider value={{cart, setCart:actualizarCart}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider