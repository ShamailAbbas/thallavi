import { React, useState } from 'react'
import { connect } from 'react-redux'

import Roomcomponent from './Roomcomponent.js'

import '../css/room.css'

const Rooms = ({ AllRooms, Loading, dispatch }) => {
  const [rooms, setRooms] = useState(AllRooms)
  const economyrooms = () => {
    const economyrooms = AllRooms.filter(
      (rooms) => rooms.category === 'Economy'
    )
    setRooms(economyrooms)
  }
  const goldrooms = () => {
    const goldrooms = AllRooms.filter((rooms) => rooms.category === 'Gold')
    setRooms(goldrooms)
  }
  const premiumrooms = () => {
    const premiumrooms = AllRooms.filter(
      (rooms) => rooms.category === 'Premium'
    )
    setRooms(premiumrooms)
  }

  return (
    <section className='featured'>
      <div className='title'>
        <h1>Rooms</h1>
        <div className='underline'></div>
        <div className='menu'>
          <h6
            onClick={() => {
              setRooms(AllRooms)
            }}
          >
            All
          </h6>
          <h6
            onClick={() => {
              economyrooms()
            }}
          >
            Economy
          </h6>
          <h6
            onClick={() => {
              goldrooms()
            }}
          >
            Gold
          </h6>
          <h6
            onClick={() => {
              premiumrooms()
            }}
          >
            Premium
          </h6>
        </div>
      </div>
      <div className='featuredrooms'>
        {rooms.map((rooms, index) => {
          return <Roomcomponent key={index} image={rooms.image} {...rooms} />
        })}
      </div>
    </section>
  )
}

const mapStatetoProps = (state) => {
  return {
    AllRooms: state.AllRooms,
    Loading: state.Loading,
  }
}

export default connect(mapStatetoProps)(Rooms)
