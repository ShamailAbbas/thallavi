import { React, useState } from 'react'
import '../css/Upload.css'
import axios from 'axios'
import FileBase from 'react-file-base64'
import { connect } from 'react-redux'
import Model from './Model'
import url from './url'
const Upload = ({ Busy, checkbusy }) => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const handlechange = (e) => {
    setName(e.target.value)
  }

  const Upload = async () => {
    const info = { name: name, file: file }
    // const url = 'http://localhost:5000/Feeds/'
    await axios.post(url, info)
    console.log('uploaded ')
    Busy()
  }
  return (
    <>
      {checkbusy ? <Model /> : null}

      <div className='uploadcontainer'>
        <input
          type='text'
          placeholder='Name'
          onChange={handlechange}
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
