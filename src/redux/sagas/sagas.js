import {put, call, all, takeLatest} from 'redux-saga/effects'
import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_REQUEST,
  // eslint-disable-next-line no-unused-vars
  ADD_MESSAGE_ERROR, //todo
} from '../actions'
import {fetchMessagesFromApi} from '../../api/api'

function* handleFetchMessages() {
  try {
    const data = yield call(fetchMessagesFromApi)

    yield put({type: FETCH_MESSAGES_SUCCESS, payload: data})
  } catch (error) {
    yield put({type: FETCH_MESSAGES_ERROR, error: error.message})
  }
}

function* watchFetchMassages() {
  yield takeLatest(FETCH_MESSAGES_REQUEST, handleFetchMessages)
}
//--------
function* handleAddMassage({payload}) {
  try {
    yield put({type: ADD_MESSAGE_SUCCESS, payload})
  } catch (error) {}
}

function* watchAddMassage() {
  yield takeLatest(ADD_MESSAGE_REQUEST, handleAddMassage)
} //--------

function* watchChatPage() {
  yield all([call(watchFetchMassages), call(watchAddMassage)])
}

function* rootSaga() {
  yield all([watchChatPage()])
}

export default rootSaga
