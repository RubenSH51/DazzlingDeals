import React, { useContext } from 'react'

export const OrdersCard = ({id,date,time,totalPrice, totalProducts}) => {

  
  return (
    <div className="flex justify-center items-center mb-3 w-full p-1">
      <div className='flex flex-col w-full border border-solid border-black rounded-lg p-4 bg-gray-300 '>
        <p>Order <b>#{id}</b></p>
        <span>{date} - {time}</span>
        <span>Products: {totalProducts}</span>
        <span>Total Price: <b>${totalPrice}</b></span> 
      </div>

    </div>
  )
}
