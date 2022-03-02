import React from "react";
import { Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const DrawerNavigator = createDrawerNavigator();
const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const MealsStack = createNativeStackNavigator();
const FavoritesStack = createNativeStackNavigator();
const FiltersStack = createNativeStackNavigator();

function MainDrawerNavigator() {
	return (
		<DrawerNavigator.Navigator
			screenOptions={ {
				headerShown: false,
				drawerActiveTintColor: Colors.secondaryColor,
				drawerLabelStyle: {
					fontFamily: 'open-sans-bold'
				}
			} }
		>
			<DrawerNavigator.Screen
				name={ 'Meals' }
				component={ BottomTabNavigator }
				options={ {
					drawerLabel: 'Meals'
				} }
			/>
			<DrawerNavigator.Screen
				name={ 'Filters' }
				component={ FiltersStackNavigator }
				options={ {
					drawerLabel: 'Filters'
				} }
			/>
		</DrawerNavigator.Navigator>
	)
}

let BottomTabNavigator;

if ( Platform.OS === 'ios' ) {
	BottomTabNavigator = () => {
		return (
			<BottomTab.Navigator
				activeColor={ 'white' }
				shifting={ true }
			>
				<BottomTab.Screen
					name={ 'MealsTab' }
					component={ MealsStackNavigator }
					title={ 'Meals' }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 22 } color={ tabInfo.color }/>
						},
						tabBarLabelStyle: {
							fontFamily: 'open-sans-bold'
						},
						tabBarLabel: <Text style={ { fontFamily: 'open-sans' } }>Meals</Text>
					} }
				/>
				<BottomTab.Screen
					name={ 'FavoritesTab' }
					component={ FavoritesStackNavigator }
					title={ 'Favorites' }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 22 } color={ tabInfo.color }/>
						},
						tabBarLabelStyle: {
							fontFamily: 'open-sans-bold'
						},
						tabBarLabel: <Text style={ { fontFamily: 'open-sans' } }>Favorites</Text>
					} }
				/>
			</BottomTab.Navigator>
		)
	}
} else if ( Platform.OS === 'android' ) {
	BottomTabNavigator = () => {
		return (
			<BottomTab.Navigator
				activeColor={ 'white' }
				shifting={ true }
			>
				<BottomTab.Screen
					name={ 'MealsTab' }
					component={ MealsStackNavigator }
					title={ 'Meals' }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 22 } color={ tabInfo.color }/>
						},
						tabBarLabelStyle: {
							fontFamily: 'open-sans-bold'
						},
						tabBarColor: Colors.primaryColor,
						tabBarLabel: <Text style={ { fontFamily: 'open-sans' } }>Meals</Text>
					} }
				/>
				<BottomTab.Screen
					name={ 'FavoritesTab' }
					component={ FavoritesStackNavigator }
					title={ 'Favorites' }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 22 } color={ tabInfo.color }/>
						},
						tabBarLabelStyle: {
							fontFamily: 'open-sans-bold',
						},
						tabBarColor: Colors.secondaryColor,
						tabBarLabel: <Text style={ { fontFamily: 'open-sans' } }>Favorites</Text>
					} }
				/>
			</BottomTab.Navigator>
		)
	}
}

function MealsStackNavigator() {
	return (
		<MealsStack.Navigator
			initialRouteName={ 'Categories' }
			screenOptions={ {
				headerStyle: {
					backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
				},
				headerTitleStyle: {
					fontFamily: 'open-sans-bold',
				},
				headerBackTitleStyle: {
					fontFamily: 'open-sans'
				},
				contentStyle: {
					alignContent: 'center',
					justifyContent: 'center'
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
				headerTitleAlign: 'center'
			} }
		>
			<MealsStack.Screen
				name={ 'Categories' }
				component={ CategoriesScreen }
				options={ {
					title: 'Meal Categories'
				} }
			/>
			<MealsStack.Screen
				name={ 'CategoryMeals' }
				component={ CategoryMealsScreen }
				options={
					({ route }) => (
						{
							title: route.params.title
						}
					)
				}
			/>
			<MealsStack.Screen
				name={ 'MealDetails' }
				component={ MealDetailsScreen }
				options={
					({ route }) => (
						{
							title: route.params.title
						}
					)
				}
			/>
		</MealsStack.Navigator>
	)
}

function FavoritesStackNavigator() {
	return (
		<FavoritesStack.Navigator
			initialRouteName={ 'Favorites' }
			screenOptions={ {
				headerStyle: {
					backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
				},
				headerTitleStyle: {
					fontFamily: 'open-sans-bold'
				},
				headerBackTitleStyle: {
					fontFamily: 'open-sans'
				},
				contentStyle: {
					alignContent: 'center',
					justifyContent: 'center'
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondaryColor,
				headerTitleAlign: 'center'
			} }
		>
			<FavoritesStack.Screen
				name={ 'FavoritesStackScreen' }
				component={ FavoritesScreen }
				options={ {
					title: 'Favorites'
				} }
			/>
			<FavoritesStack.Screen
				name={ 'MealDetails' }
				component={ MealDetailsScreen }
				options={
					({ route }) => (
						{
							title: route.params.title
						}
					)
				}
			/>
		</FavoritesStack.Navigator>
	)
}

function FiltersStackNavigator() {
	return (
		<FavoritesStack.Navigator
			initialRouteName={ 'FiltersScreen' }
			screenOptions={ {
				headerStyle: {
					backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondaryColor,
				headerTitleAlign: 'center'
			} }
		>
			<FavoritesStack.Screen
				name={ 'FiltersScreen' }
				component={ FiltersScreen }
				options={ {
					title: 'Filters'
				} }
			/>
		</FavoritesStack.Navigator>
	)
}

function MealsNavigator() {
	return (
		<NavigationContainer>
			<MainDrawerNavigator/>
		</NavigationContainer>
	)
}

export default MealsNavigator;