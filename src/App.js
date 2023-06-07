import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchMessages} from './redux/actions'
import {MassagesWindow} from './components/MassagesWindow/MassagesWindow'
import {SendingLine} from './components/SendingLine/SendingLine'

import './App.css'

function App() {
  const messages = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!messages.messages.comments) {
      dispatch(fetchMessages())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <div className='App'>
      <div className='wrapper'>
        <MassagesWindow />
        <SendingLine />
      </div>
    </div>
  )
}

export default App
