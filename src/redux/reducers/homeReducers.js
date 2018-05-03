import * as types from '../constant/ActionsTypes';

let homeInit = {
  allNews: [],
};

export default function HomeReducers(state = homeInit, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      return state;
    default:
      return state;
  }
}