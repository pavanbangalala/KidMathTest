import React, { Component } from 'react';
import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNExitApp from 'react-native-exit-app';

const SCREENWIDTH = Dimensions.get('window').width;

const messages = [
	'Congratulations, You are a champ.',
	'Good Job, You have done well.',
	'Hmmm..., You can do better.',
	'0h..ooh, That was not good.',
];

class ResultScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: props.navigation.getParam('score', 0),
		};
	}

	getMessage = () => {
		const score = this.state.score;

		if (score >= 26 && score <= 30) {
			return messages[0];
		} else if (score >= 21 && score <= 25) {
			return messages[1];
		} else if (score >= 10 && score <= 20) {
			return messages[2];
		} else {
			return messages[3];
		}
	};

	render() {
		return (
			<LinearGradient
				colors={['#d02090', '#ff1493', '#ff69b4']}
				style={{ flex: 1, backgroundColor: '#000', justifyContent: 'flex-start', alignItems: 'center' }}
			>
				<SafeAreaView>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ marginTop: 32 }}>
							<Text style={{ color: '#fff', fontSize: 40, fontWeight: '600' }}>Score</Text>
						</View>
						<View style={{ marginTop: 20 }}>
							<Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>{this.getMessage()}</Text>
						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
							<View
								style={{
									width: SCREENWIDTH / 2,
									height: SCREENWIDTH / 2,
									borderRadius: SCREENWIDTH / 4,
									borderWidth: 1,
									borderColor: '#fff',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text style={{ color: '#fff', fontSize: 48, fontWeight: '700' }}>3/30</Text>
							</View>
						</View>
						<View
							style={{
								marginTop: 32,
								justifyContent: 'center',
								alignItems: 'center',
								justifyContent: 'flex-end',
								flex: 1,
							}}
						>
							<TouchableOpacity
								style={{ marginVertical: 16 }}
								onPress={() => this.props.navigation.navigate('HomeScreen')}
							>
								<Text
									style={{
										color: '#fff',
										fontSize: 20,
										fontWeight: '600',
										textDecorationLine: 'underline',
									}}
								>
									Try again
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{ marginVertical: 16 }} onPress={() => RNExitApp.exitApp()}>
								<Text
									style={{
										color: '#fff',
										fontSize: 20,
										fontWeight: '600',
										textDecorationLine: 'underline',
									}}
								>
									Exit
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</SafeAreaView>
			</LinearGradient>
		);
	}
}

export default ResultScreen;
