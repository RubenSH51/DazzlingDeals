import React, { useContext, useState,useEffect } from 'react'
import { ShoppingCartContext } from '../context/Context'
import "./UsersTable.css"

export const UsersTable = () => {
    const {userList, setUserList} = useContext(ShoppingCartContext);
    const [isModalDeleteUser, setIsModalDeleteUser] = useState(false);
    const [userReadyToDissapear, setUserReadyToDissapear] = useState('');

    const [isModalUserOrders, setIsModalUserOrders] = useState(false);
    const [chosenUser, setChosenUser] = useState('')


    function OpenModalUserOrders(id)
    {
      let user = userList.filter(user => user.id === id)[0];
      setChosenUser(user);
      setIsModalUserOrders(true);

      
      console.log('Los datos del usuario: ',user);
    }

    function CloseModalUserOrders(id)
    {
      setIsModalUserOrders(false);
    }


    function OpenModalDeleteUser(id)
    {
      setIsModalDeleteUser(true);
      setUserReadyToDissapear(id);
    }

    function CloseModalDeleteUser()
    {
      setIsModalDeleteUser(false);
    }

    function handleDeleteUser()
    {

      let newUserList = userList.filter(user => user.id !== userReadyToDissapear);

      console.log('New User List: ');
      for (let i = 0; i < newUserList.length; i++) 
      {
        console.log(newUserList[i].name)
        
      }

      // Actualizando userList
      setUserList(newUserList);

      setIsModalDeleteUser(false);
    }

      // Actualizando localStorage

  useEffect(() => {
    localStorage.setItem('Acceso', JSON.stringify(userList));
  }, [userList]);

  return (
    <>
    <table className='w-full mt-4 '>
      <thead>
        <tr>
          <th className='bg-black text-white py-1'>ID</th>
          <th className='bg-black text-white py-1'>Name</th>
          <th className='bg-black text-white py-1'>Password</th>
          <th className='bg-black text-white py-1'>Email</th>
          <th className='bg-black text-white py-1'>Avatar</th>
          <th className='bg-black text-white py-1'>Orders</th>
          <th className='bg-black text-white py-1'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {userList.map(user => (
          <tr key={user.id} >
            <td className='pt-2'>{user.id}</td>
            <td className='pt-2'>{user.name}</td>
            <td className='pt-2'>{user.password}</td>
            <td className='pt-2'>{user.email}</td>
            <td className='pt-2 flex justify-center'>
              <img 
                  className="w-8 h-8 hover:absolute 
                  transition-transform duration-300 transform hover:scale-150" 
                  src={`/public/avatars/${user.avatar}`} alt="" />
            </td>

            <td className='pt-2'>
                <button 
                        onClick={() => OpenModalUserOrders(user.id)}
                        className='mt-1 border border-gray-700 text-gray-700 w-28 h-12 
                        rounded hover:bg-gray-700 hover:text-white  
                        transition-colors duration-300'
                    >Orders
                </button>
            </td>
            <td className='pt-2'>
                <button 
                        onClick={() => OpenModalDeleteUser(user.id)}
                        className='mt-1 border border-red-800 text-red-800 w-28 h-12 
                        rounded hover:bg-red-800 hover:text-white  
                        transition-colors duration-300'
                    >Delete User
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>


      {/*  >>>>>>>>>>>>>>>>>>>>>>>>>>>>> MODAAAAAAAL! */}
    {isModalDeleteUser &&
      <div className='ModalDeleteUser'>
          <div className='ModalDeleteUser--content '>
              <h2 className='text-2xl font-bold mb-4 mt-4'>Are you sure?</h2>
              <div className='flex gap-2 justify-center '>
                  <button
                      type="button"
                      onClick={() => CloseModalDeleteUser()}
                      className='mt-1 border border-green-800 text-green-800 w-28 h-12 
                      rounded hover:bg-green-800 hover:text-white  
                      transition-colors duration-300'
                          >No
                  </button>
                  <button
                      type="button"
                      onClick={() => handleDeleteUser()}
                      className='mt-1 border border-red-800 text-red-800 w-28 h-12 
                      rounded hover:bg-red-800 hover:text-white  
                      transition-colors duration-300'
                          >Yes
                  </button>
              </div>
          </div>
      </div>
    }

    {isModalUserOrders &&
        <div className='ModalUserOrders '>
            <div className='ModalUserOrders--content overflow-y-auto'>
                <span 
                    onClick={() => CloseModalUserOrders()}
                    className="text-black cursor-pointer absolute top-1 right-1 hover:bg-black rounded-xl hover:text-white transition-colors duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                </span>
                <h2 className='text-2xl font-bold mb-4 mt-4'>{chosenUser.name} Orders</h2>
                <div className='flex flex-wrap gap-2 justify-center items-center '>
                    {chosenUser.orders.map(order => (


                    <div key={order.id} className=' border-black border p-1 flex relative rounded-md hover:bg-blue-200'>
                      <div className='p-1'>
                        <p className='text-lg mb-1'>Order: <b>{order.id}</b></p>
                        <p className='text-lg mb-1'>Date: <b>{order.date}</b></p>
                        <p className='text-lg mb-1'>Time: <b>{order.time}</b></p>
                        <p className='text-lg mb-1'>Products: <b>{order.length}</b></p>
                        <p className='text-lg mb-1'>Total: <b>${order.total}</b></p>
                      </div>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    }






  </>
  );
}
