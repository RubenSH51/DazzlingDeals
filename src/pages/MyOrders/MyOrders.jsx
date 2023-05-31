import React, { useContext } from 'react'
import { OrdersCard } from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context/Context'
import { totalPrice } from '../../utils/totalPrice'
import { Link } from 'react-router-dom'

export const MyOrders = () => {

  const {order} = useContext(ShoppingCartContext);

  return (
    <div className='text-black my-12 '>
      MyOrders
      {order.map((orden) => (
          <Link key={orden.id} to={`/myorders/${orden.id}`}>
            <OrdersCard 
              id={orden.id}
              date={orden.date}
              time={orden.time}
              totalPrice={orden.total}
              totalProducts={orden.length}
            /> 
          </Link>

        ))

      }
      <Link to='/'>
        <span>🏠</span>
      </Link>
     
    </div>
  )
}
