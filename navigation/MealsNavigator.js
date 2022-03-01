import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const MealsStack = createNativeStackNavigator();
const FavoritesStack = createNativeStackNavigator();

let TabNavigator;

if ( Platform.OS === 'ios' ) {
	TabNavigator = () => {
		return (
			<Tab.Navigator
				screenOptions={ {
					headerShown: false,
					tabBarActiveTintColor: Colors.secondaryColor
				} }
			>
				<Tab.Screen
					name={ 'Meals' }
					component={ MealsStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 25 } color={ tabInfo.color }/>
						}
					} }
				/>
				<Tab.Screen
					name={ 'Favorites' }
					component={ FavoritesStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 25 } color={ tabInfo.color }/>
						}
					} }
				/>
			</Tab.Navigator>
		)
	}
} else if ( Platform.OS === 'android' ) {
	TabNavigator = () => {
		return (
			<Tab.Navigator
				activeColor={ 'white' }
				shifting={ true }
				barStyle={ {
					backgroundColor: Colors.primaryColor
				} }
			>
				<Tab.Screen
					name={ 'Meals' }
					component={ MealsStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-restaurant' } size={ 25 } color={ tabInfo.color }/>
						},
						tabBarColor: Colors.primaryColor
					} }
				/>
				<Tab.Screen
					name={ 'Favorites' }
					component={ FavoritesStackNavigator }
					options={ {
						tabBarIcon: (tabInfo) => {
							return <Ionicons name={ 'ios-star' } size={ 25 } color={ tabInfo.color }/>
						},
						tabBarColor: Colors.secondaryColor
					} }
				/>
			</Tab.Navigator>
		)
	}
}

function MealsTabNavigator() {
	return (
		<NavigationContainer>
			<TabNavigator/>
		</NavigationContainer>
	)
}

function MealsStackNavigator() {
	return (
		<MealsStack.Navigator
			initialRouteName={ 'Categories' }
			screenOptions={ {
				headerStyle: {
					backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
				},
				headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
				headerTitleAlign: 'center'
			} }
		>
			<MealsStack.Screen
				name={ 'Categories' }
				component={ CategoriesScreen }
				options={ {
					title: 'Meal Categories',
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

export default MealsTabNavigator;