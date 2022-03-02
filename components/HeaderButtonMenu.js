import React from "react";
import { Item } from "react-navigation-header-buttons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const HeaderButtonMenu = props => {
	const navigation = useNavigation();
	return (
		<Item title={ 'Menu' } iconName={ 'ios-menu' } onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer) }/>
	)
};

export default HeaderButtonMenu;