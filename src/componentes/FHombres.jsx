import nuevepm from "../assets/img/9pm.webp";
import lattafaBourbon from "../assets/img/lattafaBourbon.png";
import club from "../assets/img/clubdenuit.avif";
import bondNueve from "../assets/img/lafayette-bond-09.png";
import { slideUp } from "../utility/animation";
import { motion } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import { supabase } from "../supabaseClient";

// const fraganciasHombres = [
//   {
//     id: 1,
//     img: nuevepm,
//     nombre: "9 PM",
//     precio: 130000,
//   },
//   {
//     id: 2,
//     img: lattafaBourbon,
//     nombre: "LATTAFA BOURBON",
//     precio: 130000,
//   },
//   {
//     id: 3,
//     img: club,
//     nombre: "CLUB DE NUIT SILLAGE",
//     precio: 150000,
//   },
//   {
//     id: 4,
//     img: bondNueve,
//     nombre: "LAFAYETTE BOND 9",
//     precio: 1200000,
//   },
// ];


const FHombres = () => {

  const [fragancias, setFragancias] = useState([])

  useEffect(() => {
    const obtenerFragancias = async ()=> {
      const {data, error} = await supabase
      .from('fragancias')
      .select('*')
      .eq('categoria', 'hombre')

      if(error) {
        console.log(error)
      }

      setFragancias(data)
    }

    obtenerFragancias()
  }, [])

  /*AÑADIR FRAGANCIAS AL CARRITO */
  const buyFra = (fra) => {
    
    const productoExistente = cart.find((producto) => producto.id === fra.id)

    if(productoExistente){
      setCart(cart.map((producto) => (
        producto.id === fra.id
        ? {...producto, cantidad: producto.cantidad + 1}
        : producto
      )))
    }else{
      setCart([...cart, {...fra, cantidad:1}])
    }

    // setCart([...cart, fra]);
    // console.log(fra);
  };

  const { cart, setCart } = useContext(Context);

  return (
    <motion.div
      className="grid grid-cols-2 bg-gray-400 md:grid-cols-4 text-center px-5 py-5 gap-4 mt-5 max-w-6xl mx-auto"
      variants={slideUp(0.3)}
      initial="initial"
      animate="animate"
    >
      {fragancias.map((fra) => (
        <div key={fra.id} className="bg-white">
          <img src={fra.img} className="w-full h-64 object-cover" />
          <h3>{fra.nombre}</h3>
          <p>${fra.precio.toLocaleString("es-CO")}</p>
          <button
            className="hover:bg-sky-300 m-3 p-2 bg-blue-950/80 rounded-md text-white hover:scale-110 transform duration-300 text-xs"
            onClick={() => buyFra(fra)}>
            AÑADIR AL CARRITO
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default FHombres;
