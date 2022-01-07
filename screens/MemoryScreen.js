import React from "react";
import { Div, Text, ScrollDiv } from "react-native-magnus";
import ImageContainer from "../components/ImageContainer";
import ErrorMessage from "../components/ErrorMessage";
import HeaderButton from "../components/HeaderButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch } from "react-redux";
import { DeleteMemory } from "../actions/Memories";
import { Alert, TouchableOpacity } from "react-native";
import Map from "../components/Map";

//click on image big
const MemoryScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	dayjs.extend(relativeTime);
	const { item } = route.params;

	navigation.setOptions({
		headerTitle: item.title,
		headerRight: () => <HeaderButton OnPress={DeleteHandler} icon="delete" />,
	});

	const fromNow = dayjs(item.timestamp).fromNow();
	const date = dayjs(item.timestamp).format("DD/MM/YYYY");

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
						navigation.navigate("home");
					},
					style: "destructive",
				},
			]
		);
	};

	const NavigateHandler = () => {
		navigation.navigate("img", { img: item.img });
	};

	return (
		<>
			<ErrorMessage />
			<ScrollDiv bg="bg2" py={10} px={20} contentContainerStyle={{ flex: 1 }}>
				<TouchableOpacity
					style={{ height: "50%", marginTop: 15 }}
					onPress={NavigateHandler}
				>
					<ImageContainer img={item.img} height="100%" />
				</TouchableOpacity>
				<Div w="100%" row justifyContent="space-between" p={10}>
					<Text color="sec" fontWeight="400">
						{date}
					</Text>
					<Text color="sec" fontWeight="400">
						{fromNow}
					</Text>
				</Div>
			</ScrollDiv>
		</>
	);
};

export default MemoryScreen;
