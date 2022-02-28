import React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';

import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
	const catId = props.route.params.categoryId;
	
	const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
	
	const renderMealItem = ({ item }) => {
		return (
			<MealItem
				item={ item }
				onSelectMeal={ () => {
					props.navigation.navigate('MealDetails', { title: item.title, item: item });
				} }
			/>
		)
	};
	
	return (
		<View style={ styles.root }>
			<FlatList
				data={ displayedMeals }
				renderItem={ renderMealItem }
				style={ { width: '90%' } }
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
