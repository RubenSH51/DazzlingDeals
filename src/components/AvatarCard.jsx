import React from 'react'

export const AvatarCard = ({image, id, isSelected, handleAvatarSelect}) => {
    const imageBaseUrl = getImageBaseUrl();

    const handleSelect = () => {
        handleAvatarSelect(id);
      };

  return (
    <div 
        className={`border border-solid border-black ${isSelected ? 'bg-blue-500' : ''}
        flex flex-col justify-center items-center p-2`}>

        <label htmlFor={`avatar-${id}`}>
            <input 
                type="radio" 
                name="avatar-selection" 
                id={`avatar-${id}`} 
                checked={isSelected}
                onChange={handleSelect}
                className='hidden'
                
            />
            <img 
                className='w-15 h-15'
                src={`${imageBaseUrl}/avatars/${image}`} alt="avatar" />
        </label>
    </div>
  )
}
