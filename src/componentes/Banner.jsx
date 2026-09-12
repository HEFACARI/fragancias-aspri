import React from 'react'
import baner from "../assets/baner.png"
import { slideUp } from '../utility/animation'
import {motion} from 'framer-motion'
import img2 from "../assets/img/2.jpg"
import nuevepm from "../assets/img/9pm.webp"
import bondNueve from "../assets/img/lafayette-bond-09.png"
import ariana from "../assets/img/ariana-grande-cloud.png"
import yaraRosada from "../assets/img/yara-rosada.png"

const fragancias = [
  {
    id:1,
    img: nuevepm,
    nombre: "9 PM",
    precio: 130000
  },
  {
    id: 4,
    img: bondNueve,
    nombre: "LAFAYETTE BOND 9",
    precio: 1200000
  },
  {
    id:6,
    img: ariana,
    nombre: "ARIANA GRANDE CLOUD",
    precio: 250000
  },
  {
    id: 8,
    img: yaraRosada,
    nombre:"LATTAFA YARA ROSADA",
    precio: 150000
  }
]

const Banner = () => {
  return (
    <>
      <div className='w-full hover:scale-103 transform duration-300'>

        <motion.img className='mx-auto mt-5 relative z-0' src={baner} alt="baner" variants={slideUp(0.3)} initial="initial" animate="animate"/>

        <img src={img2} className='mx-auto mt-5'/>

      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto bg-blue-950/90 mt-5 px-5 py-5 mb-20 gap-5'>
        {fragancias.map((fra) => (
          <div className='bg-white text-center' key={fra.id}>
            <img src={fra.img} className='h-64 w-full object-contain'/>
            <p>{fra.nombre}</p>
            <p>{fra.precio.toLocaleString("es-CO")}</p>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default Banner
