import React from "react";
import { Input } from "react-native-magnus";

const TextInput = ({ value, onChangeText }) => {
	return (
		<Input
			placeholder="Title"
			p={10}
			focusBorderColor="sec"
			flex={0.8}
			value={value}
			onChangeText={onChangeText}
			borderColor="main"
			color="black"
		/>
	);
};

export default TextInput;
