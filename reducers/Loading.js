const InitalState = { isLoading: false };

export default (state = InitalState, action) => {
	switch (action.type) {
		case "START_LOADING":
			return { ...state, isLoading: true };
		case "STOP_LOADING":
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
