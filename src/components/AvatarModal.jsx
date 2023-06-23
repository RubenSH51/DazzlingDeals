import React, { useState ,useContext} from 'react'
import "./AvatarModal.css"
import { AvatarCard } from './AvatarCard'
import { ShoppingCartContext } from '../context/Context'

export const AvatarModal = () => {

    const [pageModal, setPageModal] = useState(1);

    let listaAvatars = [];
    
    for (let i = 1; i <= 100 ; i++)
    {
      listaAvatars.push(i)
    }

    listaAvatars = listaAvatars.map(num => num.toString() + ".png")
    //console.log(listaAvatars)


    let {selectedAvatar, setSelectedAvatar,handleAvatarSelect,
    isAvatarsModalOpen, setIsAvatarsModalOpen} = useContext(ShoppingCartContext)

    const [inicioAvatar, setInicioAvatar] = useState(0)



function handleNextPageAvatars(direction)
{
  // if (inicioAvatar<listaAvatars.length-20)
  // {
  //   setInicioAvatar(inicioAvatar+20)
  // }
  // else
  // {
  //   console.log('No more avatars 😧')
  // }

  if(direction === 'up')
  {
    setInicioAvatar(inicioAvatar+20)
    setPageModal(pageModal+1)
  }
  else
  {
    setInicioAvatar(inicioAvatar-20)
    setPageModal(pageModal-1)
  }

}


  function handleContinueButton()
  {
    let path = window.location.pathname
    if(path === '/myaccount')
    {
      document.getElementById('myaccountavatar').src = "../../../public/avatars/" + selectedAvatar;
    }
    

    setIsAvatarsModalOpen(false)

  }



  return (
    <div className="SignUp-Modal border-red z-10">
        <div className="SignUp-Modal--content text-black flex flex-col items-center justify-center">
            <span
              className="absolute top-1 right-1 cursor-pointer 
              hover:bg-black hover:rounded-xl hover:text-white
                "
              onClick={() => setIsAvatarsModalOpen(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
            <h2 className='font-bold text-xl mb-4'>Select your avatar!</h2>
            <div className='SignUp-Modal--content__avatarContainer grid grid-cols-5 w-3/4'>
                {listaAvatars.slice(inicioAvatar,inicioAvatar+20).map(avatar => (
                  <AvatarCard 
                    image={avatar}
                    key={avatar}
                    id={avatar}
                    isSelected={avatar === selectedAvatar}
                    handleAvatarSelect={handleAvatarSelect}
                  />
                  ))}
            </div>


            {/*  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BOTONES DEL MODAL */}
            <div className='SignUp-Modal--content__buttonsContainer flex flex-col items-center gap-4 mt-2'>

              <div className='w-24'>
                {inicioAvatar>0 &&
                <button 
                  type="button"
                  className='border rounded-lg border-black h-10 w-10 float-left
                  hover:bg-slate-800 hover:text-white transition-colors duration-300
                  '
                  onClick={() => handleNextPageAvatars('down')}
                  >
                    ⬅️
                </button>
                }

                {inicioAvatar <80 &&
                <button 
                  type="button"
                  className='border rounded-lg border-black h-10 w-10 float-right
                  hover:bg-slate-800 hover:text-white transition-colors duration-300
                  '
                  onClick={() => handleNextPageAvatars('up')}
                  >
                    ➡️
                </button>
                
                }
              </div>
              <button 
                type="button"
                className='border rounded-lg border-black h-10 w-24 
                hover:bg-slate-800 hover:text-white transition-colors duration-300
                '
                onClick={() => handleContinueButton()}
                >
                  Continue
              </button>

            </div>

            <span
              className="absolute top-1 left-1"
              >Page {pageModal}/5
            </span>
        </div>
      </div>
  )
}
