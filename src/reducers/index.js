import {combineReducers} from 'redux';

import week from './week';
import accounts from './accounts';

const reducers = combineReducers({accounts, week});

export default reducers;
