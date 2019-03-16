import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from '../Containers/HomeScreen';
import { ResultScreen } from '../Containers/ResultScreen';
import { SplashScreen } from '../Containers/SplashScreen';

const mainStack = createStackNavigator(
	{
		HomeScreen: {
			screen: HomeScreen,
			navigationOptions: {
				headerTitle: 'Math Test',
				headerStyle: {
					backgroundColor: '#000',
				},
				headerTitleStyle: {
					color: '#fff',
					fontSize: 24,
					fontWeight: '600',
				},
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
