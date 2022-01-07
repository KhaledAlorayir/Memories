import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import MemoryScreen from "../screens/MemoryScreen";
import ImageScreen from "../screens/ImageScreen";

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
				<stack.Screen component={MemoryScreen} name="memory" />
				<stack.Screen
					component={ImageScreen}
					name="img"
					options={{ presentation: "modal", headerTitle: "" }}
				/>
			</stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStackNav;
