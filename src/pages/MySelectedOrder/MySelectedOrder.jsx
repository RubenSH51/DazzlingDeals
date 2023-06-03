import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from "../../context/Context"
import { Link } from 'react-router-dom'
import { SelectedOrder } from "../../components/SelectedOrder"

export const MySelectedOrder = () => {

  const {order, setOrder} = useContext(ShoppingCartContext);

   const currentPath = window.location.pathname;
   let index = currentPath.substring(currentPath.lastIndexOf('/')+1);


  return (
    <div className='flex justify-center flex-col text-black items-center'>
      <div className='flex relative w-full justify-center'>
        <h2 className='text-2xl my-4'>My Selected Order</h2>
        <p className='absolute top-5 right-5'>Go to orders
          <Link to="/myorders">
            <span className='ml-2'>🔙</span>
          </Link>
        </p>
      </div>
      <div className='text-black w-1/2 my-2 p-4 flex flex-col gap-2 overflow-auto h-3/4 
            border border-dotted border-black border-1 rounded-lg'>
          {

          order?.filter(x => x.id ===index)[0].products.map((product) => (
              //>>>>>>>>>>>>>>>>>>>>>>> 
              <SelectedOrder 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                  images={product.images}

                  total={product.total}
                  unidades={product.unidadesTest}
              />

          ))
          }
      </div>
    </div>
  )
}

// Este componente funciona de puta madre. No tocar más!