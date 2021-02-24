import React, { useState } from 'react'
import { db } from '../firebase'
import Admincomponent from './Admincomponent'
const Admindashboard = () => {
  const [Allbookings, setAllbookings] = useState([])
  db.collection('Bookings').onSnapshot((snapshot) => {
    setAllbookings(snapshot.docs.map((bookings) => bookings.data()))
  })

  return (
    <div>
      <div className='title'>
        <h1>Admin Panel</h1>
        <div className='underline'></div>
      </div>
      <div className='featuredrooms'>
        {Allbookings.map((order, index) => {
          return <Admincomponent key={index} image={order.image} {...order} />
        })}
      </div>
    </div>
  )
}

export default Admindashboard
