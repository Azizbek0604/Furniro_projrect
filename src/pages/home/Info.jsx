import React, { useEffect, useState } from 'react'
import './info.scss'
import axios from 'axios'

const Info = () => {

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
    <div className='info info__container'>
        {
            product.map((product) => (
                <ul key={product.id} className='info__list'>
                    {product.image ? <img className='info__img' src={product.image} /> : null}
                    <li className='info__title'>{product.name}</li>
                    <li className='info__text'>{product.body}</li>
                    <li className='info__price'>{product.price}</li>
                </ul>
                
            ))
        }

            <button className='info__btn'>Show More</button>
    </div>
  )
}

export default Info