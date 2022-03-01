import React from "react";
import { View, FlatList, StyleSheet} from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
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
				keyExtractor={ item => item.id.toString() }
				data={ props.listData }
				renderItem={ renderMealItem }
				style={ { width: '90%' } }
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MealList;