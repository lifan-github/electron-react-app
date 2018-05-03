import * as types from '../constant/ActionsTypes';

let homeInit = {
  allNews: [],
};

export default function HomeReducers(state = homeInit, action) {
  switch (action.type) {
    case types.GET_ALL_NEWS:
      getAllNews();
      return state;
    default:
      return state;
  }
}

let url1 = 'https://facebook.github.io/react-native/movies.json';
let url3 = 'https://api.douban.com/v2/book/1220562';


function getAllNews() {
  fetch(url3, {
    mode: "no-cors"
  })
    .then((response) => response)
    .then((responseJson) => {
      console.log(responseJson, 'responseJson');
      return responseJson;
    })
    .catch(err => console.log(err, 'err'))
}