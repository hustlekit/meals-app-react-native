import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
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
