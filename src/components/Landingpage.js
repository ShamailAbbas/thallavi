import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/landingpage.css'
import { db } from '../firebase'
import { CircularProgress } from '@material-ui/core'
import Roomcomponent from './Roomcomponent'

const Landingpage = ({ dispatch, Loading }) => {
  const [Frooms, setFrooms] = useState([])
  const fetchrooms = () => async (dispatch) => {
    await db.collection('Rooms').onSnapshot(async (snapshot) => {
      const items = await snapshot.docs.map((rooms) => rooms.data())
      dispatch({ type: 'FETCHROOMS', payload: items })
      setFrooms(items.filter((item) => item.featured === 'true'))
    })
  }

  useEffect(() => {
    dispatch(fetchrooms())
  }, [dispatch])
  if (Loading) {
    return (
      <div className='circularprogress'>
        <CircularProgress />
      </div>
    )
  }
  if (!Loading) {
    return (
      <>
        <section className='home'>
          <div className='banner'>
            <h1>Luxurious Rooms</h1>
            <div className='underline'></div>
            <p>Starting at $299</p>
            <Link to='/rooms' className='link'>
              <button className='rooms'>Our Rooms</button>
            </Link>
          </div>
        </section>
        <section className='featured'>
          <div className='title'>
            <h1>Featured Rooms</h1>
            <div className='underline'></div>
          </div>
          <div className='featuredrooms'>
            {Frooms.map((rooms, index) => {
              return (
                <Roomcomponent key={index} image={rooms.image} {...rooms} />
              )
            })}
          </div>
        </section>
      </>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
    Loading: state.Loading,
  }
}

export default connect(mapStatetoProps)(Landingpage)
