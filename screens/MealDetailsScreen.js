import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HeaderButtonsRight from "../components/HeaderButtonsRight";

const MealDetailsScreen = props => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: HeaderButtonsRight
        })
    }, [props.navigation]);
    
    const item = props.route.params.item;
    
    return (
        <View style={ styles.root }>
            <Text>The Meal Details Screen!</Text>
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

export default MealDetailsScreen;
