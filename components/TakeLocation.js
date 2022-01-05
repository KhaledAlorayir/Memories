import React, { useEffect } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const TakeLocation = ({ setFormData }) => {
	const LocationHandler = async () => {
		try {
			let allowed = await Location.requestForegroundPermissionsAsync();

			if (!allowed.granted) {
				Alert.alert("Permission to use the location is not allowed!");
				setFormData((state) => ({ ...state, loc: { lat: 0, lon: 0 } }));
				return;
			}

			const loc = await Location.getCurrentPositionAsync();
			setFormData((state) => ({
				...state,
				loc: { lat: loc.coords.latitude, lon: loc.coords.longitude },
			}));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		LocationHandler();
	}, []);

	return null;
};

export default TakeLocation;
