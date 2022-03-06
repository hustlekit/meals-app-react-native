import React from "react";
import { Item } from "react-navigation-header-buttons";

const HeaderButtonSave = props => {
	return (
		<Item title={ 'Save' } iconName={ 'ios-save' } onPress={ props.handleSave }/>
	)
};

export default HeaderButtonSave;