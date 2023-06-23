import React from 'react'
import { useContext } from 'react';
import { ShoppingCartContext } from "../context/Context"

export const LastOrder = ({id,title,category,images,price}) => {

  let { order } = useContext(ShoppingCartContext);
  let productoDeLaCard = order[order.length-1].products.find(product => product.id === id);

  return (
    <div key={id} className="relative  p-2 border border-black border-solid rounded-lg">
        <div >
            <h2 className='font-bold'>{title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div>
                <p className="text-left">Category: <b><i>{category.name}</i></b></p>
                <p className='text-left'>Unit price: <b>${price}</b></p>
                <p className='text-left'>Units: <b>{productoDeLaCard.unidadesTest}</b></p> 
            </div>
            <div>
                <img
                className='w-20 h-20 rounded-lg object-cover' 
                src={images[0]}
            />
            </div>
            
        </div>
        <div className='flex justify-between'>
          <p className='text-left my-1'>Total: <b>${price*productoDeLaCard.unidadesTest}</b></p>
        </div>
    </div>
  )
}
