import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Div } from "react-native-magnus";

const Map = ({ lat, lon }) => {
	return (
		<Div w="100%" h="30%" mt={30} borderWidth={1} borderColor="main">
			<MapView
				style={{ height: "100%", width: "100%" }}
				initialRegion={{
					latitude: lat,
					longitude: lon,
					latitudeDelta: 0.0111,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker coordinate={{ latitude: lat, longitude: lon }} />
			</MapView>
		</Div>
	);
};

export default Map;
