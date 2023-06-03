import React, { useState, useContext } from 'react'
import { ShoppingCartContext } from "../context/Context"
import "./Card.css"


export const Card = ({id, title, description,price,images,category}) => {

    //const [active, setActive] = useState(false);
    let { count, setCount, OpenAside, 
        CloseAside, productToShow, setProductToShow, 
        cartProducts, setCartProducts,
        OpenCheckoutSideMenu} = useContext(ShoppingCartContext);
    
    //  console.log(cartProducts)

    let unidadesTest = 0;

    let {userLogged, setUserLogged} = useContext(ShoppingCartContext)

    // let userLoggedIn = localStorage.getItem('Acceso');

    // console.log("userLoggedIn: ",userLoggedIn)

    function carrito2(event,data)
    {
        if(userLogged){
            event.stopPropagation() 
            OpenCheckoutSideMenu()

            setCount(count+1);

            /* TEST: AGREGAR UNIDADES A LOS OBJETOS DEL ARRAY */
            // let addingUnits = cartProducts.map(product => {
            //     return { ...product, unidades: 1 };
            // })

            let newProductList = [...cartProducts, data];
            //let newProductList = [...addingUnits, data];
            /* TEST: AGREGAR UNIDADES A LOS OBJETOS DEL ARRAY */


            setCartProducts(newProductList)}

    }

    function showProduct(data)
    {
        OpenAside()
        setProductToShow(data)
    }

    const renderButton = (id) => {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;
        
        return (
            <>
                {
                isInCart 
                ?
                <button
                    type='button' 

                    className={`absolute check-icon3 bg-green-600 text-white top-1 right-1 flex justify-center align-center w-6 h-6 rounded-full text-md`  }> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                :
                <button
                    type='button' 
                    onClick={(event) => carrito2(event,{id,title, description, price, images, category, unidadesTest})}
                    className={`absolute bg-white top-1 right-1 flex justify-center align-center w-6 h-6 rounded-full text-black text-md`  }> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                }
            </>
        )
    }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div 
        className='bg-white cursor-pointer w-44 h-48 rounded-lg border-2 border-solid border-black'
        onClick={() => showProduct({title, description,price,images,category})}
        >
        <figure className='relative mb-2 w-full h-4/5 '>
            <img 
                src={images.length>0 ? images[0] : ""}
                alt={description} 
                className='w-full h-full object-cover rounded-lg'/>
            <span className='absolute text-black bottom-1 left-2 border-2 border-solid border-black p-2 rounded bg-white/60'>{category.name}</span>
            {renderButton(id)}

        </figure>
        <p className='w-full h-1/5 flex justify-around items-center'>
            <span className='text-black text-xs '>{title}</span>
            <span className='text-black'>${price}</span>
        </p>
    </div>
  )
}
