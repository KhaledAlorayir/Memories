import React from "react";
import { Input } from "react-native-magnus";

const TextInput = ({ value, onChangeText }) => {
	return (
		<Input
			placeholder="Title"
			p={10}
			focusBorderColor="pink600"
			flex={0.8}
			value={value}
			onChangeText={onChangeText}
			borderColor="pink400"
			color="pink600"
		/>
	);
};

export default TextInput;
