import React, { useState, useEffect } from 'react'
import Ordercomponent from './Ordercomponent'
import { db } from '../firebase'
import { CircularProgress } from '@material-ui/core'
const Mybookings = () => {
  const [Loading, setLoading] = useState(false)
  const [orders, setorders] = useState([])

  const fetchbookings = async () => {
    setLoading(true)
    try {
      await db
        .collection('Bookings')
        .doc(localStorage.user)
        .collection('mybookings')
        .onSnapshot((snapshot) => {
          const mybookings = snapshot.docs.map((order) => order.data())
          if (mybookings.length > 0) {
            setorders(mybookings)
            setLoading(false)
          }
        })
    } catch {
      console.log('error occured')
    }
  }

  useEffect(() => {
    fetchbookings()
  }, [])
  if (Loading) {
    return <CircularProgress></CircularProgress>
  } else
    return (
      <div>
        <div className='title'>
          <h1>My Bookings</h1>
          <div className='underline'></div>
        </div>
        <div className='featuredrooms'>
          {orders.map((order, index) => {
            return <Ordercomponent key={index} image={order.image} {...order} />
          })}
        </div>
      </div>
    )
}

export default Mybookings
