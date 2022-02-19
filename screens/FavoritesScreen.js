import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={ styles.root }>
            <Text>The Favorites Screen!</Text>
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

export default FavoritesScreen;
