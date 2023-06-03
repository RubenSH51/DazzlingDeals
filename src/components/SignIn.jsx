import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../context/Context'



export const SignIn = () => {

  let {user, userLogged,setUserLogged} = useContext(ShoppingCartContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //let userLoggedIn = localStorage.getItem('Acceso');

  //console.log("userLoggedIn: ",userLoggedIn)


  function logginIn(){
    if((username === user.name) && (password === user.password))
    {
      setUserLogged(!userLogged);
    }
      setPassword('');
      setUsername('');

  }


  return (
    <div className='text-black  flex justify-center flex-col items-center' id="formDiv">
      {/* <h1 className='text-center mt-4 text-xl'>Welcome!</h1> */}
      <form action="" className='w-56  mt-4 p-4 bg-gray-500 border border-solid border-black w-1/3 flex flex-col items-center'>
        <label htmlFor="">Username</label>
        <input type="text" 
        className='w-5/6 mb-4 pl-2 rounded' 
        value={username}
        onChange={(e) => setUsername(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input type="password" 
        className='w-5/6 pl-2 rounded'  
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

        <button 
        className='mt-4 w-5/6 rounded h-8 bg-black text-white' 
        onClick={() => logginIn()}
        type="button">Log In</button>

        <Link to="/password-recovery" className='text-sm cursor-pointer text-blue-600 underline mt-2'>Forgot my password</Link>

        <Link to="/signup">
          <button 
            type="button"
            className='mt-4 w-full px-4 rounded h-8 bg-transparent hover:bg-black border text-white transition-colors duration-300'
            >Sign Up
          </button>
        </Link>
      </form>
      
    </div>
  )
}
