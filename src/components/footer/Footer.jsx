import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__block'>
                <div>
                    <h1 className='footer__logo'>Funiro.</h1>
                    <p className='footer__desc'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
                </div>
                <div>
                    <ul className='footer__list'>
                        <Link className='footer__link'>Link</Link>
                        <Link className='footer__link'>Home</Link>
                        <Link className='footer__link'>Shop</Link>
                        <Link className='footer__link'>About</Link>
                        <Link className='footer__link'>Contact</Link>
                    </ul>
                </div>
                <div>
                    <ul className='footer__list'>
                        <Link className='footer__link'>Help</Link>
                        <Link className='footer__link'>Payment Options</Link>
                        <Link className='footer__link'>Returns</Link>
                        <Link className='footer__link'>Privacy Policies</Link>
                    </ul>
                </div>
                <div>
                      <ul className='footer__list'>
                        <Link className='footer__link'>Newsletter</Link>
                        <Link className='footer__link'>Instagram</Link>
                        <Link className='footer__link'>Facebook</Link>
                      </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer