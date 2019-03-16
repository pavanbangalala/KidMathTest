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
}));
