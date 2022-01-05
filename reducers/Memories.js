const initalstate = { posts: [] };

export default (state = initalstate, action) => {
	switch (action.type) {
		case "INSERT":
			return { ...state, posts: [action.payload, ...state.posts] };
		case "READ":
			return { ...state, posts: action.payload };
		case "DELETE":
			return {
				...state,
				posts: state.posts.filter((item) => item.img !== action.payload),
			};

		default:
			return state;
	}
};
