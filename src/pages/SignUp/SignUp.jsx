import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../context/Context'

import { AvatarModal } from '../../components/AvatarModal'

import { getImageBaseUrl } from '../../utils/getImageBaseUrl'


export const SignUp = () => {
  const imageBaseUrl = getImageBaseUrl();
  const {showLogInMenu, setShowLogInMenu} = useContext(ShoppingCartContext)
  let { userLogged,setUserLogged,userList, setUserList,
    setCurrentUser,
    selectedAvatar, setSelectedAvatar,handleAvatarSelect,
    isAvatarsModalOpen, setIsAvatarsModalOpen} = useContext(ShoppingCartContext)
  
  
  const navigate = useNavigate();


  useEffect(() => {
    setShowLogInMenu(false);
  },[])

  function newUser(){
    event.preventDefault()
    
    // Data
    let name = document.getElementById('newUserName').value;
    let passw = document.getElementById('newUserPass').value;
    let email = document.getElementById('newUserEmail').value;
    let id = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
    let userAvatar = selectedAvatar

    const addNewUser = { id: id ,name: name, password: passw, email: email, orders: [], avatar: userAvatar}

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Validation I: format


    let usersName = userList.map(x => x.name);
    let usersEmail = userList.map(x => x.email);


    if (name.length<5)
    {
      document.getElementById('registerErrorMessage').textContent = "Usename should be at least 6 characters long."
      document.getElementById('registerErrorMessage').classList.remove('hidden')
      return
    }

    if (passw.length<4)
    {
      document.getElementById('registerErrorMessage').textContent = "Password should be at least 4 characters long."
      document.getElementById('registerErrorMessage').classList.remove('hidden')
      return
    }

    if (email.length<7)
    {
      document.getElementById('registerErrorMessage').textContent = "Enter a valid email address."
      document.getElementById('registerErrorMessage').classList.remove('hidden')
      return
    }


    if (userAvatar.length<5)
    {
      document.getElementById('registerErrorMessage').textContent = "Select your user's avatar to continue."
      document.getElementById('registerErrorMessage').classList.remove('hidden')
      return
    }

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Validation II: unicity

    if(usersName.includes(name)){
      document.getElementById('registerErrorMessage').textContent = "That username already exists in the system."
      document.getElementById('registerErrorMessage').classList.remove('hidden');
      return
    }

    if(usersEmail.includes(email)){
      document.getElementById('registerErrorMessage').textContent = "That email address already exists in the system."
      document.getElementById('registerErrorMessage').classList.remove('hidden');
      return
    }

    // Update Data

    setUserList([...userList, addNewUser]);
    localStorage.setItem('Acceso', JSON.stringify([...userList, addNewUser]));
    navigate('/');
    setUserLogged(!userLogged);
    setCurrentUser(addNewUser);
  }



  
  // >>>>>> Users:
  console.log(userList.map(x => x.name))
  console.log(userList.map(x => x.email))


  return (
    <div className='text-black w-full  flex justify-center flex-col items-center'>
      <h1 className='text-center mt-4 text-2xl font-bold'>Register</h1>
      <form action="" onSubmit={(event) => newUser()}
        className='min-w-dd max-w-sm mt-4 p-4 bg-gray-500 
        border border-solid border-black w-1/3 flex flex-col items-center'>
        <label htmlFor="" className=''>Username</label>
        <input type="text" className='rounded h-8 pl-2' id="newUserName"/>

        <label htmlFor="" className='mt-4'>Password</label>
        <input type="password"  className='rounded h-8 pl-2' id="newUserPass"/>
        
        <label htmlFor="" className='mt-4'>E-mail</label>
        <input type="email"  className='rounded h-8 pl-2' id="newUserEmail"/>



        {selectedAvatar!== '' 

        ? 
        <div className='flex flex-col justify-center items-center'>
          <img 
            className='w-20 h-20 my-4 '
            src={`${imageBaseUrl}/avatars/${selectedAvatar}`} 
            alt="avatar" 
          />
          <button 
            type="button"
            onClick={() => setIsAvatarsModalOpen(true)}
            className='mt-4 border w-52 h-12 rounded hover:bg-black hover:text-white  
                          transition-colors duration-300'
            >Change Your Avatar
          </button>
        </div>
        :
        <button 
          type="button"
          onClick={() => setIsAvatarsModalOpen(true)}
          className='mt-4 border w-52 h-12 rounded hover:bg-black hover:text-white  
                        transition-colors duration-300'
          >Select Your Avatar
        </button>
        }
        
        
      



        <button 

            className='mt-4 border w-3/4 h-12 rounded hover:bg-black hover:text-white  
                        transition-colors duration-300'
            //  onClick={() => newUser()}
            >Register
        </button>

      </form>

      {isAvatarsModalOpen && 
        <AvatarModal />
      }

      <div>
        <p 
          className="hidden text-red-800 mt-2"
          id="registerErrorMessage">

        </p>
      </div>


      
     </div>
  )
}
