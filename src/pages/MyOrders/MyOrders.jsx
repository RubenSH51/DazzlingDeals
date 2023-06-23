import React, { useContext } from 'react'
import { OrdersCard } from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context/Context'
import { totalPrice } from '../../utils/totalPrice'
import { Link } from 'react-router-dom'
import { SelectedOrder } from '../../components/SelectedOrder'


export const MyOrders = () => {

  const {order} = useContext(ShoppingCartContext);

  return (
    <div className='text-black  w-full flex flex-col items-center'>
      <div className="orders-header flex text-lg relative justify-center w-full">
        <h2 className="font-bold my-4 text-2xl">My Orders</h2>

        <p className='absolute top-5 right-5 text-xl'>Back to
          <Link to="/">
            <span className='ml-2'>🏠</span>
          </Link>
        </p>


      </div>
      <div className={`orders-container w-5/6 flex mt-4 ${order.length==1 ? 'justify-center' : 'flex-wrap'}`}>
        {order.map((orden) => (
            <div className={`orderDiv ${order.length%3==0 ? 'w-1/3' : 'w-1/2'}`}>
              <Link  to={`/myselectedorder/${orden.id}`}>
                <OrdersCard 
                  key={orden.id}
                  id={orden.id}
                  date={orden.date}
                  time={orden.time}
                  totalPrice={orden.total}
                  totalProducts={orden.length}
                /> 
              </Link>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
