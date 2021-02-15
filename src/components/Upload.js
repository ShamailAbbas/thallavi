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

  const Upload = (post) => {
    console.log('just before post request')
    axios.post(url, post)
    console.log('uploaded >>>>> ')
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
            const post = { name: name, file: file }
            Upload(post)
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
