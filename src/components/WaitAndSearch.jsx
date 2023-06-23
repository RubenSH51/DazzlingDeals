import React, { useState, useEffect } from 'react';
import "./WaitAndSearch.css"

export const WaitAndSearch = () => {
    const [loading, setLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
        setNoResults(true);
      }, 2500);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);
  
    return (
      <div>
        {loading ? 
        (
        <div>
            <section className="loader">
                <div></div>
                <div></div>
                <div></div>
            </section>
            <h2 className='text-black font-bold'> 
                Cargando productos ⌛...
            </h2> 
        </div>

        ) : 
        
        noResults ? (
          <p className='text-black font-bold mb-64'>No hay resultados 😥</p>
        ) : (
          <p className='text-black'>Resultados encontrados</p>
        )}
      </div>
    );
  }
