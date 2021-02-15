import React from 'react'
import ReactDom from 'react-dom'
import '../css/model.css'
import { connect } from 'react-redux'
const Model = ({ Busy }) => {
  return ReactDom.createPortal(
    <>
      <div className='modelbg'>
        <div className='model'>
          Please Wait....
          <button
            onClick={() => {
              Busy()
            }}
          >
            close
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
const mapDispatchtoProps = (dispatch) => {
  return {
    Busy: () => dispatch({ type: 'BUSY' }),
  }
}

export default connect(null, mapDispatchtoProps)(Model)
