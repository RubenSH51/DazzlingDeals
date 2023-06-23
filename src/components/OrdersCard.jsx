import React, { useContext } from 'react'

export const OrdersCard = ({id,date,time,totalPrice, totalProducts}) => {

  
  return (
    <div className="flex justify-center items-center mb-3 w-full p-1">
      <div className={` flex w-11/12 text-left items-center flex-col border border-solid border-black rounded-lg p-8 bg-gray-300`}>
        <h2 className='font-bold text-xl'>Order #{id}</h2>
        <table>
          <tr className="leading-8">
            <td className=' '><span className='bg-gray-800 p-1 rounded-lg mr-2'>🗓️</span></td>
            <td>--  Date: <b>{date}</b></td>
          </tr>
          <tr className="leading-8">
            <td className=' '><span className='bg-gray-800 p-1 rounded-lg'>🕦</span></td>
            <td>-- Time: <b>{time}</b></td>
          </tr>
          <tr className="leading-8">
            <td className=' '><span className='bg-gray-800 p-1 rounded-lg'>🛍️</span></td>
            <td>-- Products: <b>{totalProducts}</b></td>
          </tr>
          <tr className="leading-8">
            <td className=''><span className='bg-gray-800 p-1 rounded-lg'>💰</span></td>
            <td>-- Total Price: <b>${totalPrice}</b></td>
          </tr>
        </table>
      </div>

    </div>
  )
}
