import React from 'react'

const Ordercomponent = ({ image, category, price, date }) => {
  return (
    <div>
      <div className='content'>
        <img src={image} alt='' className='image' />
        <div className='category'>
          <h1>{category}</h1>
          <p>Booked on: {date}</p>
          <div className='toptag'>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ordercomponent
