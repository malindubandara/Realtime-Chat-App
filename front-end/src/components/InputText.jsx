import React from 'react'
import '../style.css'

const InputText = () => {
  return (
  
    <div className='input-text'>
        <textarea placeholder='Enter Message' name='message' id='message' rows="6"></textarea>
        <button>Send</button>
    </div>
    
  )
}

export default InputText