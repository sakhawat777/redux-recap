// 1. state
// 2. dispatch action
// 3. reducer
// 4. store

const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// defining constants for product
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// state
const initialProductState = {
	products: ['Sugar', 'Salt'],
	numberOfProducts: 2,
};

// action
const getProducts = () => {
	return {
		type: GET_PRODUCT,
	};
};
const addProducts = (product) => {
	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};

// product reducer
const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case GET_PRODUCT:
			return {
				...state,
			};
		case ADD_PRODUCT:
			return {
				products: [...state.products, action.payload],
				numberOfProducts: state.numberOfProducts + 1,
			};

		default:
			return state;
	}
};

//store

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('Milk'));
