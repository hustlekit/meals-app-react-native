import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButtonsLeft from "../components/HeaderButtonsLeft";

const CategoriesScreen = (props) => {
	useLayoutEffect(() => {
		props.navigation.setOptions({
			headerLeft: HeaderButtonsLeft
		})
	}, [props.navigation]);
	
	const renderGridItem = ({ item }) => {
		return (
			<CategoryGridTile
				title={ item.title }
				color={ item.color }
				onSelect={ () => {
					props.navigation.navigate('CategoryMeals', { title: item.title, categoryId: item.id });
				} }
			/>
		)
	}
	
	return (
		<FlatList
			numColumns={ 2 }
			data={ CATEGORIES }
			renderItem={ renderGridItem }
		/>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoriesScreen;
