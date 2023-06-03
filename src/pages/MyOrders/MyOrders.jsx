import React, { useContext } from 'react'
import { OrdersCard } from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context/Context'
import { totalPrice } from '../../utils/totalPrice'
import { Link } from 'react-router-dom'
import { SelectedOrder } from '../../components/SelectedOrder'

export const MyOrders = () => {

  const {order} = useContext(ShoppingCartContext);

  return (
    <div className='text-black my-12 w-full flex flex-col items-center'>
      <div className="orders-header flex text-lg relative justify-center w-full">
        <h2 className="">My Orders</h2>
        <Link to='/'>
          <span className="absolute top-1 right-5 ">Back to 🏠</span>
        </Link>
      </div>
      <div className={`orders-container w-5/6 flex mt-4 ${order.length==1 ? 'justify-center' : 'flex-wrap'}`}>
        {order.map((orden) => (
            // <div className="orderDiv w-1/3">
            <div className={`orderDiv ${order.length%3==0 ? 'w-1/3' : 'w-1/2'}`}>
              <Link key={orden.id} to={`/myselectedorder/${orden.id}`}>
                <OrdersCard 
              // <Link key={orden.id} to={`/myselectedorder/${orden.id}`}>
              //   <SelectedOrder 
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
