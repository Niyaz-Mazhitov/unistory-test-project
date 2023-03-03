import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {reducer as formReducer} from 'redux-form';
import storage from 'redux-persist/lib/storage';
import {memberApi} from '../../modules/basic/api';
import {basicStore} from '../../modules/basic/store';

const rootReducer = combineReducers({
    ...basicStore.reducers,
    [memberApi.reducerPath]: memberApi.reducer,
    form: formReducer
});

const whiteList: string[] = [...basicStore.whiteList];
const blacklist: string[] = [memberApi.reducerPath, 'form'];

const persistConfig = {whiteList, blacklist, storage, key: 'root'};

const persisted = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    devTools: true,
    reducer: persisted,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(memberApi.middleware)
});

export const persist = persistStore(store);