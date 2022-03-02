import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButtonCustom from "./HeaderButtonCustom";
import HeaderButtonStar from "./HeaderButtonStar";


const HeaderButtonsRight = props => {
	return (
		<HeaderButtons HeaderButtonComponent={ HeaderButtonCustom }>
			<HeaderButtonStar/>
		</HeaderButtons>
	)
};

export default HeaderButtonsRight;