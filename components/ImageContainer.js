import React from "react";
import { Div, Image } from "react-native-magnus";

const ImageContainer = ({ img, height, mt }) => {
	return (
		<Div
			h={height}
			mt={mt}
			alignItems="center"
			borderWidth={2}
			borderColor="main"
			overflow="hidden"
			rounded={10}
		>
			<Image
				h="100%"
				w="100%"
				source={{
					uri: img,
				}}
			/>
		</Div>
	);
};

export default ImageContainer;
