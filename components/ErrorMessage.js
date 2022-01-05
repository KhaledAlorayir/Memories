import React from "react";
import { Div, Button, Text, Icon } from "react-native-magnus";
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = () => {
	const dispatch = useDispatch();
	const { isError, mess } = useSelector((state) => state.Error);

	const CloseMessHandler = () => {
		dispatch({ type: "CLEAR_ERROR" });
	};

	if (!isError) return null;

	return (
		<Div
			w="100%"
			row
			alignItems="center"
			justifyContent="space-between"
			py={10}
			px={20}
			bg="red400"
		>
			<Text fontSize={14} color="gray200" fontWeight="700">
				{mess}
			</Text>
			<Button
				onPress={CloseMessHandler}
				bg="gray200"
				rounded="circle"
				h={40}
				w={40}
			>
				<Icon name="close" color="red400" fontSize={16} />
			</Button>
		</Div>
	);
};

export default ErrorMessage;
