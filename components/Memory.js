import React from "react";
import { Div, Image, Text } from "react-native-magnus";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { DeleteMemory } from "../actions/Memories";
import { Alert } from "react-native";

const Memory = ({ item, navigation }) => {
	const dispatch = useDispatch();

	const DeleteHandler = () => {
		Alert.alert(
			"Delete memory!",
			"Are you sure that you want to delete the memory?",
			[
				{ text: "Cancel", onPress: () => {}, style: "cancel" },
				{
					text: "Delete",
					onPress: () => {
						dispatch(DeleteMemory(item.img));
					},
					style: "destructive",
				},
			]
		);
	};

	const NavigateHandler = () => {
		navigation.navigate("memory", { item });
	};

	const Addarr = item.address.split("&");
	const [hood, city, country] = Addarr;

	return (
		<TouchableOpacity onPress={NavigateHandler} onLongPress={DeleteHandler}>
			<Div
				w="100%"
				bg="main"
				mb={20}
				py={10}
				px={20}
				flexDir="row-reverse"
				justifyContent="space-between"
				alignItems="center"
				shadow="sm"
				rounded={10}
			>
				<Div shadow="lg">
					<Div rounded="circle" overflow="hidden">
						<Image
							h={110}
							w={110}
							source={{
								uri: item.img,
							}}
						/>
					</Div>
				</Div>
				<Div>
					<Text mb={5} fontWeight="bold" color="text1" fontSize="xl">
						{item.title}
					</Text>
					<Text color="text2" fontSize="sm">
						{hood + " " + city + ", " + country}
					</Text>
				</Div>
			</Div>
		</TouchableOpacity>
	);
};

export default Memory;
