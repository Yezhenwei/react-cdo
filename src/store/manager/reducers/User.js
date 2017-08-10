/*
 * 用户Reducer
 * Date 2016-12-15 
 * Author Yezhenwei
 */
import { USER_LIST, USER_INFO, LOGIN_USER } from '../actions/User'

const initeValue = {
		current:1,    //当前页数
		pageSize:10,  //每页条数
		total:0,      //数据总量
		list:[]       //列表数据
};


export const UserInfo = (state = {}, action) => {
  switch (action.type) {
    case USER_INFO:
      return Object.assign({}, state, action.json)
    default:
      return state
  }
}

export const Login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, action.json)
    default:
      return state
  }
}