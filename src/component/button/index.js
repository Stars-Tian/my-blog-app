import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { layout,font } from '../../assets/styles';
export default class Button extends Component {
  render() {
	return (
	  <View style ={{ paddingTop: layout.deviceHeight * 0.1}}>
		<TouchableOpacity onPress={()=>this.props.onClick()}>
			<View style={{height: 50, width: 200, backgroundColor: '#00f', alignItems:'center', justifyContent:'center'}}>
				<Text style={{fontSize: font.h3}}>{this.props.text}</Text>
			</View>
		</TouchableOpacity>
	  </View>
	)
  }
}