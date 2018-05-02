import * as types from '../constant/ActionsTypes';

let signInit = {
  logged: false,
  userInfo: {},
};

export default function SignInReducer(state = signInit, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return Object.assign({}, state, {logged: true});
    case types.SIGN_OUT:
      return Object.assign({}, state, {logged: false});
    default:
      return state;
  }
}