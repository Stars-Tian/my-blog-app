import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput
} from 'react-native';
import {layout,font} from '../../assets/styles';
import Botton from '../button';
class LoginScreen extends Component {
	constructor(props){
		super(props);
		this.state={
			userName:'',
			passWd:''
		}
	}
	updateUserName = (text) =>{
		this.setState({
			userName: text
		})
	}
	updatePassWd = (text) =>{
		this.setState({
			passWd: text
		})
	}
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.inputBox}>
					<TextInput 
						style ={ styles.textInput }
						placeholder = '请输入用户名'
						defaultValue = {this.state.userName}
						onChangeText = {this.updateUserName}
						placeholderTextColor="rgba(153,153,153,0.5)"
						secureTextEntry={true}
						underlineColorAndroid="transparent"
					/>
					<TextInput 
						style ={ styles.textInput }
						placeholder = '请输入密码'
						defaultValue = {this.state.passWd}
						onChangeText = {this.updatePassWd}
						placeholderTextColor="rgba(153,153,153,0.5)"
						secureTextEntry= {true}
						underlineColorAndroid="transparent"
					/>
				</View>
				<Botton
					text = '登陆'
					onClick = {()=>this.props.clicks()}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textInput: {
		flex: 1,
		height:45,
		fontSize: font.h4,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 10,
		paddingRight: 10,
		borderWidth: 0,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: 'blue'
	},
	inputBox: {
		height: layout.deviceHeight *0.15,
		width: layout.deviceWidth * 0.7,
		backgroundColor: layout.backColor
	},
    container : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center'
    }
});
export default LoginScreen;