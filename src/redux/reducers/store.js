import {combineReducers , createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/**
 * all reducers
 */
import SignInReducer from './signReducers';


/**
 * 中间件添加
 * @type {*[]}
 */
let middlewares = [
  thunk,
];

/**
 * 绑定所有的reducers
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const allReducers = combineReducers({
  SignInReducer,
});


const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(allReducers);

export default store