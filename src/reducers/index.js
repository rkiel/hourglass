import {combineReducers} from 'redux';

import accounts from './accounts';
import month from './month';
import week from './week';

const reducers = combineReducers({accounts, month, week});

export default reducers;
