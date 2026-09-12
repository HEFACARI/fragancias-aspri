import { div } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

const Product = () => {

   const [products, setProducts] = useState([])

   useEffect(() => {
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => setProducts(data))
   }, [])

   return products.map((product) => {
            return(
                <div>
                    <p>{product.id}</p>
                    <img src={product.url} alt="" />
                    <h3>{product.nombre}</h3>
                    <h3>{product.tipo}</h3>
                    <h3>{product.precio}</h3>
                </div>
            )
        }
    )
}

export default Product
