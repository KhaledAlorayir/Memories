import React, { useState } from "react";
import { Div, Text, Image, ScrollDiv } from "react-native-magnus";
import TextInput from "../components/TextInput";
import TakeImage from "../components/TakeImage";
import TakeLocation from "../components/TakeLocation";
import HeaderButton from "../components/HeaderButton";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SubmitMemory } from "../actions/Memories";

const AddScreen = ({ navigation }) => {
	const [FormData, setFormData] = useState({
		title: "",
		img: null,
		loc: null,
	});

	const dispatch = useDispatch();

	const SubmitHandler = async () => {
		if (FormData.title.trim().length === 0)
			return Alert.alert("Pleses Enter a Title!");

		if (!FormData.img) return Alert.alert("Pleses Take An Image!");

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

	return (
		<>
			<ErrorMessage />
			<ScrollDiv px={16} bg="pink200" contentContainerStyle={{ flex: 1 }}>
				<Div alignItems="center" mt={32}>
					<Text mb={32} fontSize="2xl" fontWeight="bold" color="pink600">
						Add a New Memory 😻
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
					<TakeLocation setFormData={setFormData} />
				</Div>
				{FormData.img && (
					<Div
						h="50%"
						mt={30}
						alignItems="center"
						borderWidth={2}
						borderColor="pink400"
						overflow="hidden"
						rounded={10}
					>
						<Image
							h="100%"
							w="100%"
							source={{
								uri: FormData.img,
							}}
						/>
					</Div>
				)}
			</ScrollDiv>
		</>
	);
};

export default AddScreen;
