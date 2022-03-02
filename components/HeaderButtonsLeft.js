import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButtonCustom from "./HeaderButtonCustom";
import HeaderButtonMenu from "./HeaderButtonMenu";

const MealDetailsHeaderButtonsLeft = props => {
	return (
		<HeaderButtons HeaderButtonComponent={ HeaderButtonCustom }>
			<HeaderButtonMenu/>
		</HeaderButtons>
	)
};

export default MealDetailsHeaderButtonsLeft;