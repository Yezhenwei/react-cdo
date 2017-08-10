import cookie from 'react-cookie';
import { browserHistory } from 'react-router';


//清除cookie
export function cleanCookie(data){
	cookie.remove(data);
}

//后台判断是否登录
export function isLogin(data){
	const user = cookie.load(data);
		//判断用户是否登录
		if(!user){
			message.error("请先登录系统！")
			browserHistory.push('/login');
		}
}

//前台判断是否登录
export function haveLogin(data){
	const user = cookie.load(data);
		//判断用户是否登录
		if(!user){
			message.error("请先登录系统！")
			browserHistory.push('/login');
		}
}




