//This is actionCreator
import axios from 'axios';      //promise를 반환한다.
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';

const ROOT_URL = 'http://localhost:3001';

export function signinUser({email, password}) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                // If req is good...
                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});

                // - Save the JWT token
                // console.log(response);
                // console.log(response.data);
                localStorage.setItem('token', response.data.token);

                // - redirect to the route '/feature'
                // this.props.history.push('/');
            })
            .catch(() => {
                // If req is bad...
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({email, password}) {
    return function (dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response => {
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                // this.props.history.push('/');
            })
            .catch((err) => {
                // If req is bad...
                // - Show an error to the user
                console.log(err);
                console.log(err.response);
                dispatch(authError(err.response.data.error));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {type: UNAUTH_USER};
}

export function fetchMessage() {
    return function (dispatch) {
        axios.get(ROOT_URL, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(res => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: res.data.message
                });
            });

    }
}