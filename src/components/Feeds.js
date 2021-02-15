import { React, useEffect } from 'react'
import Feeditems from './Feeditems.js'
import '../css/Feed.css'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import url from './url.js'
const Feeds = ({ Loading, Feeds, dispatch }) => {
  // const url = 'http://localhost:5000/Feeds/'
  const fetchdata = () => async (dispatch) => {
    const response = await fetch(url)
    const data = await response.json()
    dispatch({ type: 'FETCH', payload: data })
  }

  useEffect(() => {
    dispatch(fetchdata())
  }, [dispatch])

  if (Loading) {
    return (
      <div className='circularprogress'>
        <CircularProgress />
      </div>
    )
  }
  if (!Loading) {
    if (Feeds.length === 0) {
      return (
        <div className='nodatacontainer'>
          <h1>NO DATA IN DATABASE</h1>
        </div>
      )
    }
    if (Feeds.lenght !== 0) {
      return (
        <div>
          <div className='maincontainer'>
            {Feeds.map((feeditems) => {
              return <Feeditems key={feeditems._id} {...feeditems} />
            })}
          </div>
        </div>
      )
    }
  }
}
const mapStatetoProps = (state) => {
  return {
    Feeds: state.Feeds,
    Loading: state.Loading,
  }
}
export default connect(mapStatetoProps)(Feeds)
