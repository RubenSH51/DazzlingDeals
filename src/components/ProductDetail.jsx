import React from 'react'
import "./ProductDetail.css"
import { useContext } from 'react';
import { ShoppingCartContext } from "../context/Context"

export const ProductDetail = () => {

  let { count, setCount, OpenAside, CloseAside, isAsideOpen, productToShow, setProductToShow } = useContext(ShoppingCartContext);

  let {title, description, price, category, images} = productToShow;

  return (

    <aside className={`${isAsideOpen ? 'flex' : 'hidden'}  product-detail flex-col fixed bg-white bottom-0 right-0 border border-black rounded-lg`}>
        <div className='flex justify-between items-center p-4 bg-gray-900 '>
            <h2 className='font-medium text-xl text-black text-white'>Product Detail</h2>
            <span 
                onClick={() => CloseAside()}
                className="text-white cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        </div>
        {isAsideOpen ? 
        <div className='text-black px-4 pb-4'>
          <h2 className="text-lg font-bold mb-4">{title}</h2>
          <img className='rounded-lg border border-solid border-black' src={images[0]} alt="" />
          <h3 className="text-md my-2">{description}</h3>
          <div className='flex justify-between'>
            <p className="font-bold ">{category.name}</p>
            <p className="font-bold">${price}</p>
            
          </div>
          

        </div>
        :
        <div>

        </div>
      
      }
    </aside>
  )
}
     