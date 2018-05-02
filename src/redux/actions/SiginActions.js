import * as types from '../constant/ActionsTypes';

//用户登录
export function signIn(data) {
  return {
    type: types.SIGN_IN,
    data
  }
}

//用户退出登录
export function signOut() {
  return {
    type: types.SIGN_OUT
  };
}
