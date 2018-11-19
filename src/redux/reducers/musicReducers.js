import * as types from '../constant/ActionsTypes';



let musicInit = {
  allMusic: [{id: 1}, {id: 2},{id: 3},{id: 4},{id: 5}],
};

export default function HomeReducers(state = musicInit, action) {
  switch (action.type) {
    case types.GET_ALL_MUSIC:
      return Object.assign({}, state, {allMusic: action.data});
    default:
      return state;
  }
}