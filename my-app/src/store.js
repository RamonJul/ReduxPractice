import {CreateStore, applyMiddleware} from'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState ={}
const middleWare=[thunk]
const store=CreateStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWare)
    )

export default store;