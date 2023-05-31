import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from "../context/Context"

export const OrderCard = ({id,title,category,images,price, removeProduct,unidades}) => {

  const [units, setUnits] = useState(1);

  let { cartProducts, setCartProducts } = useContext(ShoppingCartContext);

  let unitsOption;
  let removeOption;

  const [totalPerUnits, setTotalPerUnits] = useState(price)

  // let index = cartProducts.length
  // let producto_unidades = {index:1}
  // setUnits(producto_unidades.index)
  

  //console.log('Estoy aca!')

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
      console.log(producto)
      producto.unidades = units;
      setTotalPerUnits(price*producto.unidades)
    }
    
  }

  function sumarUnidades(id){
    setUnits(units+1);
    let producto = cartProducts.find(product => product.id===id)
    console.log(producto)

    producto.unidades = units;
    setTotalPerUnits(price*producto.unidades)

  }


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
          <p className='text-left my-1'>Total: <b>${totalPerUnits}</b></p>
        </div>
            
        {removeOption}
    </div>
  )
}
