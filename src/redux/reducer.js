import * as types from "./actionType"

const initiaState = {
	tacks: [],
	tack: {},
	loading: true
};

const eventsReducers = (state = initiaState, action) => {
	switch (action.type) {
		case types.GET_TACKS:
			return {
				...state,
				tacks: action.payload,
				loading: false,
			};
			case types.DELETE_TACK:
			case types.ADD_TACK:
			case types.UPDATE_TACK:
			return {
				...state,
				loading: false,
			};
			case types.GET_SINGLE_TACK:
			return {
				...state,
				tack: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default eventsReducers;