import React from 'react';
import { Text, View, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
    const catId = props.route.params.categoryId;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    
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
