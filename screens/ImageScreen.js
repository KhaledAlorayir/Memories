import React from "react";
import { Div } from "react-native-magnus";
import ImageViewer from "react-native-image-zoom-viewer";
import Loading from "../components/Loading";

const ImageScreen = ({ route }) => {
	const { img } = route.params;

	const Image = [{ url: img }];

	return (
		<Div flex={1}>
			<ImageViewer imageUrls={Image} loadingRender={() => <Loading />} />
		</Div>
	);
};

export default ImageScreen;
