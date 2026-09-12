import React, { useContext } from 'react'
import { Context } from '../Context'
import { div } from 'framer-motion/client'

const Cart = () => {

  const {cart, setCart} = useContext(Context)

  /*AUMENTAR LA CANTIDAD DE FRAGANCIAS*/
  const aumentarCantidadFra = (id) => {
    setCart(
      cart.map((producto) => (
        producto.id === id 
        ? {...producto, cantidad: producto.cantidad + 1}
        : producto
      ))
    )
  }

  /*DISMINUIR LA CANTIDAD DE FRAGANCIAS*/
  const disminuirCantidadFra = (id) => {
    setCart(cart.map((producto) => (
      producto.id === id && producto.cantidad > 1
      ? {...producto, cantidad: producto.cantidad - 1}
      : producto
    )))
  }

  /*ELIMINAR FRAGANCIAS*/
  const eliminarFra = (id) => {
    setCart(
      cart.filter((producto) => producto.id !== id)
    )
  }

  /*TOTAL */
  const total = cart.reduce(
    (acumulado, producto) => ( 
    acumulado + producto.cantidad * producto.precio
  ), 0)

  return (
    <>
        <h1 className='max-w-6xl mx-auto text-center m-5 p-5'>CARRITO DE COMPRAS 🛒</h1>

        <div className='grid grid-cols-2 md:grid-cols-4 bg-blue-100 max-w-6xl mx-auto text-center mt-5 px-5 py-5 gap-4'>

          {cart.map((fra) => (
          <div key={fra.id} className='bg-white'>
            <button className='flex items-center justify-center w-7 h-7 border-2 border-gray-500 rounded-full text-gray-500 hover:bg-blue-100' onClick={() => eliminarFra(fra.id)}>X</button>
            <img src={fra.img} className='mx-auto h-25 w-25 object-contain'/>
            <h3>{fra.nombre}</h3>
            <h3>{fra.precio.toLocaleString("es-CO")}</h3>
            <div>
              <button className="bg-red-200 m-3 w-7 rounded-lg" onClick={() => disminuirCantidadFra(fra.id)}> - </button>
              <span>{fra.cantidad}</span>
              <button className='bg-green-200 m-3 w-8 rounded-lg' onClick={() => aumentarCantidadFra(fra.id)}> + </button>
            </div>
            
          </div>
          )
          )}
        </div>
        <div className=' bg-blue-100 max-w-6xl mx-auto text-center'>
            <p>TOTAL: {total.toLocaleString("es-CO")}</p>
            <button className='bg-blue-950/80 hover:bg-green-300 transform hover:scale-110 duration-300 m-3 p-2 text-sm rounded-md text-white'>COMPRAR</button>
        </div>
    </>
  )
}

export default Cart
