// TODO: what is different between is approach and redux thunk?

const redux = require('redux');
const axios = require('axios');

const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err.message));
        })
    return {
        type: FETCH_USERS_REQUEST
    };
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ... state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            };
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
    }
};

const store = createStore(reducer);
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsersRequest(store.dispatch));