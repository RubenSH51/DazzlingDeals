import React, { useEffect } from 'react'
import { useContext, useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom'
import {ShoppingCartContext} from "../context/Context"
import { SignIn } from './SignIn';
import "./NavBar.css"


export const NavBar = () => {

    let activeStyle = 'underline underline-offset-4';
    const { count, setCount,cartProducts,setCartProducts, setSearchByCategory,
        selectedAvatar,setSelectedAvatar } = useContext(ShoppingCartContext);

    let {userLogged,setUserLogged,showLogInMenu, setShowLogInMenu,
        currentUser, setCurrentUser,
        ToggleCheckOutSideMenu,CloseAside,
    isAsideOpen, isCheckoutsideMenuOpen,
        setOrder} = useContext(ShoppingCartContext)

    const navigate = useNavigate();

    function showSignIn()
    {
        CloseAside()
        setShowLogInMenu(!showLogInMenu)
    }

    function handleSignOut(){
        setOrder([]);
        setShowLogInMenu(false);
        setUserLogged(!userLogged);
        setCartProducts([]);

        // borrando avatar
        setSelectedAvatar('')

        navigate('/');

    }

    useEffect( () => {

        if ((!isAsideOpen) && (!isCheckoutsideMenuOpen) && (cartProducts.length>0))
        {
            document.getElementById('flechaCart').classList.remove('ocultar')
        }
        else
        {
            document.getElementById('flechaCart').classList.add('ocultar')
        }
    },[cartProducts,isAsideOpen,isCheckoutsideMenuOpen])   





  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 fixed z-10 w-full top-0">
        <ul className="flex gap-2 text text-xs items-center">
            <li>
                <NavLink to='/' className={({isActive }) => isActive ? activeStyle : undefined}>
                    <div className='flex items-center'>
                        <img 
                            src="public/DDnavbar.png" 
                            alt="" 
                            className='w-6 h-6 mr-1'/> 
                        <p>Dazzling DEALS</p>
                    </div>
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
                <NavLink  to='/shoes' className={({isActive }) => isActive ? activeStyle : undefined}>
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



        <ul className="flex gap-2 text-xs items-center">
            {userLogged &&
            <>
                <li>
                <img 
                    id='navbar-avatar'
                    src={`public/avatars/${currentUser.avatar}`} 
                    className='w-6 h-6 rounded-xl  
                    transition-transform duration-300 transform hover:scale-150' 
                    alt="avatar" />
                    {/* <img src="../../public/sh2.png" className='w-6 h-6 bg-white rounded-lg' alt="avatar" /> */}
                </li>
                <li className='text-white/60'>
                    {currentUser.name}
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
            </>
            }


            {
                !userLogged ?

                <li className='relative'>
                    {/* <NavLink to='/signin' className={({isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink> */}
                    <a href='#' /*className={({isActive }) => isActive ? activeStyle : undefined}*/
                        onClick={() => showSignIn()}
                        
                    >
                        Sign In
                    </a>
                    {showLogInMenu &&
                    <div className='absolute positionPerfecta' >
                        <SignIn/>
                    </div>}
                </li>
                :
                <li>
                    {/* <a href="#" className='cursor-pointer' onClick={() => setUserLogged(!userLogged)}>Sign Out</a> */}
                    <a href="#" className='cursor-pointer' onClick={handleSignOut}>Sign Out</a>

                </li>

            }
            




            <li 
                className='flex cursor-pointer'
                onClick={() => ToggleCheckOutSideMenu()}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <div>
                    <p className={`${cartProducts.length!==0 ? "bg-red-500 rounded-lg" : ""} px-1`}>{cartProducts.length}</p>
                </div>
            </li>

        </ul>
        <div className="flechaCart" id="flechaCart">
            <span className='text-3xl'>⬆</span>
        </div>
    </nav>
  )
}
