import React from "react";
import { Alert } from "react-native";
import { Button } from "react-native-magnus";
import * as ImagePicker from "expo-image-picker";

const TakeImage = ({ setFormData }) => {
	const ImgHandler = async () => {
		try {
			const allowed = await ImagePicker.requestCameraPermissionsAsync();

			if (!allowed.granted)
				return Alert.alert("Permission to use the camera is not allowed!");

			const image = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				quality: 1,
			});

			if (!image.cancelled) {
				setFormData((state) => ({ ...state, img: image.uri }));
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Button
			onPress={ImgHandler}
			rounded="circle"
			px="xl"
			py="lg"
			bg="extra"
			borderWidth={1}
			borderColor="main"
			fontWeight="700"
			flex={0.1}
		>
			📸
		</Button>
	);
};

export default TakeImage;
