import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { HomeScreen } from '../Containers/HomeScreen';
import { ResultScreen } from '../Containers/ResultScreen';
import { SplashScreen } from '../Containers/SplashScreen';

const mainStack = createStackNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: {
				header: null,
			},
		},
		ResultScreen: {
			screen: ResultScreen,
			navigationOptions: {
				header: null,
			},
		},
		SplashScreen: {
			screen: SplashScreen,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		initialRouteName: 'SplashScreen',
	}
);

export default createAppContainer(mainStack);
