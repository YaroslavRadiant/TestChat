import {useEffect, useRef} from 'react'
import {MassageRow} from '../MassageRow/MassageRow'
import {useSelector} from 'react-redux'
import './MassagesWindow.css'

export const MassagesWindow = () => {
  const messages = useSelector((state) => state.messages) //todo selectors

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='massage_window'>
      {messages?.comments ? (
        messages?.comments.map((massage) => (
          <MassageRow massage={massage} key={massage.id} />
        ))
      ) : (
        <div className='lds-dual-ring'></div>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}
