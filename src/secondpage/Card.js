import React from 'react'
import './secondpage.css'
 const card = ({imageUrl,title}) => {
  return (
    <div>
        <div className='card'>
            <img src={imageUrl} alt='card' />            
            <h1>{title}</h1>
        </div>
    </div>
  )
}
export default card
