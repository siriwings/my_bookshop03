/**
 * Created by siri on 2017-07-01.
 */
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import auth from './auth';
import book from './book';
import cart from './cart';
import memo from './memo';

const rootReducer = combineReducers({
    form,    //form 만 써도됨! ES6의 마법ㅋㅋㅋㅋ
    auth,
    book,
    cart,
    memo
});

export default rootReducer;