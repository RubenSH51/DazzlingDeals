    import React, { useState } from 'react'
    import "./CheckoutSideMenu.css"
    import { useContext } from 'react';
    import { ShoppingCartContext } from "../context/Context"
    import { OrderCard } from './OrderCard';
    //import { totalPrice2 } from "../utils/totalPrice"
    import { getDate } from '../utils/getDate.js';
    import { useEffect } from 'react';

    import { Link } from 'react-router-dom';

    export const CheckoutSideMenu = () => {


        let { count, setCount, OpenCheckoutSideMenu, 
            CloseCheckoutSideMenu, isCheckoutsideMenuOpen, 
            productToShow, setProductToShow, 
            cartProducts, setCartProducts,
            order, setOrder,
            searchByTitle, setSearchByTitle} = useContext(ShoppingCartContext);

        let {title, description, price, category, images} = productToShow;

        const [totalAcumulado, setTotalAcumulado] = useState(0)

 
        function handleCheckout()
        {
            const [date,time] = getDate();
            const orderToAdd = {
                id: Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
                date: date,
                time: time,
                products: cartProducts,
                length: cartProducts.length,
                total: totalAcumulado
            };
            CloseCheckoutSideMenu();
            setOrder([...order,orderToAdd]);
            setCartProducts([]);

            setSearchByTitle('');
            

        }
        

        function removeProduct(id){
            let newProductList = cartProducts.filter(product => product.id!== id)
            setCartProducts(newProductList);
        
        }
    
        useEffect(() => {
            let total = 0;
            cartProducts.forEach((card) => {
            total += card.total;
            });
            setTotalAcumulado(total)
            //console.log('El total es: ',totalAcumulado)
        },[cartProducts])


        
        function handleQuantityChange(id, cantidad) {
            // Actualizar las cantidades de unidades en el componente padre
            // usando la función de actualización del estado correspondiente
            const updatedCartProducts = cartProducts.map((product) => {
                if (product.id === id) {
                  return { ...product, unidadesTest: cantidad };
                }
                return product;
              });
              setCartProducts(updatedCartProducts);
          }

    return (

        <aside className={`${isCheckoutsideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white bottom-0 right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-4 bg-gray-900 '>
                <h2 className='font-medium text-xl text-black text-white'>My Current Order</h2>
                <span 
                    onClick={() => CloseCheckoutSideMenu()}
                    className="text-white cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div>
            <div className='my-2 p-4 flex flex-col gap-2 overflow-auto h-3/4 
            border border-dotted border-black border-1 rounded-lg'>
                {cartProducts.length > 0 
                ?
                cartProducts.map((product) => (

                    //>>>>>>>>>>>>>>>>>>>>>>> OrderCard
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        category={product.category}
                        description={product.description}
                        price={product.price}
                        images={product.images}
                        removeProduct={removeProduct}
                        handleQuantityChange={handleQuantityChange}
                    />

                    //<<<<<<<<<<<<<<<<<<<<<<< OrderCard

                ))
                :
                ""
                }
            </div>
            <div className='total fixed bottom-0 p-4 checkout-side-menu-total '>
                <div className='flex justify-around'>
                    <span className=''>Total: </span>
                    <span className='font-bold'>${totalAcumulado}</span>
                </div>
                <Link to="/myorders/last">
                    <button 
                        type='button'
                        className='w-full bg-blue-500 text-white h-10 mt-1'
                        onClick={() => handleCheckout()}
                            >Checkout
                    </button>
                </Link>
            </div>

        </aside>
    )
    }
        