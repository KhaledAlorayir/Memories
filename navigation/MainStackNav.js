import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";

const MainStackNav = () => {
	const stack = createStackNavigator();

	return (
		<NavigationContainer>
			<stack.Navigator>
				<stack.Screen
					component={HomeScreen}
					name="home"
					options={{ headerTitle: "Memories!" }}
				/>
				<stack.Screen
					component={AddScreen}
					name="add"
					options={{ headerTitle: "New Memory!" }}
				/>
			</stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStackNav;
