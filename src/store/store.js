/*
 * 前端数据仓库
 * Date 2016-12-15 
 * Author Yezhenwei
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {UserInfo, Login} from './manager/reducers/User';
import {value} from './manager/reducers/Operate';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import {logger,crashReporter} from './cookieMiddleware';

const loggerMiddleware = createLogger({collapsed:true});

 let store = createStore(
    combineReducers({
    		//用户管理
        UserInfo, Login,
        value
    }),
    applyMiddleware(thunkMiddleware, loggerMiddleware, logger, crashReporter)
);

export default store;
