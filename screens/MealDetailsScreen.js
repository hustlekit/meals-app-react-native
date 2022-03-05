import React, { useLayoutEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

import HeaderButtonsRight from "../components/HeaderButtonsRight";
import DefaultText from "../components/DefaultText";

const ListItem = props => {
	return (
		<View style={ styles.listItem }>
			<DefaultText>{ props.children }</DefaultText>
		</View>
	)
};

const MealDetailsScreen = props => {
	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerRight: () => <HeaderButtonsRight star/>
		})
	}, [ props.navigation ]);
	
	const item = props.route.params.item;
	
	return (
		<ScrollView>
			<Image source={ { uri: item.imageUrl } } style={ styles.image }/>
			<View style={ styles.details }>
				<DefaultText>{ item.duration }m</DefaultText>
				<DefaultText>{ item.complexity.toUpperCase() }</DefaultText>
				<DefaultText>{ item.affordability.toUpperCase() }</DefaultText>
			</View>
			<Text style={ styles.textTitle }>Ingredients</Text>
			{ item.ingredients.map(ingredient => <ListItem key={ ingredient }>{ ingredient }</ListItem>) }
			<Text style={ styles.textTitle }>Steps</Text>
			{ item.steps.map(step => <ListItem key={ step }>{ step }</ListItem>) }
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	textTitle: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 5,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
});

export default MealDetailsScreen;
