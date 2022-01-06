import React, { useContext } from "react";
import { Toggle, ThemeContext, Text, Div } from "react-native-magnus";

import Themes from "../constants/Theme";

const ThemeSwitcher = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const ToggleHandler = () => {
		if (theme.name === "dark") {
			setTheme(Themes.light);
		} else {
			setTheme(Themes.dark);
		}
	};

	return (
		<Div ml={10} row alignItems="center" justifyContent="space-between" w="90%">
			<Text>😻</Text>
			<Toggle
				h={30}
				w={55}
				circleBg="bg2"
				activeBg="bg1"
				on={theme.name === "dark"}
				onPress={ToggleHandler}
			/>
			<Text>🐧</Text>
		</Div>
	);
};

export default ThemeSwitcher;
