/**
 * Whether or not the user is currently authenticated.
 */

import {
    BOOK_LIST,
    BOOK_LIST_FAILURE,
    BOOK_LIST_SUCCESS,
    BOOK_POST,
    BOOK_POST_FAILURE,
    BOOK_POST_SUCCESS
} from '../actions/types';


const initialState = {
    post: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [],
        isLast: false
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BOOK_LIST:
            return {...state, list: {status:'WAITING',data:[]}};
        case BOOK_LIST_SUCCESS:
            return {...state,list: {status:'SUCCESS',data:[...action.payload]}};
        case BOOK_LIST_FAILURE:
            return {...state, post: {status:'FAILURE'}};
        case BOOK_POST:
            return {...state, post: {status:'WAITING'}};
        case BOOK_POST_SUCCESS:
            return {...state,post: {status:'SUCCESS'}};
        case BOOK_POST_FAILURE:
            return {...state, post: {status:'FAILURE'}};
      default:
            return state;
    }
}
