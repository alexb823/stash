import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import {gifReducer} from './reducers/gifReducer';

const store = createStore(gifReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;