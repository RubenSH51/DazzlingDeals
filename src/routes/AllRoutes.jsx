import React from 'react'
import { Routes, Route }  from "react-router-dom"

// Pages
import { Home, MyAccount, MyOrder, MyOrders, SignUp,
  NotFound, Testing, MyLastOrder, MySelectedOrder, 
  PasswordRecovery, TermsAndConditions, PrivacyPolicy, Admin, AboutMe} from "../pages/" 

export const AllRoutes = () => {
  return (
    <div className="bg-white text-white mt-8">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/all' element={<Home />}/>
            <Route path='/clothes' element={<Home />}/>
            <Route path='/electronics' element={<Home />}/>
            <Route path='/shoes' element={<Home />}/>
            <Route path='/nuevo' element={<Home />}/>
            <Route path='/others' element={<Home />}/>
            <Route path='/myorder' element={<MyOrder />}/>
            <Route path='/myorders' element={<MyOrders />}/>
            {/* <Route path='/myorders/last' element={<MyOrder />}/>
            <Route path='/myorders/:id' element={<MyOrder />}/> */}

            <Route path='/myorders/last' element={<MyLastOrder />}/>
            <Route path='/myselectedorder/:id' element={<MySelectedOrder />}/>

            {/* <Route path='/myorders/:id' element={<Testing/>}/> */}
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/myaccount' element={<MyAccount />}/>

            <Route path='/password-recovery' element={<PasswordRecovery />}/>
            <Route path='/terms-and-conditions' element={<TermsAndConditions />}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}/>

            <Route path='/admin' element={<Admin />}/>
            <Route path='/about-me' element={<AboutMe />}/>

            <Route path='*' element={<NotFound />}/>

        </Routes>
    </div>
  )
}


