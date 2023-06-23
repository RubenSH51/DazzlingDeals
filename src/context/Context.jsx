import { createContext, React, useState, useEffect } from 'react'


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [productToShow, setProductToShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    //  >>>>>>>>>>>>>>>>>>>>>>>>> Get products! >>>>>>>>>>>>>>>>>>>>>>>>>
    const [items, setItems] = useState([]);
    
  //TEST
    useEffect(()=> {
  
      setTimeout(() => {
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
      },2000)
  
    },[])


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Get products by Search! >>>>>>>>>>>>>>>>>>>>>>>>>
    const [searchByTitle, setSearchByTitle] = useState('');
    const [matchedResults, setMatchedResults] = useState('');
    const [searchByCategory, setSearchByCategory] = useState('all');

    //  >>>>>>>>>>>>>>>>>>>>>>>>> Product Detail >>>>>>>>>>>>>>>>>>>>>>>>>
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    function OpenAside()
    {
      CloseCheckoutSideMenu();
      setIsAsideOpen(true);
    }
    function CloseAside()
    {
      setIsAsideOpen(false);
    }

    function ToggleAside()
    {
      if(isAsideOpen)
      {
        OpenAside()
      }
      else
      {
        CloseAside()
      }
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

    function ToggleCheckOutSideMenu()
    {
      if(isCheckoutsideMenuOpen)
      {
        
        CloseCheckoutSideMenu()
      }
      else
      {
        OpenCheckoutSideMenu()
      }
    }


    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Sign in >>>>>>>>>>>>>>>>>>>>>>>>>

    let [userLogged, setUserLogged] = useState(false);


    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //  >>>>>>>>>>>>>>>>>>>>>>>>> control de cards >>>>>>>>>>>>>>>>>>>>>>>>>
    const [inicio, setInicio] = useState(0);
    
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



    //  >>>>>>>>>>>>>>>>>>>>>>>>> Nav Bar and user >>>>>>>>>>>>>>>>>>>>>>>>>
    const [showLogInMenu, setShowLogInMenu] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const [userList, setUserList] = useState(() => {
      const storedUserList = JSON.parse(localStorage.getItem('Acceso'));
      return storedUserList ? storedUserList : [];
    });

    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LocalStorage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //Lo dejo comentado para que no renueve la lista cada vez que se refresca la página
    // useEffect(() => {

    //   localStorage.setItem('Acceso', JSON.stringify(userList));

    // },[userList])


    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


    //  >>>>>>>>>>>>>>>>>>>>>>>>> Shopping cart - Order >>>>>>>>>>>>>>>>>>>>>>>>>
    const [order, setOrder] = useState([]);




    //  >>>>>>>>>>>>>>>>>>>>>>>>> SignUp Lista avatars >>>>>>>>>>>>>>>>>>>>>>>>>
    
    const [selectedAvatar, setSelectedAvatar] = useState('');
    const handleAvatarSelect = (AvatarId) => {
      setSelectedAvatar(AvatarId);
    };
    const [isAvatarsModalOpen, setIsAvatarsModalOpen] = useState(false);
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  return (
    <ShoppingCartContext.Provider 
      value={{
        count, 
        setCount,
        isAsideOpen,
        setIsAsideOpen,
        OpenAside,
        CloseAside,
        ToggleAside, // Es de product detail. Todavía no la usé
        productToShow, 
        setProductToShow,
        cartProducts, 
        setCartProducts,
        isCheckoutsideMenuOpen, 
        setIsCheckoutsideMenuOpen,
        OpenCheckoutSideMenu,
        CloseCheckoutSideMenu,
        ToggleCheckOutSideMenu, // Esta es nueva. Se la asigné al carrito del navbar

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

        userLogged,
        setUserLogged,

        showLogInMenu, 
        setShowLogInMenu,
        currentUser, 
        setCurrentUser,
        userList, 
        setUserList,

        inicio, 
        setInicio,

        selectedAvatar, 
        setSelectedAvatar,
        handleAvatarSelect,
        isAvatarsModalOpen, 
        setIsAvatarsModalOpen

        }}>
          {children}
    </ShoppingCartContext.Provider>
  )
}

