import React, { useEffect } from 'react'

export const SelectedOrder = ({id, title, category, price, images, total, unidades}) => {

  return (
    <div key={id} className="relative  p-2 border border-black border-solid rounded-lg">
        <div >
          <h2 className='font-bold'>{title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div>
              <p className="text-left"><i>{category.name}</i></p>
              <p className='text-left'>Price unit: <b>${price}</b></p>
              <p className='text-left'>Units: {unidades}</p> 
              <p className='text-left my-1'>Total: <b>${total}</b></p>
            </div>
            <div>
                <img
                className='w-20 h-20 rounded-lg object-cover' 
                src={images[0]}
            />
            </div>
        </div>
    </div>
  )
}

// Este componente funciona de puta madre. No tocar más!