import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Question extends Component {
	render() {
		const { leftOperand, rightOperand, operator } = this.props;
		return (
			<View style={{ flexDirection: 'row', flex: 1, backgroundColor: '#000' }}>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'flex-end',
						width: '45%',
						height: '100%',
						marginRight: 4,
					}}
				>
					<Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>{leftOperand}</Text>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center', width: '10%', height: '100%' }}>
					<Text style={{ color: '#fff', fontSize: 32, fontWeight: '600', textAlign: 'center' }}>
						{operator}
					</Text>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'flex-start',
						width: '45%',
						height: '100%',
						marginLeft: 4,
					}}
				>
					<Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}> {rightOperand}</Text>
				</View>
			</View>
		);
	}
}

export default Question;
