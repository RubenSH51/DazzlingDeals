import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../context/Context"
// import { CardsContainer } from '../../components/CardsContainer'
import { OrderCard } from '../../components/OrderCard'
import { Link } from 'react-router-dom'

export const Testing = () => {




    const {order, setOrder} = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1);
    //if (index === 'last') index = order?.length - 1;

    let testing = order.filter(product => product.id === index);
    console.log('El resultado de la variable testing es:')
    console.log(testing)


    console.log('Mi order es: ',order)
    console.log('Mi index es: ',index)
    console.log('\n>>>>>>>>>>>>>>>>>>>>>\n')


  return (
    <div className='flex justify-center flex-col text-black items-center'>
      <h2 className='text-2xl my-4'>TESTING</h2>
      <Link to="/myorders">
        <span>🔙</span>
      </Link>
        <div className='text-black w-1/2 my-2 p-4 flex flex-col gap-2 overflow-auto h-3/4 
              border border-dotted border-black border-1 rounded-lg'>
            {
            //order?.filter(product => product.id == index)[0].products.map(product => (
              order?.filter(product => product.id == index)[0].products.map(product => (

                //>>>>>>>>>>>>>>>>>>>>>>> OrderCard
                <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    description={product.description}
                    price={product.price}
                    images={product.images}
                />

            ))
        
            }
        </div>
    </div>
  )
}
