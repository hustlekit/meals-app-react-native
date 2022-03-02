import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HeaderButtonsLeft from "../components/HeaderButtonsLeft";

const FiltersScreen = props => {
    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: HeaderButtonsLeft
        })
    })
    
    return (
        <View style={ styles.root }>
            <Text>The Filters Screen!</Text>
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

export default FiltersScreen;
