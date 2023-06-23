import React, { useContext } from 'react'
//import "./Search.css"
import { ShoppingCartContext } from '../context/Context'

export const Search = () => {

    const {searchByTitle, setSearchByTitle,searchByCategory,
    items,setItems,
    matchedResults, setMatchedResults,
    inicio, setInicio} = useContext(ShoppingCartContext)

    const searchingResults = (event) => {
        
        setSearchByTitle(event.target.value)
        let matched = items.filter(x=> x.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setMatchedResults(matched)
    }

    function handleCardsDecrease()
    {
      if (inicio>0)
      {
        setInicio(inicio-24);
      }
      else
      {
        console.log('Can\'t go lower, bud 😕');
        alert('Can\'t go lower, bud 😕');
      }
    }

    function handleCardsIncrease()
    {
      if (inicio < items.length-24)
      {
        setInicio(inicio+24);
      }
      else
      {
        console.log('Can\'t fly higher, bud 😅');
        alert('Can\'t fly higher, bud 😅');
      }
    }


  return (
    <div className='text-black mt-16'>
        <div className='flex justify-center'>
          <input 
              className='pl-4 border border-solid border-black rounded-lg h-8'
              type="text" 
              placeholder="Search product..." 
              onChange={searchingResults}
          />

          <button 
            className='ml-4 border border-solid rounded-md 
            w-28 h-8 border-none bg-slate-800 text-white/80 hover:bg-slate-900 hover:text-white
            disabled:opacity-50 disabled:pointer-events-none'
            onClick={() => handleCardsDecrease()}
            disabled={searchByTitle!=='' || window.location.pathname.length>4}>Previous Page
            
          </button>
          <button 
            className='ml-4 border border-solid rounded-md 
            w-28 h-8 border-none bg-slate-800 text-white/80 hover:bg-slate-900 hover:text-white
            disabled:opacity-50 disabled:pointer-events-none'
            onClick={() => handleCardsIncrease()}
            disabled={searchByTitle!=='' || window.location.pathname.length>4}>Next Page
            
          </button>
          <button 
            className='ml-4 border border-solid rounded-md 
            w-12 h-8 border-none bg-slate-800 text-white/80 hover:bg-slate-900 hover:text-white
            disabled:opacity-50 disabled:pointer-events-none'
            onClick={() => setInicio(0)}
            disabled={searchByTitle!=='' || window.location.pathname.length>4}>♻️
          </button>
        </div>
    </div>
  )
}
