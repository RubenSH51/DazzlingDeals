import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import {ShoppingCartContext} from "../context/Context"


export const NavBar = () => {

    let activeStyle = 'underline underline-offset-4';
    const { count, setCount,cartProducts,setSearchByCategory } = useContext(ShoppingCartContext);




  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 fixed z-10 w-full top-0">
        <ul className="flex gap-2 text text-xs">
            <li>
                <NavLink to='/' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/all' 
                    className={({isActive }) => isActive ? activeStyle : undefined} 
                    
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink  to='/clothes'  className={({isActive }) => isActive ? activeStyle : undefined}>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink  to='/electronics' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink  to='/Shoes' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Shoes
                </NavLink>
            </li>
            <li>
                <NavLink  to='/nuevo' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Nuevo
                </NavLink>
            </li>
            <li>
                <NavLink  to='/others' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Others
                </NavLink>
            </li>
        </ul>

        <ul className="flex gap-2 text-xs">
            <li className='text-white/60'>
                ruben@gmail.com
            </li>
            <li>
                <NavLink to='/myorders' className={({isActive }) => isActive ? activeStyle : undefined}>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/myaccount' className={({isActive }) => isActive ? activeStyle : undefined}>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/signin' className={({isActive }) => isActive ? activeStyle : undefined}>
                    Sign In
                </NavLink>
            </li>
            <li className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>{cartProducts.length}
            </li>

        </ul>
    </nav>
  )
}
