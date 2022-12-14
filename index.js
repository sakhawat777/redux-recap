// Redux manage states globally
// a small js library
// for managing medium/large amount of states globally in your app

// require createStore from redux package
const { createStore } = require('redux');

// defining constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
// const ADD_USER = 'ADD_USER';

// State
const initialCounterState = {
	count: 0,
	// users: ['sakhawat'],
	// users: [
	// 	{
	// 		name: 'sakhawat',
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
const resetCounter = () => {
	return {
		type: RESET,
	};
};
const incrementCounterByValue = (value) => {
	return {
		type: INCREMENT_BY_VALUE,
		payload: value,
	};
};
// const addUser = (user) => {
// 	return {
// 		type: ADD_USER,
// 		payload: user,
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
		case RESET:
			return {
				// for multiple state
				// ...state,
				count: 0,
			};
			break;
		case INCREMENT_BY_VALUE:
			return {
				// for multiple state
				// ...state,
				count: state.count + action.payload,
			};
			break;
		// case ADD_USER:
		// 	return {
		// 		// for multiple state
		// 		...state,
		// 		users: [...state.users, action.payload],
		// 	};
		// 	break;

		default:
			state;
			break;
	}
};

// Store hold states. Store has 3 methods - getState(), dispatch() and subscribe()
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
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
store.dispatch(incrementCounterByValue(10));
store.dispatch(incrementCounterByValue(5));
// store.dispatch(addUser('Raju'));
