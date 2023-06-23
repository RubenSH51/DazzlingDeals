import React, { useContext, useState, useEffect } from 'react'
import { ShoppingCartContext } from '../../context/Context'
import "./MyAccount.css"
import { AvatarModal } from '../../components/AvatarModal';
import { Link } from 'react-router-dom';

import { getImageBaseUrl } from '../../utils/getImageBaseUrl';

export const MyAccount = () => {
  const imageBaseUrl = getImageBaseUrl();

  const {currentUser, userList, setUserList,
    isAvatarsModalOpen, setIsAvatarsModalOpen,
    selectedAvatar, setSelectedAvatar } = useContext(ShoppingCartContext);

  const [isMyAccountModalOpen, setIsMyAccountModalOpen] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [isSuccesMessage, setisSuccessMessage] = useState(false);

  const [isUsernameDisabled, setIsUsernameDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);

  const [username, setUsername] = useState(currentUser.name);
  const [password, setPassword] = useState(currentUser.password);
  const [email, setEmail] = useState(currentUser.email);

  const [isUpdatingAvailable, setIsUpdatingAvailable] = useState(false)

  // Manipulando los cambios

  const handleMAUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMAPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMAEmailChange = (e) => {
    setEmail(e.target.value);
  };

  ////////////// ver
  console.log('El valor de selectedAvatar es: ',selectedAvatar)



  function handlePasswordChange()
  {
    let passw = document.getElementById('MyAccountModal--content__password').value;
    if (passw === currentUser.password)
    {
      //let oldUser = currentUser.name;
      setIsWrongPassword(false);
      setIsMyAccountModalOpen(false);

      // habilitando campos
      setIsUsernameDisabled(false);
      setIsPasswordDisabled(false);
      setIsEmailDisabled(false);

      setIsUpdatingAvailable(true);


    }
    else
    {
      setIsWrongPassword(!isWrongPassword);
      console.log('Sos o te hacés?');
    }
  }

  function UpdateUser()
  {
      //let newList = [];

      let newUser = document.getElementById('MyAccountUsername').value;
      let newPassword = document.getElementById('MyAccountPassword').value;
      let newEmail = document.getElementById('MyAccountEmail').value;
      let newAvatar = selectedAvatar;
      let updatedUser = {
        avatar: newAvatar,
        id: currentUser.id, 
        name: newUser, 
        password: newPassword,
        email: newEmail, 
        orders: currentUser.orders}

      const copiaLista = userList.map(user => {
        if (user.id === currentUser.id) {
          return updatedUser;
        }
        return user;
      });

      setUserList(copiaLista)
      


      setisSuccessMessage(true);

      document.getElementById('navbar-avatar').src = "../../../public/avatars/" + selectedAvatar;

      console.log('Datos del usuario actualizados con éxito!')
  }

  // Actualizando localStorage

  useEffect(() => {
    localStorage.setItem('Acceso', JSON.stringify(userList));
  }, [userList]);










  return (
    <div className='text-black flex flex-col justify-center items-center relative'>



      {/*  >>>>>>>>>>>> Privilegios de Admin 😌 */}
      {currentUser.name === 'Sherlock' &&
      <div className='absolute top-5 right-5'>
        <p className='text-lg font-bold'>
          Admin
          <Link to="/admin">
            <span className='ml-1'>🕵️‍♂️</span>
          </Link>
        </p>
      </div>
      }
      
      
      <h2 className='text-2xl mt-4 font-bold'>My Account</h2>
      <form
        className='min-w-dd max-w-sm mt-4 p-4 bg-gray-500 
        border border-solid border-black w-1/3 flex flex-col items-center'>
        <label htmlFor="" className=''>Username</label>
        <input 
          type="text" 
          className='rounded h-8 pl-2 disabled:text-red-500' 
          id="MyAccountUsername" 
          placeholder={currentUser.name}
          value={username}
          disabled={isUsernameDisabled}
          onChange={handleMAUsernameChange}
          />

        <label htmlFor="" className='mt-4'>Password</label>
        <input 
          type="password"  
          className='rounded h-8 pl-2 disabled:text-red-500' 
          id="MyAccountPassword"  
          placeholder={currentUser.password}
          value={password}
          disabled={isPasswordDisabled}
          onChange={handleMAPasswordChange}
          />
        
        <label htmlFor="" className='mt-4'>E-mail</label>
        <input 
          type="email"  
          className='rounded h-8 pl-2 disabled:text-red-500' 
          id="MyAccountEmail"  
          placeholder={currentUser.email}
          value={email}
          disabled={isEmailDisabled}
          onChange={handleMAEmailChange}
          />



        <p>Orders: <b>{currentUser.orders.length}</b></p>
        <p>Money Spent: <b>${`${currentUser.orders.reduce((sum,order) => sum + order.total,0)}`}</b></p>


        <div className='flex flex-col justify-center items-center'>
          <img 
            className='w-20 h-20 my-1 '
            src={`${imageBaseUrl}/avatars/${selectedAvatar.length>3 ? selectedAvatar : currentUser.avatar}`} 
            alt="avatar" 
            id="myaccountavatar"
          />
          { isUpdatingAvailable &&
            <button 
            type="button"
            onClick={() => setIsAvatarsModalOpen(true)}
            className='mt-4 border w-52 h-12 rounded hover:bg-black hover:text-white  
                          transition-colors duration-300'
            >Change Your Avatar
          </button>
        }
        </div>











        {/* <label htmlFor="" className='mt-4'>Orders</label>
        <input 
          type="text"  
          className='rounded h-8 pl-2 disabled:text-red-500' 
          id="MyAccountOrdersLength"  
          value={currentUser.orders.length}
          disabled/>

        <label htmlFor="" className='mt-4'>Money Spent</label>
        <input 
          type="text"  
          className='rounded h-8 pl-2 disabled:text-red-500' 
          id="MyAccountOrdersTotal"  
          value={`$${currentUser.orders.reduce((sum,order) => sum + order.total,0)}`}
          disabled/> */}


        {
          isUpdatingAvailable 
          ?
          <button 
            type="button"
            className='mt-6 border-none rounded-lg px-4 py-2 font-bold bg-white hover:bg-black hover:text-white'
            onClick={() => UpdateUser()}
              >Update values 🆕
          </button>
          :
          <button 
            type="button"
            className='mt-6 border-none rounded-lg px-4 py-2 font-bold bg-white hover:bg-black hover:text-white'
            onClick={() => setIsMyAccountModalOpen(true)}
              >Edit 📝
          </button>


        }

      </form>

      {isAvatarsModalOpen &&
      <AvatarModal />
      }



      {isSuccesMessage &&
      <p className='text-md text-green-700 font-bold text-center'>Datos actualizados con éxito!</p>
      }



        {/*  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MODAAAAAAAAAAL */}

      <div className={`MyAccountModal absolute top-0 left-0 w-full h-full bg-black/60 ${isMyAccountModalOpen ? "" : "hidden"}`}>
        <div className='MyAccountModal--content relative'>
            <span 
              className='absolute top-2 right-2 hover:bg-black hover:rounded-xl hover:text-white'
              onClick={() => setIsMyAccountModalOpen(false)}
                >
              
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
            <h2 className='mb-4 text-lg'>To proceed, please enter your password</h2>
            <input 
              type="password"
              id="MyAccountModal--content__password"
              className='mb-4 py-1 pl-2' /> 
            <button 
              type="button"
              className='my-2 border-none rounded-lg px-4 py-2 font-bold bg-white hover:bg-black hover:text-white'
              onClick={() => handlePasswordChange()}
                >Send
            </button>
            <p 
              className={`text-red-600 mb-1 ${isWrongPassword ? "": "hidden"}`}
              id="MyAccountModal--content_errormsg"
                >Wrong password
            </p>
        </div>
      </div>
    </div>
  )
}
