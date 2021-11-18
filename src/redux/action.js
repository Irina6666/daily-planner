import * as types from "./actionType"
import axios from "axios";

const getEvents = (events) => ({
	type: types.GET_EVENTS,
	payload: events,
});
const eventDelete = () => ({
	type: types.DELETE_EVENT
})

export const loadEvents = () => {
	return function (dispatch) {
		axios
		.get(`${process.env.REACT_APP_API}`)
		.then((responce) => {
			console.log('responce', responce)
			dispatch(getEvents(responce.data))
		})
		.catch((error) => console.log(error))
	}
};
export const deleteEvent = (id) => {
	return function (dispatch) {
		axios
		.delete(`${process.env.REACT_APP_API}/${id}`)
		.then((responce) => {
			console.log('responce', responce);
			dispatch(eventDelete());
			dispatch(loadEvents())
		})
		.catch((error) => console.log(error))
	}
}