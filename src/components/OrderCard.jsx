import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from "../context/Context"

export const OrderCard = ({id,title,category,images,price, removeProduct,handleQuantityChange,unidades}) => {

  const [units, setUnits] = useState(0);

  let { cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext);

  let unitsOption;
  let removeOption;

  
  let path = window.location.pathname

  useEffect(() => {
    //
    if(path==='/')
    {
      sumarUnidades(id)
    }
  },[])


  if (removeProduct)
  {
    unitsOption = <div className='flex items-center justify-between'>
                          <p>Units:</p>
                          <div className='flex items-center'>

                              <button onClick={() => restarUnidades(id)} className='px-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>

                              </button>
                                  {units}
                              <button onClick={() => sumarUnidades(id)} className='px-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>

                              </button>
                          </div>
                      </div>
    
    removeOption = <span 
                        onClick={() => removeProduct(id)}
                        className="hover:bg-red-700 hover:text-white hover:rounded-full cursor-pointer absolute top-1 right-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
  }

  function restarUnidades(id){
    if (units>1){
      setUnits(units-1);
      let producto = cartProducts.find(product => product.id===id)

      producto.unidadesTest = units -1;
      producto.total = producto.unidadesTest*price
      handleQuantityChange(id, producto.unidadesTest)
    }
    
  }

  function sumarUnidades(id){
    setUnits(units+1);
    let producto = cartProducts.find(product => product.id===id)
 
    producto.unidadesTest = units+1;
    producto.total = producto.unidadesTest*price
    handleQuantityChange(id, producto.unidadesTest)
  }


  return (
    <div key={id} className="relative p-2 border border-black border-solid rounded-lg">
        <div >
          <h2 className='font-bold'>{title}</h2>
        </div>
        <div className='flex justify-between items-center'>
            <div>
              <p className="text-left"><i>{category.name}</i></p>
              <p className='text-left'>Price unit: <b>${price}</b></p>
            </div>
            <div>
                <img
                className='w-20 h-20 rounded-lg object-cover' 
                src={images[0]}
            />
            </div>
            
        </div>
        <div className='flex justify-between'>
          {unitsOption}
          <p>Total: $<b>{price*units}</b></p>
        </div>
            
        {removeOption}
    </div>
  )
}
