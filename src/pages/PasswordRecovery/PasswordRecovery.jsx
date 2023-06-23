import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context/Context';
import "./PasswordRecovery.css"

export const PasswordRecovery = () => {

  const {showLogInMenu, setShowLogInMenu} = useContext(ShoppingCartContext) 
  const [isMsgSent, setIsMsgSent] = useState(false)

  useEffect(() => {
    setShowLogInMenu(false);
  },[])



  return (
    <div className='text-black mt-12 text-lg w-full flex justify-center flex-col items-center'>
        <h2 className='text-2xl my-4 font-bold'>Password Recovery</h2>
        <form 
          className='bg-gray-300 flex flex-col justify-center 
          items-center w-1/2 max-w-md p-8 mt-4 rounded-lg'>
            <p>Please enter your email address to reset your password.</p>
            <input 
              type="email" 
              placeholder="Enter your e-mail"
              className='pl-2 mt-4 py-1'
              
              />
              <button 
                type="button"
                className='mt-6 border-none rounded-lg px-4 py-2 
                font-bold bg-white hover:bg-black hover:text-white'
                onClick={() => setIsMsgSent(true)}
              >Send
          </button>
        </form> 
        {isMsgSent &&
        <p className='text-md text-green-700 font-bold text-center'>A password reset email has been sent to your inbox.</p>
        }
    </div>
  ) 
}
