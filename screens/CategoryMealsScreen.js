import React from 'react';
import { Text, View, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
	const catId = props.route.params.categoryId;
	const availableMeals = useSelector(state => state.meals.filteredMeals);
	const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
	
	return (
		<MealList listData={ displayedMeals } navigation={ props.navigation }/>
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
