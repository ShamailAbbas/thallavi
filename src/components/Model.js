import React from 'react'
import ReactDom from 'react-dom'
import '../css/model.css'
const Model = () => {
  return ReactDom.createPortal(
    <>
      <div className='modelbg'>
        <div className='model'>
          i am a model
          <button>close</button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Model
