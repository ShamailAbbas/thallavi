import axios from 'axios'
import React from 'react'
import '../css/Feeditems.css'
import { connect } from 'react-redux'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
const Feeditems = ({ name, file, _id, like, dispatch }) => {
  const likefc = async (_id) => {
    const url = 'http://localhost:5000/Feeds/'
    await axios.patch(`${url}/${_id}/like`)
    dispatch({ type: 'LIKED', payload: _id })
  }
  const deletefc = async (_id) => {
    const url = 'http://localhost:5000/Feeds/'
    await axios.delete(`${url}/${_id}`)
    console.log('deleted')
    dispatch({ type: 'DELETE', payload: _id })
  }

  return (
    <div>
      <div className='Ficontainer'>
        <img src={file} alt='dhasjhdkjsah' className='Fimage' />
        <div className='Fdescription'>{name}</div>
        <div className='btncontainer'>
          <div
            className='icon'
            onClick={() => {
              likefc(_id)
            }}
          >
            <ThumbUpAltOutlinedIcon />
            <div>{like}</div>
          </div>
          <div
            className='icon'
            onClick={() => {
              deletefc(_id)
            }}
          >
            <DeleteOutlineOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStatetoProps = (state) => {
  return {}
}
export default connect(mapStatetoProps)(Feeditems)
