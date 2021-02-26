import React, { useState } from 'react'
import '../css/bookingpage.css'
import { connect } from 'react-redux'
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid'
import { CircularProgress } from '@material-ui/core'
const Bookingpage = ({ image, price, category }) => {
  const [Loading, setLoading] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [date, setdate] = useState('')
  const booknow = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await db
        .collection('Bookings')
        .doc(email)
        .collection('mybookings')
        .doc(uuidv4())
        .set({
          date,
          image,
          price,
          category,
        })

      await db.collection('Bookings').doc(uuidv4()).set({
        name,
        email,
        contact,
        date,
        image,
        price,
        category,
      })
      setLoading(false)
      console.log('uploaded successfully')
    } catch {
      console.log('error occured')
    }
  }
  if (Loading) return <CircularProgress></CircularProgress>
  else
    return (
      <div className='formwrapper'>
        <form
          action='submit'
          className='formbox'
          onSubmit={(e) => {
            booknow(e)
          }}
        >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            required={true}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor='Email'>Email</label>
          <input
            type='email'
            name='email'
            id='Email'
            required={true}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            id='date'
            required={true}
            onChange={(e) => setdate(e.target.value)}
          />
          <label htmlFor='Contact'>Contact</label>
          <input
            type='number'
            name='contact'
            id='Contact'
            required={true}
            onChange={(e) => setcontact(e.target.value)}
          />

          <input type='submit' value='BOOKNOW' className='booknow' />
        </form>
      </div>
    )
}
const mapStatetoProps = (state) => {
  return {
    image: state.Details.image,
    category: state.Details.category,
    price: state.Details.price,
  }
}
export default connect(mapStatetoProps)(Bookingpage)
