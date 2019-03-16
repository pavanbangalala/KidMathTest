import { StyleSheet, Dimensions } from 'react-native';
const GRIDWIDTH = Dimensions.get('window').width / 2;
export default StyleSheet.create({
	gridSize: {
		width: GRIDWIDTH,
		height: GRIDWIDTH,
	},
});
