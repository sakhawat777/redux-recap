// Redux manage states globally
// a small js library
// for managing medium/large amount of states globally in your app

// require createStore from redux package
const { createStore } = require('redux');

// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// const ADD_USER = 'ADD_USER';

// State
const initialCounterState = {
	count: 0,
	// user: [
	// 	{
	// 		name: "sakhawat",
	// 	},
	// ],
};

// action
// action is an object, action has two properties type and payload(passing data to reducer using payload)

// action creator function
const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};
const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};
// const addUser = () => {
// 	return {
// 		type: ADD_USER,
// 		payload: { name: 'biplob' },
// 	};
// };

// create reducer for counter
// reducer is a pure function. Pure function give input and always return output. reducer handle logics base on action types and send update to store.
const counterReducer = (state = initialCounterState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				// for multiple state
				// ...state,
				count: state.count + 1,
			};
			break;
		case DECREMENT:
			return {
				// for multiple state
				// ...state,
				count: state.count - 1,
			};
			break;

		default:
			state;
			break;
	}
};

// Store hold states. Store has 3 method - getState(), dispatch(), subscribe()
// getState() - Show store status
// dispatch() - dispatch actions
// subscribe() - subscribe view

// create store
const store = createStore(counterReducer);

// subscribe store
store.subscribe(() => {
	console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
