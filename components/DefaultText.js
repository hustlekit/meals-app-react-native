import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = props => {
	return (
		<Text style={ styles.root }>{props.children}</Text>
	)
}

const styles = StyleSheet.create({
	root: {
		fontFamily: 'open-sans'
	}
})

export default DefaultText;