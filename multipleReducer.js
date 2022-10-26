// 1. state
// 2. dispatch action
// 3. reducer
// 4. store

const { createStore, combineReducers } = require('redux');

// defining constants for product
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// defining constants for cart
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
// state
const initialProductState = {
	products: ['Sugar', 'Salt'],
	numberOfProducts: 2,
};
// state for cart
const initialCartState = {
	cart: ['Mango'],
	numberOfProducts: 1,
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
// action for cart
const getCartItems = () => {
	return {
		type: GET_CART_ITEMS,
	};
};
const addCartItems = (cart) => {
	return {
		type: ADD_CART_ITEMS,
		payload: cart,
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
// cart reducer
const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case GET_CART_ITEMS:
			return {
				...state,
			};
		case ADD_CART_ITEMS:
			return {
				cart: [...state.cart, action.payload],
				numberOfProducts: state.numberOfProducts + 1,
			};

		default:
			return state;
	}
};

// combine reducer
const rootReducer = combineReducers({
	productR: productReducer,
	cartR: cartReducer,
});

//store
// const store = createStore(productReducer);

// store for cart
const store = createStore(rootReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('Milk'));
store.dispatch(getCartItems());
store.dispatch(addCartItems('Berry'));
