import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import persistedReducer from './reducers'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export {store, persistor}
