import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const GRIDWIDTH = Dimensions.get('window').width / 2;

export default (Styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textColor: {
		color: '#fff',
	},
	divider: {
		width: StyleSheet.hairlineWidth,
		backgroundColor: '#333333',
		height: 80,
	},
	gridSize: {
		height: GRIDWIDTH,
		width: GRIDWIDTH,
	},
	headerStyle: {
		height: 70,
		paddingTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	headerTitleStyle: {
		color: '#fff',
		fontSize: 32,
		fontWeight: 'bold',
	},
}));
