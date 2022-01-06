import React from "react";
import { Div, Button, Icon } from "react-native-magnus";

const HeaderButton = ({ OnPress, icon }) => {
	return (
		<Div pr={10} mb={5}>
			<Button bg="hbtn" rounded="circle" h={40} w={40} onPress={OnPress}>
				<Icon name={icon} color="extra" />
			</Button>
		</Div>
	);
};

export default HeaderButton;
