import {combineReducers , createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/**
 * all reducers
 */
import SignInReducer from './signReducers';
import HomeReducers from './homeReducers';


/**
 * 中间件添加
 * @type {*[]}
 */
let middlewares = [
  thunk,
  logger
];

/**
 * 绑定所有的reducers
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const allReducers = combineReducers({
  SignInReducer,
  HomeReducers
});


const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(allReducers);

export default store