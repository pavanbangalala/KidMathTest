import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';

class Button extends Component {
	render() {
		return (
			<View
				style={{
					width: '100%',
					height: 45,
					backgroundColor: '#000',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity onPress={() => this.props.onPress()}>
					<Text style={{ color: '#fff', fontWeight: '700' }}>Skip, I can't solve this</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Button;
