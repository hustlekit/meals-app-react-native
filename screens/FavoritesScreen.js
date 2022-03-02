import React, { useLayoutEffect } from 'react';

import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";
import HeaderButtonsLeft from "../components/HeaderButtonsLeft";

const FavoritesScreen = props => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: HeaderButtonsLeft
        })
    }, [props.navigation]);
    
    const favMeals = MEALS.filter(meal => meal.id === 1 || meal.id === 6);
    
    return (
        <MealList
            listData={ favMeals }
            navigation={ props.navigation }
        />
    );
};

export default FavoritesScreen;
