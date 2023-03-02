import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as formReducer} from 'redux-form';
import {memberApi} from '../../modules/basic/api';

const rootReducer = combineReducers({form: formReducer, [memberApi.reducerPath]: memberApi.reducer});

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(memberApi.middleware)
});