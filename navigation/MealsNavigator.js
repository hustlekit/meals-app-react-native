import React from "react";
import { Platform } from "react-native";
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
				headerShown: false
			} }
		>
			<DrawerNavigator.Screen
				name={ 'FavoritesDrawer' }
				component={ BottomTabNavigator }
			/>
			<DrawerNavigator.Screen
				name={ 'Filters' }
				component={ FiltersStackNavigator }
			/>
		</DrawerNavigator.Navigator>
	)
}

let BottomTabNavigator;

if ( Platform.OS === 'ios' ) {
	BottomTabNavigator = () => {
		return (
			<BottomTab.Navigator
				screenOptions={ {
					headerShown: false,
					tabBarActiveTintColor: Colors.secondaryColor
				} }
			>
				<BottomTab.Screen
					name={ 'Meals' }
					component={ MealsStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 25 } color={ tabInfo.color }/>
						}
					} }
				/>
				<BottomTab.Screen
					name={ 'Favorites' }
					component={ FavoritesStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 25 } color={ tabInfo.color }/>
						}
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
				barStyle={ {
					backgroundColor: Colors.primaryColor
				} }
			>
				<BottomTab.Screen
					name={ 'Meals' }
					component={ MealsStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 25 } color={ tabInfo.color }/>
						},
						tabBarColor: Colors.primaryColor
					} }
				/>
				<BottomTab.Screen
					name={ 'Favorites' }
					component={ FavoritesStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 25 } color={ tabInfo.color }/>
						},
						tabBarColor: Colors.secondaryColor
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