import React, { useState, useContext } from "react";
import { Div, Text, Image, ScrollDiv, ThemeContext } from "react-native-magnus";
import TextInput from "../components/TextInput";
import TakeImage from "../components/TakeImage";
import TakeLocation from "../components/TakeLocation";
import HeaderButton from "../components/HeaderButton";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import ImageContainer from "../components/ImageContainer";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SubmitMemory } from "../actions/Memories";

const AddScreen = ({ navigation }) => {
	const [FormData, setFormData] = useState({
		title: "",
		img: null,
		lat: 0,
		lon: 0,
	});

	const dispatch = useDispatch();

	const SubmitHandler = async () => {
		if (FormData.title.trim().length === 0)
			return Alert.alert("Pleses Enter a Title!");

		if (!FormData.img) return Alert.alert("Pleses Take An Image!");

		if (FormData.lat === 0 || FormData.lon === 0)
			return Alert.alert(
				"Pleses Allow Memories to see your location or wait till it gets loaded :)"
			);

		await dispatch(SubmitMemory(FormData));
		navigation.navigate("home");
	};

	navigation.setOptions({
		headerRight: () => <HeaderButton icon="check" OnPress={SubmitHandler} />,
	});

	//Loading
	const { isLoading } = useSelector((state) => state.Loading);
	if (isLoading) return <Loading />;
	//

	//Theme state to get emoji
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<>
			<ErrorMessage />
			<TakeLocation setFormData={setFormData} />
			<ScrollDiv px={16} bg="bg2" contentContainerStyle={{ flex: 1 }}>
				<Div alignItems="center" mt={32}>
					<Text mb={32} fontSize="2xl" fontWeight="bold" color="sec">
						Add a New Memory {theme.name === "light" ? "😻" : "🐧"}
					</Text>

					<Div
						flexDir="row"
						w="100%"
						justifyContent="space-between"
						alignItems="center"
					>
						<TextInput
							value={FormData.title}
							onChangeText={(text) =>
								setFormData((state) => ({ ...state, title: text }))
							}
						/>
						<TakeImage setFormData={setFormData} />
					</Div>
				</Div>
				{FormData.img && (
					<ImageContainer img={FormData.img} height="60%" mt={30} />
				)}
			</ScrollDiv>
		</>
	);
};

export default AddScreen;
