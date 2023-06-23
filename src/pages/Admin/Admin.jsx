import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../context/Context'
import { UsersTable } from '../../components/UsersTable';


export const Admin = () => {

    const {currentUser, userList} = useContext(ShoppingCartContext);

    console.log('\nBienvenido Sherlock! Actualmente hay '+userList.length+' usuarios en el sistema.');


  return (
    <div className='text-black flex flex-col items-center justify-center'>
        <h2 
            className='text-2xl mt-8 font-bold '
                >{currentUser.name==='Sherlock' ? "Welcome Sherlock!" : "Admin"}
        </h2>

        {currentUser.name==='Sherlock' 
        ?
            <div className='w-11/12 bg-gray-300 p-4 m-0-auto'>
                <UsersTable />
            </div>
        :
            <div className='h-52'>
                <p className='text-xl text-black text-center'>You have no access to this page</p>
            </div>
        }   
    </div>
  )
}
