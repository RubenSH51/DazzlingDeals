import React, { useContext } from 'react'
import "./Search.css"
import { ShoppingCartContext } from '../context/Context'

export const Search = () => {

    const {searchByTitle, setSearchByTitle,
    items,setItems,
    matchedResults, setMatchedResults} = useContext(ShoppingCartContext)

    const searchingResults = (event) => {
        
        setSearchByTitle(event.target.value)
        let matched = items.filter(x=> x.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        setMatchedResults(matched)
    }

  return (
    <div className='search text-black '>
        <input 
            className='pl-4 border border-solid border-black rounded-lg h-8'
            type="text" 
            placeholder="Search product..." 
            onChange={searchingResults}

        />
    </div>
  )
}
