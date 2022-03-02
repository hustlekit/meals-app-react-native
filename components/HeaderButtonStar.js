import React from "react";
import {  Item } from "react-navigation-header-buttons";

const HeaderButtonStar = props => {
	return (
		<Item title={ 'Favorite' } iconName={ 'ios-star' } onPress={ () => console.log('Favorite') }/>
	)
};

export default HeaderButtonStar;