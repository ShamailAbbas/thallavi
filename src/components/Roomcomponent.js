import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/featured.css'
const Roomcomponent = ({ image, category, price, dispatch }) => {
  const senddispatch = () => {
    dispatch({ type: 'ROOMDETAIL', payload: { image, price, category } })
  }
  return (
    <Link to='detailedpage' className='link'>
      <div
        className='content'
        onClick={() => {
          senddispatch()
        }}
      >
        <img src={image} alt='' className='image' />
        <div className='category'>
          <h1>{category}</h1>
          <div className='toptag'>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
const mapStatetoProps = (state) => {
  return {}
}
export default connect(mapStatetoProps)(Roomcomponent)
