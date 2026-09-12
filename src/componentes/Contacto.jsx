import React from 'react'
import { slideUp } from '../utility/animation'
import {motion} from "framer-motion"


const Contacto = () => {
  return (
    <motion.div className='bg-gray-400 max-w-6xl mx-auto px-5 py-5 mt-5 leading-20 border-solid border-amber-100' variants={slideUp(0.3)} initial="initial" animate="animate"> 
      <p className='border border-blue-950/90 p-2'>Correo: hectorcaez24@gmail.com</p>
      <p className='border border-blue-950/90 p-2'>Numero: 3128970887</p>
      <p className='border border-blue-950/90 p-2'>Facebook: fraganciasaspri</p>
      <p className='border border-blue-950/90 p-2'>Instagram: fraganciasaspri</p>
    </motion.div>
  )
}

export default Contacto
