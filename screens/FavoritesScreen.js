import React, { useLayoutEffect } from 'react';
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import HeaderButtonsLeft from "../components/HeaderButtonsLeft";

const FavoritesScreen = props => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: HeaderButtonsLeft
        })
    }, [props.navigation]);
    
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    
    return (
        <MealList
            listData={ favMeals }
            navigation={ props.navigation }
        />
    );
};

export default FavoritesScreen;
