import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButtonCustom from "./HeaderButtonCustom";
import HeaderButtonStar from "./HeaderButtonStar";
import HeaderButtonSave from "./HeaderButtonSave";

const HeaderButtonsRight = props => {
	return (
		<HeaderButtons HeaderButtonComponent={ HeaderButtonCustom }>
			{ props.star && <HeaderButtonStar toggleFavoriteHandler={ props.toggleFavoriteHandler }/> }
			{ props.save && <HeaderButtonSave handleSave={ props.handleSave }/> }
		</HeaderButtons>
	)
};

export default HeaderButtonsRight;