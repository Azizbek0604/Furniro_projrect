import React, { useEffect, useState } from 'react'
import './cards.scss'
import axios from 'axios'

const Cards = () => {
    const [product, setProduct] = useState([])

    const fetchProduct = async () => {
        const res = await axios.get('http://localhost:3000/product')
        const data = await res.data
        console.log(data);
        setProduct(data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

  return (
        
    <div className='cards cards__container'>
                {
            product.map((product) => (
                <ul key={product.id} className='cards__list'>
                    {product.image ? <img className='cards__img' src={product.image} /> : null}
                    <li className='cards__title'>{product.name}</li>
                    <li className='cards__text'>{product.body}</li>
                    <li className='cards__price'>{product.price}</li>
                </ul>
                
            ))
        }
                {
            product.map((product) => (
                <ul key={product.id} className='cards__list'>
                    {product.image ? <img className='cards__img' src={product.image} /> : null}
                    <li className='cards__title'>{product.name}</li>
                    <li className='cards__text'>{product.body}</li>
                    <li className='cards__price'>{product.price}</li>
                </ul>
                
            ))
        }

    </div>
  )
}

export default Cards