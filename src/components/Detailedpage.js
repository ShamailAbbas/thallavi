import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/detailedpage.css'
const Detailedpage = ({ image, category, price }) => {
  const booknow = () => {}
  return (
    <div className='wrapper'>
      <div className='title'>
        <h1>Rooms Details</h1>
        <div className='underline'></div>
      </div>
      <div className='hero'>
        <div className='leftsection'>
          <img src={image} alt='' />
          <h1>{category}</h1>
          <h4>{price}</h4>
        </div>
        <div className='rightsection'>
          <h1>Details</h1>
          <div className='info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae
              exercitationem vitae non ipsa laborum mollitia delectus ad? Ea
              numquam maiores voluptates voluptatibus, nulla at voluptate ut
              consequuntur harum rerum!
            </p>
            <p>pets allowed</p>
            <p>Meal included</p>
            <p>Capacity 2</p>
            <p>size 1000sqft</p>
          </div>
          <Link to='/bookingpage'>
            <button
              className='booknow'
              onClick={() => {
                booknow()
              }}
            >
              Booknow
            </button>
          </Link>
        </div>
      </div>
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
export default connect(mapStatetoProps)(Detailedpage)
