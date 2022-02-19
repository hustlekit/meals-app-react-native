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
            <Stack.Navigator initialRouteName={ 'Categories' }>
                <Stack.Screen
                    name={ 'Categories' }
                    component={ CategoriesScreen }
                    options={ {
                        title: 'Meal Categories',
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                        },
                        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
                    } }
                />
                <Stack.Screen
                    name={ 'CategoryMeals' }
                    component={ CategoryMealsScreen }
                />
                <Stack.Screen
                    name={ 'MealDetails' }
                    component={ MealDetailsScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;