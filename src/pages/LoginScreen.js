import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'
import * as loginAction from '../actions/loginAction'
import LoginScreen from '../component/login';

const resetAction = NavigationActions.reset({
    index:0,
    actions:[
        NavigationActions.navigate({routeName:'MainScreen'})
    ]
})

class LoginPage extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : '登录页',
    });

    shouldComponentUpdate(nextProps,nextState){
        if (nextProps.status === '登陆成功' && nextProps.isSuccess){
            this.props.navigation.dispatch(resetAction)
            // console.log('======','登陆成功','======')
            return false;
        }
        return true;
    }

    render() {
        const {login} = this.props;
		return (
			<View style={{flex:1}}>
				<LoginScreen 
					status = {this.props.status}
					clicks = {()=>login()}
				/>
			</View>
		)
	}
	onclick(){
		alert('onClick')
	}
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default connect(//将页面与store内的state、action关联在一起，实现视图部分与逻辑处理部分的关联
    (state)=>{
        console.log('state',state)
        return {
        status:state.loginIn.status,
        isSuccess:state.loginIn.isSuccess,
        user:state.loginIn.user
    }},
    (dispatch)=>({
        login:()=>dispatch(loginAction.login())
    })
)(LoginPage)