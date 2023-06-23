import './App.css'
import { AllRoutes } from "./routes/AllRoutes.jsx"
import { NavBar } from './components/NavBar'
import { CheckoutSideMenu } from './components/CheckoutSideMenu'
import { Footer } from './components/Footer'
 
function App() {
  

  return (
      <div className="text-center">
          <NavBar />
          <AllRoutes />
          <CheckoutSideMenu />
          <Footer />
      </div>

  )
}

export default App
