import * as types from "./actionType"
import axios from "axios";

const getTacks = (tacks) => ({
	type: types.GET_TACKS,
	payload: tacks,
});
const tackDeleted = () => ({
	type: types.DELETE_TACK
})
const tackAdded = () => ({
	type: types.ADD_TACK
})

const getTack = (tack) => ({
	type: types.GET_SINGLE_TACK,
	payload: tack,
})

export const loadTacks = () => {
	return function (dispatch) {
		axios
		.get(`${process.env.REACT_APP_API}`)
		.then((responce) => {
			dispatch(getTacks(responce.data))
		})
		.catch((error) => console.log(error))
	}
};
export const deleteTack = (id) => {
	return function (dispatch) {
		axios
		.delete(`${process.env.REACT_APP_API}/${id}`)
		.then(() => {
			dispatch(tackDeleted());
			dispatch(loadTacks())
		})
		.catch((error) => console.log(error))
	}
};
export const addTack = (tack) => {
	return function (dispatch) {
		axios
		.post(`${process.env.REACT_APP_API}`, tack)
		.then(() => {
			dispatch(tackAdded());
			dispatch(loadTacks())
		})
		.catch((error) => console.log(error))
	}
};

export const getSingleTack = (id) => {
	return function (dispatch) {
		axios
		.get(`${process.env.REACT_APP_API}/${id}`)
		.then((responce) => {
			console.log ("responce", responce)
			dispatch(getTack(responce.data));
		})
		.catch((error) => console.log(error))
	}
};