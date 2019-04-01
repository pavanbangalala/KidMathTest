import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

class SplashScreen extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('HomeScreen');
		}, 2000);
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
				<StatusBar barStyle="light-content" translucent={false} />
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require('../../assets/splash.png')} size={100} />
					<Text style={{ fontSize: 40, fontWeight: '700', color: '#800080' }}>MATH QUIZ</Text>
				</View>
			</View>
		);
	}
}

export default SplashScreen;
