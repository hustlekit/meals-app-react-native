import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Category from "../models/Category";
import { CATEGORIES } from "../data/dummy-data";
import categoriesScreen from "./CategoriesScreen";

const CategoryMealsScreen = props => {
    return (
        <View style={ styles.root }>
            <Text>The Category Meals Screen!</Text>
            <Button title={ 'Go to meal details' } onPress={ () => {
                props.navigation.navigate( 'MealDetails' );
            } }/>
        </View>
    );
};

const styles = StyleSheet.create( {
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
} );

export default CategoryMealsScreen;
