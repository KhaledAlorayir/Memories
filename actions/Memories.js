import * as FileSystem from "expo-file-system";
import Post from "../model/Post";
import { Create, Read, Delete } from "../database/DB";
import { GOOGLE_API } from "@env";

export const SubmitMemory = (Formdata) => async (dispatch) => {
	try {
		dispatch({ type: "START_LOADING" });

		//Moving the file from cache to app dirctory
		const fileName = Formdata.img.split("/").pop();
		const newPath = FileSystem.documentDirectory + fileName;

		await FileSystem.moveAsync({
			from: Formdata.img,
			to: newPath,
		});
		//

		//Google API to get address
		const res = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Formdata.loc.lat},${Formdata.loc.lon}&key=${GOOGLE_API}`
		);
		const data = await res.json();

		const NH = data.results[0].address_components[2].short_name;
		const ST = data.results[0].address_components[3].short_name;
		const CO = data.results[0].address_components[6].short_name;

		//const address = data.plus_code.compound_code.split(" ").slice(1).join(" ");
		const address = `${NH}&${ST}&${CO}`;

		const post = new Post(
			Formdata.title,
			newPath,
			Formdata.loc.lat,
			Formdata.loc.lon,
			address
		);

		await Create(post);

		dispatch({
			type: "INSERT",
			payload: post,
		});

		dispatch({ type: "STOP_LOADING" });
	} catch (error) {
		console.log(error);
		dispatch({ type: "SET_ERROR", payload: "an error ouccerd, try later!" });
		dispatch({ type: "STOP_LOADING" });
	}
};

export const ReadMemories = () => async (dispatch) => {
	try {
		dispatch({ type: "START_LOADING" });

		const data = await Read();
		const posts = data.rows._array.reverse();
		dispatch({ type: "READ", payload: posts });

		dispatch({ type: "STOP_LOADING" });
	} catch (error) {
		console.log(error);
		dispatch({ type: "SET_ERROR", payload: "an error ouccerd, try later!" });
		dispatch({ type: "STOP_LOADING" });
	}
};

export const DeleteMemory = (img) => async (dispatch) => {
	try {
		dispatch({ type: "START_LOADING" });

		//delete record from redux and SQLite
		await Delete(img);
		dispatch({ type: "DELETE", payload: img });

		//Delete the img file from system
		await FileSystem.deleteAsync(img);

		dispatch({ type: "STOP_LOADING" });
	} catch (err) {
		console.log(err);
		dispatch({ type: "SET_ERROR", payload: "an error ouccerd, try later!" });
		dispatch({ type: "STOP_LOADING" });
	}
};
