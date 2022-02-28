import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
	ImageBackground
} from 'react-native';

const MealItem = props => {
	let TouchableCmp = TouchableOpacity;
	
	if ( Platform.OS === 'android' && Platform.Version >= 21 ) {
		TouchableCmp = TouchableNativeFeedback;
	}
	
	const { item } = props;
	
	return (
		<View style={ styles.root }>
			<TouchableCmp onPress={ props.onSelectMeal }>
				<View>
					<View style={ { ...styles.mealRow, ...styles.mealHeader } }>
						<ImageBackground source={ { uri: item.imageUrl } } style={ styles.bgImage }>
							<View style={ styles.titleContainer }>
								<Text style={ styles.title } numberOfLines={ 1 }>{ item.title }</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={ { ...styles.mealRow, ...styles.mealDetails } }>
						<Text>{ item.duration }m</Text>
						<Text>{ item.complexity.toUpperCase() }</Text>
						<Text>{ item.affordability.toUpperCase() }</Text>
					</View>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10
	},
	mealRow: {
		flexDirection: 'row'
	},
	mealHeader: {
		height: '85%'
	},
	mealDetails: {
		height: '15%',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	titleContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12,
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		color: 'white',
		textAlign: 'center'
	}
});

export default MealItem;
