import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-magnus";
import Nav from "./navigation/MainStackNav";
import Theme from "./constants/Theme";

//redux
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Memories from "./reducers/Memories";
import Error from "./reducers/Error";
import Loading from "./reducers/Loading";

//init SQLite DB
import { Init } from "./database/DB";
Init();

const reducers = combineReducers({
	Memories,
	Error,
	Loading,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnchancer(applyMiddleware(thunk)));
//

export default function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={Theme.light}>
				<Nav />
				<StatusBar style="auto" />
			</ThemeProvider>
		</Provider>
	);
}


