/*
 * 中间件
 * Date 2016-12-15 
 * Author Yezhenwei
 */
import cookie from 'react-cookie';
import { message} from 'antd';

/**
 * cookie延时中间件
 */
export const logger = store => next => action => {
	/*if(cookie.load("isLogin")){
		cookie.save("isLogin",true,{maxAge: '1800'});
	} else {
		message.error("登录超时，请重新登录");
		browserHistory.push("/login");
		return;
	}*/
	
  let result = next(action)
  return result
}

/**
 * 在 state 更新完成和 listener 被通知之后发送崩溃报告。
 */
export const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}
