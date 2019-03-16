import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import Styles from './Styles';

class InfoContainer extends Component {
	render() {
		const { text, color, backgroundColor, infoSize, unitsSize, bylineSize, isTime, units, byline } = this.props;
		return (
			<View style={Styles.container}>
				<View style={[Styles.viewContainer, { backgroundColor: backgroundColor }]}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ color: color, fontSize: infoSize, fontWeight: '600', marginHorizontal: 8 }}>
							{text}
						</Text>
						{isTime && (
							<Text style={{ color: color, fontSize: unitsSize, alignItems: 'center' }}>{units}</Text>
						)}
					</View>
					<Text style={{ color: color, fontSize: bylineSize, paddingRight: isTime ? 32 : 0 }}>{byline}</Text>
				</View>
			</View>
		);
	}
}

export default InfoContainer;
