import * as types from '../constant/ActionsTypes';



let homeInit = {
  allNews: [],
};

export default function HomeReducers(state = homeInit, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      return Object.assign({}, state, {allNews: action.data});
    default:
      return state;
  }
}
