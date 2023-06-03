import { createContext, React, useState, useEffect } from 'react'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])

    // >>>> TESTING
    //const [cartProductsWithUnits, setCartProductsWithUnits] = useState([])

    // <<<< TESTING

    //  >>>>>>>>>>>>>>>>>>>>>>>>> Get products! >>>>>>>>>>>>>>>>>>>>>>>>>
    const [items, setItems] = useState([]);
    

    useEffect(()=> {
  
      let url =  'https://api.escuelajs.co/api/v1/products';
      //let url = 'https://fakestoreapi.com/products'
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setItems(data);
        })
        .catch(error => {
          console.log('Error: ',error);
        })
  
    },[])


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Get products by Search! >>>>>>>>>>>>>>>>>>>>>>>>>
    const [searchByTitle, setSearchByTitle] = useState('');
    //let matched = items.filter(x=> x.title.startsWith(searchByTitle))
    const [matchedResults, setMatchedResults] = useState('')


    const [searchByCategory, setSearchByCategory] = useState('');

    //  >>>>>>>>>>>>>>>>>>>>>>>>> Product Detail >>>>>>>>>>>>>>>>>>>>>>>>>
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    function OpenAside()
    {
      setIsAsideOpen(true);
    }
    function CloseAside()
    {
      setIsAsideOpen(false);
    }
    

    //  >>>>>>>>>>>>>>>>>>>>>>>>> CheckoutSideMenu >>>>>>>>>>>>>>>>>>>>>>>>>
    
    const [isCheckoutsideMenuOpen, setIsCheckoutsideMenuOpen] = useState(false);

    function OpenCheckoutSideMenu()
    {
      CloseAside()
      setIsCheckoutsideMenuOpen(true);
    }
    function CloseCheckoutSideMenu()
    {
      setIsCheckoutsideMenuOpen(false);
    }



    //  >>>>>>>>>>>>>>>>>>>>>>>>> Shopping cart - Order >>>>>>>>>>>>>>>>>>>>>>>>>

    const [order, setOrder] = useState([]);


    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Sign in >>>>>>>>>>>>>>>>>>>>>>>>>

    const user = {name: "Sherlock", password: "5179", email: "sherlock@holmes.com"}
    
    let [userLogged, setUserLogged] = useState(false);

    //localStorage.setItem('Acceso',userLogged.toString())

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Nav Bar >>>>>>>>>>>>>>>>>>>>>>>>>
    const [showLogInMenu, setShowLogInMenu] = useState(false)

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    


  return (
    <ShoppingCartContext.Provider 
      value={{
        count, 
        setCount,
        isAsideOpen,
        setIsAsideOpen,
        OpenAside,
        CloseAside,
        productToShow, 
        setProductToShow,
        cartProducts, 
        setCartProducts,
        isCheckoutsideMenuOpen, 
        setIsCheckoutsideMenuOpen,
        OpenCheckoutSideMenu,
        CloseCheckoutSideMenu,

        order,
        setOrder,

        items,
        setItems,

        searchByTitle, 
        setSearchByTitle,
        matchedResults, 
        setMatchedResults,
        searchByCategory, 
        setSearchByCategory,

        user,
        userLogged,
        setUserLogged,

        showLogInMenu, 
        setShowLogInMenu
        }}>
          {children}
    </ShoppingCartContext.Provider>
  )
}

