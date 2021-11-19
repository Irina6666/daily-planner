import * as types from "./actionType"
import axios from "axios";

const getTacks = (tacks) => ({
	type: types.GET_TACKS,
	payload: tacks,
});
const tackDeleted = () => ({
	type: types.DELETE_TACK
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
}