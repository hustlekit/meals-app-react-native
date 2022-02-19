import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

import Category from "../models/Category";

const CategoriesScreen = props => {
    const renderGridItem = ( { item } ) => {
        return (
            <TouchableOpacity style={ styles.gridItem } onPress={ () => {
                props.navigation.navigate( 'CategoryMeals', { categoryId: item.id } )
            } }>
                <View>
                    <Text>{ item.title }</Text>
                </View>
            </TouchableOpacity>
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

const styles = StyleSheet.create( {
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
} );

export default CategoriesScreen;
