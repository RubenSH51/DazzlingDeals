import React, { useContext, useEffect, useState } from 'react'
import { CardsContainer } from '../../components/CardsContainer'
import { ProductDetail } from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context/Context';
import { Search } from '../../components/Search';


export const Home = () => {
  
  const {items, setItems, 
    searchByTitle, setSearchByTitle,
    matchedResults, setMatchedResults ,setSearchByCategory} = useContext(ShoppingCartContext) 


     useEffect(() => {
      // Con este useEffect evito que se recargue la pagina con las opciones del navbar y sus onclicks
      () => {
        setSearchByCategory(window.location.pathname.replace('/',''))
      }
     })
    

    const filteredItems = () => {
      let category;
      let itemsToRender;
      let currentPath = window.location.pathname.replace('/','')
      if (currentPath !== '')
      {
        category = currentPath;
        console.log('La categoria es: ',category)
  
        if(searchByTitle !== '')
        {
  
          if(category!=='all')
          {
            itemsToRender = matchedResults.filter(item => item.category.name.toLowerCase() === category.toLowerCase());
          }
          else
          {
            itemsToRender = matchedResults;
          }
  
        }
        else
        {
          if(category!=='all')
          {
            itemsToRender = items?.filter(item => item.category.name.toLowerCase() === category.toLowerCase());
          }
          else
          {
            itemsToRender = items;
          }
          
        }
  
      }
      else
      {

        // if(category!=='all' || category!=='')
        //   {
        //     itemsToRender = items
        //   }
        // else
        //   {
        //     itemsToRender = items;
        //   }


        if(searchByTitle !== '')
        {
          itemsToRender = matchedResults;
        }
        else
        {
          itemsToRender = items;
        }



      }

      return itemsToRender;


      
    }

  return (
    <div className='relative'>
      <ProductDetail />
      <Search />
      <CardsContainer 
        items={filteredItems()}
        setItems={setItems}
      />
      
    </div>
  )
}
