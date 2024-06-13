import React from 'react'
import './card.scss'
import Table from '../../assets/images/Table.jpg'
import Badroom from '../../assets/images/Badroom.jpg'
import Chair from '../../assets/images/Chair.jpg'

const Card = () => {
  return (
    <div className='card'>
        <div className="card__container">
            <h1 className='card__title'>Browse The Range</h1>
            <p className='card__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='card__block'>
                <div className='card__item_block'>
                    <img className='card__img' src={Table} alt="table" />
                    <h2 className='card__item_title'>Dining</h2>
                </div>
                <div className='card__item_block'>
                    <img className='card__img' src={Chair} alt="table" />
                    <h2 className='card__item_title'>Living</h2>
                </div>
                <div className='card__item_block'>
                    <img className='card__img' src={Badroom} alt="table" />
                    <h2 className='card__item_title'>Bedroom</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card