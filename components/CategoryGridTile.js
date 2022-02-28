import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
	let TouchableCmp = TouchableOpacity;
	
	if ( Platform.OS === 'android' && Platform.Version >= 21 ) {
		TouchableCmp = TouchableNativeFeedback;
	}
	return (
		<View style={ styles.gridItem }>
			<TouchableCmp
				style={ styles.touchableCmp }
				onPress={ props.onSelect }
			>
				<View style={ { ...styles.container, ...{ backgroundColor: props.color } } }>
					<Text style={ styles.titleText } numberOfLines={ 2 }>{ props.title }</Text>
				</View>
			</TouchableCmp>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
		elevation: 3
	},
	touchableCmp: {
		flex: 1
	},
	container: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.6,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	titleText: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		textAlign: 'right'
	}
});

export default CategoryGridTile;
