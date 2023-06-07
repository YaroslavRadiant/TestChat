import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import persistConfig from '../persistConfig'
import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_ERROR,
} from '../actions'

function messagesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      }
    case FETCH_MESSAGES_ERROR:
      return {state, loading: false}
    case ADD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        //todo
      }
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.payload],
      }
    case ADD_MESSAGE_ERROR:
      return {
        ...state,
        loading: false,
        //todo
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
