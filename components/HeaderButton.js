import React from "react";
import { Div, Button, Icon } from "react-native-magnus";

const HeaderButton = ({ OnPress, icon }) => {
	return (
		<Div pr={10} mb={5}>
			<Button bg="pink500" rounded="circle" h={40} w={40} onPress={OnPress}>
				<Icon name={icon} color="white" />
			</Button>
		</Div>
	);
};

export default HeaderButton;
