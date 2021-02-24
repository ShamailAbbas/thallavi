import { React, useState } from 'react'
import '../css/Upload.css'
import FileBase from 'react-file-base64'
import { connect } from 'react-redux'
import Model from './Model'
import { db } from '../firebase'
const Upload = ({ Busy, checkbusy }) => {
  const [category, setCategory] = useState('')
  const [roomid, setRoomid] = useState('')
  const [featured, setFeatured] = useState(false)
  const [price, setPrice] = useState('')
  const [file, setFile] = useState('')

  const handleroomidchange = (e) => {
    setRoomid(e.target.value)
  }
  const handlecategorychange = (e) => {
    setCategory(e.target.value)
  }
  const handlefeaturedchange = (e) => {
    setFeatured(e.target.value)
  }
  const handlepricechange = (e) => {
    setPrice(e.target.value)
  }

  const Upload = async () => {
    await db
      .collection('Rooms')
      .doc(roomid)
      .set({
        roomid: roomid,
        category: category,
        featured: featured,
        price: price,
        image: file,
      })
      .then(() => {
        console.log('uploaded ')
        Busy()
      })
      .catch((error) => {
        alert(error.message)
        console.log('error occured')
        Busy()
      })
  }
  return (
    <>
      {checkbusy ? <Model /> : null}

      <div className='uploadcontainer'>
        <div className='form'>
          <label htmlFor='Roomid'>Room ID</label>
          <input
            type='text'
            id='Roomid'
            placeholder='Roomid'
            onChange={handleroomidchange}
            className='forminput'
          />
          <label htmlFor='Category'>Category</label>
          <input
            type='text'
            id='Category'
            placeholder='Category'
            onChange={handlecategorychange}
            className='forminput'
          />
          <label htmlFor='Featured'>Featured</label>
          <select
            type='Featured'
            id='Featured'
            placeholder='Featured'
            onChange={handlefeaturedchange}
            className='forminput'
          >
            <option value='false'>false</option>
            <option value='true'>true</option>
          </select>

          <label htmlFor='Price'>Price</label>
          <input
            type='number'
            id='Price'
            placeholder='Price'
            onChange={handlepricechange}
            className='forminput'
          />
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setFile(base64)}
          />

          <button
            className='submitbtn'
            onClick={() => {
              Busy()
              Upload()
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  )
}
const mapStatetoProps = (state) => {
  return {
    checkbusy: state.Busy,
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    Busy: () => dispatch({ type: 'BUSY' }),
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Upload)
