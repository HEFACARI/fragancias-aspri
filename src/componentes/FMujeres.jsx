import { useContext } from "react"
import afeef from "../assets/img/afeef.png"
import ariana from "../assets/img/ariana-grande-cloud.png"
import clubWomen from "../assets/img/club-de-nuit-women.png"
import yaraRosada from "../assets/img/yara-rosada.png"
import { slideUp } from '../utility/animation'
import {motion} from "framer-motion"
import { Context } from "../Context"

const fraganciasMujeres = [

]

const FMujeres = () => {

  const buyFra = (fra) => {

    const productoExistente = cart.find((producto) => producto.id === fra.id)

    if (productoExistente){
      setCart(cart.map((producto) => (
        producto.id === fra.id
        ? {...producto, cantidad: producto.cantidad + 1}
        : producto
      )))
    }else{
      setCart([...cart, {...fra, cantidad:1}])
    }

    // setCart([...cart, fra])
    // console.log(fra)
  }

  const {cart, setCart} = useContext(Context)

  return (
    <motion.div className='grid grid-cols-2 bg-gray-400 md:grid-cols-4 text-center px-5 py-5 gap-5 max-w-6xl mx-auto mt-5' variants={slideUp(0.3)} initial="initial" animate="animate">
      {fraganciasMujeres.map((fra)=>(
        <div key={fra.id} className='bg-white'>
          <img src={fra.img} className='w-full h-64 object-cover'/>
          <h3>{fra.nombre}</h3>
          <p>${fra.precio.toLocaleString("es-CO")}</p>
          <button className="hover:bg-sky-300 m-3 p-2 bg-blue-950/80 rounded-md text-white hover:scale-110 transform duration-300 text-xs" 
          onClick={() => buyFra(fra)}>
            AÑADIR AL CARRITO
          </button>
        </div>
      ))}
    </motion.div>
  )
}

export default FMujeres
