/*
 * User Action
 * Date 2016-12-15 
 * Author Yezhenwei
 */
export const USER_LIST = 'USER_LIST';//用户列表
export const USER_INFO = 'USER_INFO';//用户信息
export const LOGIN_USER = 'LOGIN_USER';//部门列表
import {get,post} from '../../../api/BaseAction';
import {Host} from '../../../api/Host';
const type = null;
export function login(data,callback) {
	return post(`${Host}login/login`, data , callback, (json)=> {
		return {
			type: null,
		}
	})
}

export function userInfo(data,callback) {
	return get(`${Host}user/info`, data , callback, (json)=> {
		return {
			type: USER_INFO,
			json
		}
	})
}