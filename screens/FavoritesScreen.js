import React from 'react';

import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 1 || meal.id === 6);
    
    return (
        <MealList
            listData={ favMeals }
            navigation={ props.navigation }
        />
    );
};

export default FavoritesScreen;
