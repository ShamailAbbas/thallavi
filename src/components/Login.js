import { React, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../Authfunction'
import { connect } from 'react-redux'
import '../css/bookingpage.css'
import { db } from '../firebase'
import Model from './Model.js'
const Login = ({ Busy, dispatch }) => {
  const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const loginfc = async (e) => {
    e.preventDefault()
    await dispatch({ type: 'BUSY' })
    await login(email, password)
      .then(() => {
        localStorage.setItem('user', email)
        console.log('u loged in')
        db.collection('users').onSnapshot(async (snapshot) => {
          const user = await snapshot.docs.map((user) => user.data())
          const filtereduser = await user.filter(
            (user) => user.email === localStorage.user
          )

          localStorage.setItem('userrole', filtereduser[0].userrole)
          dispatch({ type: 'BUSY' })
          history.replace('/')
          window.location.reload()
        })
      })
      .catch(async (error) => {
        alert(error.message)
        await dispatch({ type: 'BUSY' })
      })
  }
  if (Busy) return <Model text={'Logging in please wait'}></Model>
  else
    return (
      <div className='formwrapper'>
        <form className='formbox' action='submit' onSubmit={(e) => loginfc(e)}>
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
          <Link to='/Signup' className=''>
            <p>Create new Account</p>
          </Link>
          <input className='booknow' type='submit' value='Login'></input>
        </form>
      </div>
    )
}
const mapStatetoProps = (state) => {
  return {
    Busy: state.Busy,
  }
}
export default connect(mapStatetoProps)(Login)
