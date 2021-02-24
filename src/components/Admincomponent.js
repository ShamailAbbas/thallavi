import React from 'react'

const Admincomponent = ({
  image,
  category,
  price,
  date,
  name,
  email,
  contact,
}) => {
  return (
    <div>
      <div className='content'>
        <img src={image} alt='' className='image' />
        <div className='category'>
          <h1>{category}</h1>
          <p>Booked by: {name}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact}</p>
          <p>Booked on: {date}</p>
          <div className='toptag'>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admincomponent
