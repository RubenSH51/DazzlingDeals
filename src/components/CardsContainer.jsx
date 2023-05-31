import React, { useContext } from 'react'
import { Card } from './Card'
import { ShoppingCartContext } from '../context/Context'

export const CardsContainer = ({items,setItems}) => {

  // const {searchedProducts, 
  //   setSearchedProducts } = useContext(ShoppingCartContext)

  
  


  return (
    <div className='flex justify-center'>
        <div className={`${items.length>0 ? 'w-4/6 flex flex-wrap gap-2' : ''}  relative top-14`}>
          {items.length>0 ?
            items?.map((item) => (
              <Card 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                images={item.images}
                category={item.category}

              />
            ))
            :
            <h2 className='text-black font-bold'> 
              No se encontraron resultados 😢
            </h2>


          }
        </div>
    </div>
  )
}
