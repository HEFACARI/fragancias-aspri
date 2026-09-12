import React, { useState } from 'react'
import Logo from "../assets/favicon.jpg";
import { Link } from 'react-router-dom';
import { slideUp } from '../utility/animation';
import {motion} from 'framer-motion'
import { div } from 'framer-motion/client';

const navbarLinks = [
    {
        id:1,
        title: "INICIO",
        link: "/"
    },
    {
        id: 2,
        title: "FRAGANCIAS HOMBRE",
        link: "/fraganciashombres"
    },
    {
        id: 3,
        title: "FRAGANCIAS MUJER",
        link: "/fraganciasmujeres"
    },
    {
        id: 4,
        title: "CONTACTO",
        link: "/contacto"
    }
]

const navbarRedes = [
    {
        id:1,
        link: "/carritodecompras",
        icon: "bi bi-cart2"
    },
    {
        id:2,
        title:"Facebook",
        link: "https://www.facebook.com/profile.php?id=61584320340839",
        icon:"bi bi-facebook"
    },
    {
        id:3,
        title:"Instagram",
        link:"https://www.instagram.com/fraganciasaspri/",
        icon:"bi bi-instagram"
    },
]

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleMenu = () =>{
        setIsOpen(!isOpen)
    }

  return (
    <nav className='relative top-0 left-0 bg-blue-950/90 backdrop-blur-md z-50'>
        <div className='flex justify-between px-6 py-4 items-center'>

            {/*LOGO NAVBAR*/}
            <motion.img 
                src={Logo}
                alt="Logo"
                className='w-15 hover:scale-110 transform duration-300'
                variants={slideUp(0.8)}
                initial="initial"
                animate="animate"
            />
            
            {/*BOTON HAMBURGUESA Y X*/}
            <button className='text-white md:hidden' onClick={toogleMenu}>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24' //0 horizontal, 0 vertical, 24 ancho, 24 alto
                >
                    {isOpen ? (<path
                    //BOTON X
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    ) : (<path
                    //BOTON HAMBURGUESA 
                         strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />)}
                </svg>
            </button>
            
            
            {/*NAVEGACION DESKTOP*/}
            <div className='text-xs md:text-base hidden md:block'>
                <ul className='flex md:space-x-8 space-x-2'>
                    {navbarLinks.map((link)=>(
                        <li className='text-white hover:text-sky-300 hover:scale-110 transform inline-block duration-300' 
                            key={link.id}>
                            <Link to={link.link}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/*NAVEGACION REDES*/}
            <div>
                <ul className='flex items-center gap-3 md:gap-4 p-2'>
                    {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <Link className='text-white hover:text-sky-300 hover:scale-110 transform inline-block duration-300' to={link.link} >
                                <i
                                    className={`${link.icon} sm:text-2xl text-lg text-white`}  
                                >
                                </i>
                            </Link>
                            
                        </li>
                    ))

                    }
                </ul>
            </div>
        </div>

        {/* MENU MOVIL */}
        <div className={`transition duration-500 md:hidden text-white bg-blue-950 w-full absolute z-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className='flex flex-col px-4 py-2'>
                {navbarLinks.map((link) => (
                    <li key={link.id} className='py-2 text-center'>
                        <Link className="hover:text-blue-300 hover:scale-110 transform inline-block duration-300"
                            to={link.link} onClick={() => setIsOpen(false)}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
             
        </div>
    </nav>
  )
}

export default NavBar
