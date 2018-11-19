import * as types from '../constant/ActionsTypes';
import axios from 'axios';
import config from "../../utils/config";


export function getMusic() {
  return dispatch => {
    axios.get(config.url, {
      params: {
        pageToken: 1,
        kw: config.kw,
        apikey: config.apikey
      },
      method: 'get',
      timeout: 6000,
      responseType: 'json',
    })
      .then(res => {
        console.log(res,'res')
        if(res.status === 200){
          dispatch(getAllMusic(res.data.data))
        }
      })
      .catch(err => {
        console.log(err,'err')
      })
  }
}




//获取所有新闻
export function getAllMusic(data) {
  return {
    type: types.GET_ALL_MUSIC,
    data
  }
}