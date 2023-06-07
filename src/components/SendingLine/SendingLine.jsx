import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addMessage} from '../../redux/actions'
import './SendingLine.css'

export const SendingLine = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addMessage({
        body: inputValue,
        id: Math.floor(100000 + Math.random() * 900000),
        postId: Math.floor(100000 + Math.random() * 900000),
        user: {
          id: Math.floor(100000 + Math.random() * 900000),
          username: 'user',
        },
      })
    )
    setInputValue('')
  }

  return (
    <div className='sending_line'>
      <input
        className='sending_line_input'
        value={inputValue}
        onChange={handleOnChange}
        placeholder='Login'
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  )
}
