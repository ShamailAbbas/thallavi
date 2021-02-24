import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import '../css/model.css'
const Model = ({ text, dispatch }) => {
  return ReactDom.createPortal(
    <>
      <div className='modelbg'>
        <div className='model'>
          <p>{text}</p>
          <div className='circularprogress'>
            <CircularProgress />
          </div>
          {/* <button
            className='closebtn'
            onClick={() => dispatch({ type: 'BUSY' })}
          >
            Close
          </button> */}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
const mapStatetoProps = (state) => {
  return {}
}
export default connect(mapStatetoProps)(Model)
