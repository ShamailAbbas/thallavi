import { React, useState } from 'react'
import '../css/bookingpage.css'
import { useHistory } from 'react-router-dom'
import { signup } from '../Authfunction'
import { connect } from 'react-redux'
import { db } from '../firebase'
import Model from './Model.js'
const Signup = ({ Busy, dispatch }) => {
  const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const signupfc = async (e) => {
    e.preventDefault()
    await dispatch({ type: 'BUSY' })

    await signup(email, password)
      .then(async () => {
        await db.collection('users').doc(email).set({
          email: email,
          userrole: 'normaluser',
        })

        await dispatch({ type: 'BUSY' })
        history.replace('/')
        window.location.reload()
        localStorage.setItem('user', email)
        console.log('sign up suuccess')
      })
      .catch((error) => {
        alert(error.message)
        console.log('could not sign up' + error)
        dispatch({ type: 'BUSY' })
      })
  }

  if (Busy) return <Model text={'Signing up please wait'}></Model>
  else
    return (
      <div className='formwrapper'>
        <form className='formbox' action='submit' onSubmit={(e) => signupfc(e)}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required={true}
            onChange={(e) => setemail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required={true}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
          />
          <input className='booknow' type='submit' value='Signup' />
        </form>
      </div>
    )
}

const mapStatetoProps = (state) => {
  return {
    Busy: state.Busy,
  }
}
export default connect(mapStatetoProps)(Signup)
