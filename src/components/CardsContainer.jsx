import React, { useContext, useState, useEffect } from 'react'
import { Card } from './Card'
import { ShoppingCartContext } from '../context/Context'
import "./CardsContainer.css"
import { WaitAndSearch } from './WaitAndSearch'

export const CardsContainer = ({items,setItems}) => {

  // const {searchedProducts, 
  //   setSearchedProducts } = useContext(ShoppingCartContext)

  const {inicio, setInicio, searchByTitle} = useContext(ShoppingCartContext)
  

  return (
    <div className='flex justify-center '> 
        

        <div className={`${items.length>0 ? 'w-5/6 flex flex-wrap gap-2' : ''} justify-evenly relative top-8 `}>
          {/* {items.length>0 ?
            items?.slice(inicio,inicio+24).map((item) => (
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
            <WaitAndSearch />
          } */}


          {(searchByTitle==='' && items.length>0) ?
            items?.slice(inicio,inicio+24).map((item) => (
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
            (searchByTitle!=='' && items.length>0) ?
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

            <WaitAndSearch />

            }

          



        </div>
    </div>
  )
}
