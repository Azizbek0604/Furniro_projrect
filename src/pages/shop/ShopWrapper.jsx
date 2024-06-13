import React from 'react'
import './shopWrapper.scss'
import { Link } from 'react-router-dom'

const ShopWrapper = () => {
  return (
    <div className='shopWrapper'>
        <div className='shopWrapper__container'>

            <h1 className='shopWrapper__title'>Shop</h1>
            <div className='shopWrapper__block'>
            <Link className='shopWrapper__link'>Home</Link>
            <Link className='shopWrapper__link'>Shop</Link>
            </div>
        </div>

    </div>
  )
}

export default ShopWrapper