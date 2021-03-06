const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action types. Simply a list of constant
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

// Action creator. It will simply return an action which is an object
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
};

const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM
    };
}

// initial state of applycation
const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCream: 20
}

// A reducer will transmit state based on type of action
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        };
        default: return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICE_CREAM: return {
            ... state,
            numOfIceCream: state.numOfIceCream - 1
        };
        default: return state;
    }
};

// combine all reducer together
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// initial state manager (state store)
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state', store.getState());

// subscribe the store (begin listening)
const unsubscribe = store.subscribe(() => {});

// trigger actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// unsubscribe the store
unsubscribe();