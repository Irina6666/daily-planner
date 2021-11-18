import * as types from "./actionType"

const initiaState = {
	events: [],
	event: {},
	loading: true
};

const eventsReducers = (state = initiaState, action) => {
	switch (action.type) {
		case types.GET_EVENTS:
			return {
				...state,
				events: action.payload,
				loading: false,
			}
		default:
			return state;
	}
};

export default eventsReducers;