import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context/Context'



export const SignUp = () => {
  const {showLogInMenu, setShowLogInMenu} = useContext(ShoppingCartContext)
  let { userLogged,setUserLogged,userList, setUserList} = useContext(ShoppingCartContext)
  console.log(userList)


  useEffect(() => {
    setShowLogInMenu(!showLogInMenu);
  },[])

  function newUser(){
    let name = document.getElementById('newUserName').value;
    let passw = document.getElementById('newUserPass').value;
    let email = document.getElementById('newUserEmail').value;
    const newUser = {name: name, password: passw, email: email}

    setUserList([...userList, newUser]);

    localStorage.setItem('Acceso', JSON.stringify([...userList, newUser]));

    
  }



  return (
    <div className='text-black w-full  flex justify-center flex-col items-center'>
      {/* <h1 className='text-center mt-4 text-xl'>Welcome!</h1> */}
      <form action="" 
        className='min-w-dd max-w-sm mt-4 p-4 bg-gray-500 
        border border-solid border-black w-1/3 flex flex-col items-center'>
        <label htmlFor="" className=''>Username</label>
        <input type="text" className='rounded h-8 pl-2' id="newUserName"/>

        <label htmlFor="" className='mt-4'>Password</label>
        <input type="password"  className='rounded h-8 pl-2' id="newUserPass"/>

        <label htmlFor="" className='mt-4'>E-mail</label>
        <input type="email"  className='rounded h-8 pl-2' id="newUserEmail"/>

        <button 
            type="button" 
            className='mt-4 border w-1/2 h-12 rounded hover:bg-black hover:text-white  
                        transition-colors duration-300'
            onClick={() => newUser()}
        >Register</button>

      </form>
      
    </div>
  )
}
