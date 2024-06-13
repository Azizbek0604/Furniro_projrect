import React from 'react'
import './header.scss'
import Logo from '../../assets/images/Furniro.svg'
import { Link, NavLink } from 'react-router-dom'
import { RiUserFollowFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className='header__block'>
                <div className='header__logo'>
                    <Link><img src={Logo} alt="logo" /></Link>
                </div>
                <div className='header__link'>
                    <ul className='header__list'>    
                        <NavLink className='header__linkk' to='/'>Home</NavLink>
                        <NavLink className='header__linkk' to='/shop'>Shop</NavLink>
                        <NavLink className='header__linkk' to='/product'>Product</NavLink>
                    </ul>
                </div>
                <div className='header__icons'>
                <RiUserFollowFill className='header__icon' />
                <IoSearch className='header__icon' />
                <FaRegHeart className='header__icon' />
                <SlBasket className='header__icon' />
                </div>
            </div>

        </div>


    </div>
  )
}

export default Header