import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={ 'Categories' }
				screenOptions={ {
					headerStyle: {
						backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
					},
					headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
				} }
			>
				<Stack.Screen
					name={ 'Categories' }
					component={ CategoriesScreen }
					options={ {
						title: 'Meal Categories',
					} }
				/>
				<Stack.Screen
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
				<Stack.Screen
					name={ 'MealDetails' }
					component={ MealDetailsScreen }
					options={
						({ route }) => (
							{
								title: 'title'
							}
						)
					}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default MyStack;