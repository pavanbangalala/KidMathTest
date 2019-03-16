import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './Styles';
import { Icon } from 'react-native-elements';

class Option extends Component {
	showImageOrIcon = (enumval, text) => {
		switch (enumval) {
			case 0:
				return (
					<Text style={{ color: this.props.textColor, fontSize: this.props.textSize }}>
						{this.props.text}
					</Text>
				);
			case 1:
				return <Icon name="check" size={40} color="#fff" type="font-awesome" />;
			case 2:
				return <Icon name="remove" size={40} color="#fff" type="font-awesome" />;
			default:
				return (
					<Text style={{ color: this.props.textColor, fontSize: this.props.textSize }}>
						{this.props.text}
					</Text>
				);
		}
	};
	render() {
		const { bkColor, index } = this.props;
		return (
			<TouchableOpacity onPressOut={() => this.props.onPress(index)}>
				<View
					style={[
						Styles.gridSize,
						{
							flex: 1,
							backgroundColor: bkColor,
							justifyContent: 'center',
							alignItems: 'center',
							fontWeight: '600',
							fontStyle: 'bold',
						},
					]}
				>
					{this.showImageOrIcon(this.props.showImage, this.props.text)}
				</View>
			</TouchableOpacity>
		);
	}
}

export default Option;
