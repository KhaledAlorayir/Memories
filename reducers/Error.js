const initalstate = { mess: "", isError: false };

export default (state = initalstate, action) => {
	switch (action.type) {
		case "SET_ERROR":
			return { ...state, mess: action.payload, isError: true };
		case "CLEAR_ERROR":
			return { ...state, mess: "", isError: false };
		default:
			return state;
	}
};
