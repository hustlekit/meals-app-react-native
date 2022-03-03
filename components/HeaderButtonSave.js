import React from "react";
import { Item } from "react-navigation-header-buttons";
import { useNavigation, useRoute } from "@react-navigation/native";

const HeaderButtonSave = props => {
	const navigation = useNavigation();
	const route = useRoute();
	
	return (
		<Item title={ 'Save' } iconName={ 'ios-save' } onPress={ () => props.handleSave }/>
	)
};

export default HeaderButtonSave;