import './App.css'
import { AllRoutes } from "./routes/AllRoutes.jsx"
import { NavBar } from './components/NavBar'
import { CheckoutSideMenu } from './components/CheckoutSideMenu'
 
function App() {
  

  return (
      <div className="text-center">
          <NavBar />
          <AllRoutes />
          <CheckoutSideMenu />
      </div>

  )
}

export default App
