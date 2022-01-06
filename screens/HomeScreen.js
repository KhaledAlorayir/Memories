import React, { useEffect, useState } from "react";
import { Div } from "react-native-magnus";
import { FlatList } from "react-native";
import HeaderButton from "../components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { ReadMemories } from "../actions/Memories";
import Memory from "../components/Memory";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import ThemeSwitcher from "../components/ThemeSwitcher";

const HomeScreen = ({ navigation }) => {
	navigation.setOptions({
		headerRight: () => (
			<HeaderButton OnPress={() => navigation.navigate("add")} icon="plus" />
		),
		headerLeft: () => <ThemeSwitcher />,
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ReadMemories());
	}, [dispatch]);

	const { posts } = useSelector((state) => state.Memories);

	//state to see if flatlist is refreshing by pull
	//we can't use isLoading state cuz if its true, it will render the <Loading/> component
	const [isRefreshing, setisRefreshing] = useState(false);

	const Refresh_Handler = async () => {
		setisRefreshing(true);
		await dispatch(ReadMemories());
		setisRefreshing(false);
	};

	//

	//Loading
	const { isLoading } = useSelector((state) => state.Loading);
	if (isLoading && !isRefreshing) return <Loading />;
	//

	return (
		<>
			<ErrorMessage />
			<Div flex={1} bg="bg1" p={10}>
				<FlatList
					data={posts}
					keyExtractor={(item) => item.img}
					renderItem={({ item }) => <Memory item={item} />}
					onRefresh={Refresh_Handler}
					refreshing={isRefreshing}
				/>
			</Div>
		</>
	);
};

export default HomeScreen;
