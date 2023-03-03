import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    isShownNotification: boolean;
    metamaskAccount: {
        wallet: null | string;
        connectProgress: number;
    };
}

const initialState: IInitialState = {
    isShownNotification: false,
    metamaskAccount: {wallet: null, connectProgress: 0}
};

const slice = createSlice({
    name: 'basic',
    initialState,
    reducers: {
        init() {
            return initialState;
        },

        changeNotificationStatus(state, action: PayloadAction<boolean>) {
            state.isShownNotification = action.payload;
        },

        setMetamaskAccount(state, action: PayloadAction<null | string>) {
            state.metamaskAccount = {wallet: action.payload, connectProgress: action.payload ? 100 : 0};
        }
    }
});

export const {reducer: basicReducer, actions: basicActions} = slice;