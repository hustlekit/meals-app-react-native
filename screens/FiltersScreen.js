import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, Switch, Platform } from 'react-native';

import Colors from "../constants/Colors";

import HeaderButtonsLeft from "../components/HeaderButtonsLeft";
import HeaderButtonsRight from "../components/HeaderButtonsRight";
import DefaultText from "../components/DefaultText";

const FilterSwitch = props => {
	return (
		<View style={ styles.filterContainer }>
			<DefaultText>{ props.label }</DefaultText>
			<Switch
				value={ props.value }
				onValueChange={ props.onChange }
				trackColor={ { true: Colors.secondaryColor } }
				thumbColor={ Platform.OS === 'android' ? Colors.secondaryColor : '' }
			/>
		</View>
	)
}

const FiltersScreen = props => {
	const { navigation } = props;
	
	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	
	useEffect(() => {
		props.navigation.setOptions({
			headerLeft: HeaderButtonsLeft,
			headerRight: () => <HeaderButtonsRight save handleSave={ saveFilters }/>
		});
	});
	
	const saveFilters = useCallback(
		() => {
			const appliedFilters = {
				glutenFree: isGlutenFree,
				lactoseFree: isLactoseFree,
				vegetarian: isVegetarian,
				vegan: isVegan,
			}
		}, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);
	
	return (
		<View style={ styles.root }>
			<Text style={ styles.titleText }>Available Filters</Text>
			<FilterSwitch label={ 'Gluten-free' } value={ isGlutenFree }
			              onChange={ newValue => setIsGlutenFree(newValue) }/>
			<FilterSwitch label={ 'Lactose-free' } value={ isLactoseFree }
			              onChange={ newValue => setIsLactoseFree(newValue) }/>
			<FilterSwitch label={ 'Vegetarian' } value={ isVegetarian }
			              onChange={ newValue => setIsVegetarian(newValue) }/>
			<FilterSwitch label={ 'Vegan' } value={ isVegan } onChange={ newValue => setIsVegan(newValue) }/>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center'
	},
	titleText: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 10
	}
});

export default FiltersScreen;
