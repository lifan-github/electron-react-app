import * as types from '../constant/ActionsTypes';
/*import Mock from "mockjs";

let url = 'http://rapapi.org/mockjs/17332/api/list';
export function allNews(){
  return dispatch => {
    // loadingShow();
    fetch(url + '?pageSize='+ 100 + '&pageNum=' + 1 + '&accessToken=' + '123456789')
      .then((response) => response.json())
      .then((responseJson) => {
        let news = Mock.mock(responseJson);
        console.log(news,'news');
        dispatch(getAllNews(news));
      })
      .catch(err => {
        console.log(err, 'err')
      })
  }
}*/

//获取所有新闻
export function getAllNews(data) {
  return {
    type: types.GET_ALL_NEWS,
    data
  }
}