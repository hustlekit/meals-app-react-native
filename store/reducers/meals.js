import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
	switch ( action.type ) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
			if ( existingIndex >= 0 ) {
				const updatedFavMeals = [ ...state.favoriteMeals ];
				updatedFavMeals.splice(existingIndex, 1);
				return {
					...state,
					favoriteMeals: updatedFavMeals
				};
			} else {
				return {
					...state,
					favoriteMeals: state.favoriteMeals.concat(state.meals.find(meal => meal.id === action.mealId))
				}
			}
		default:
			return state;
	}
};

export default mealsReducer;