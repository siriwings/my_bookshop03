/**
 * Created by siri on 2017-07-03.
 */
import {
    MEMO_POST,
    MEMO_POST_SUCCESS,
    MEMO_POST_FAILURE
} from './types';
import axios from 'axios';

/* MEMO POST */
export function memoPostRequest(contents) {
    return (dispatch) => {
        // inform MEMO POST API is starting
        dispatch({
            type: MEMO_POST
        });

        return axios.post('/api/memo/', { contents })
            .then((response) => {
                dispatch({
                    type: MEMO_POST_SUCCESS
                });
            }).catch((error) => {
                dispatch({
                    type: MEMO_POST_FAILURE
                    // ,error
                });
            });
    };
}
