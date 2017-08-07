//This is actionCreator
import axios from 'axios';      //promise를 반환한다.
import {
    BOOK_LIST,
    BOOK_LIST_FAILURE,
    BOOK_LIST_SUCCESS,
    BOOK_POST,
    BOOK_POST_FAILURE,
    BOOK_POST_SUCCESS
} from './types';

// const ROOT_URL = 'http://localhost:3001';

/* BOOK LIST */
export function bookListRequest() {
    return (dispatch) => {
        // inform BOOK POST API is starting
        dispatch({type: BOOK_LIST});
        return axios.get('/book')
            .then((res) => {
                // console.log(res.data);
                dispatch({type: BOOK_LIST_SUCCESS,payload:res.data});
            }).catch((error) => {
                //This code must be fixed...
                dispatch({
                    type: BOOK_LIST_FAILURE,
                    // payload: error.response.data.code
                });
            });
    };
}



/* BOOK POST */
export function bookPostRequest({title, description, price, image}) {
    return (dispatch) => {
        // inform BOOK POST API is starting
        dispatch({type: BOOK_POST});
        return axios.post('/book', {title, description, price,image}, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then((response) => {
                // console.log(response.data);
                dispatch({type: BOOK_POST_SUCCESS});
            }).catch((error) => {
                //This code must be fixed...
                dispatch({
                    type: BOOK_POST_FAILURE,
                    // payload: error.response.data.code
                });
            });
    };
}
