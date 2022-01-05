import React from "react";
import { ActivityIndicator } from "react-native";
import { Div } from "react-native-magnus";

const Loading = () => {
	return (
		<Div flex={1} justifyContent="center" alignItems="center">
			<ActivityIndicator size="large" />
		</Div>
	);
};

export default Loading;
