export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST'
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR'
export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS'
export const ADD_MESSAGE_ERROR = 'ADD_MESSAGE_ERROR'

export function fetchMessages() {
  return {type: FETCH_MESSAGES_REQUEST}
}

export function addMessage(text) {
  return {
    type: ADD_MESSAGE_REQUEST,
    payload: text,
  }
}
