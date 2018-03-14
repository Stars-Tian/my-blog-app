'use strict'

import * as types from '../constants/loginType'
import api from '../server/api/';
// 模拟用户信息
let user = {
    name : 'zhangsan',
    age : 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export const login = ()=> {
    return dispatch => {
        dispatch(isLogining());
        let result =api.login()
            .then((res) => {
				console.log('res--',res);
                dispatch(loginSuccess(true, user)); // 登录请求完成
            }).catch((e) => {
                dispatch(loginError(false)); // 登录请求出错
            })
    }
}

function isLogining() {
    return {
        type : types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type : types.LOGIN_IN_DONE,
        user : user,
    }
}

function loginError(isSuccess) {
    console.log('error');
    return {
        type : types.LOGIN_IN_ERROR,
    }
}