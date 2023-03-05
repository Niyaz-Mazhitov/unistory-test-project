import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInitialState {
    // Show notification about install extension metamask
    isShownNotification: boolean;
    // Metamask account connect status and wallet
    metamaskAccount: { isConnected: boolean; wallet: null | string };
    // Beta test registration form data
    userData: { isShown: boolean; isFilled: boolean; name: null | string, email: null | string };
}

const initialState: IInitialState = {
    isShownNotification: false,
    metamaskAccount: {isConnected: false, wallet: null},
    userData: {isShown: false, isFilled: false, name: null, email: null}
};

const slice = createSlice({
    name: 'basic',
    initialState,
    reducers: {
        // Initialization store reducer
        init() {
            return initialState;
        },

        // Reset metamask account data
        resetMetamaskAccount(state) {
            state.metamaskAccount = initialState.metamaskAccount;
        },

        // Needed for fill metamask account and update connect status
        setMetamaskAccount(state, action: PayloadAction<{ active: boolean, account: string }>) {
            state.metamaskAccount = {
                wallet: action.payload.account,
                isConnected: action.payload.active
            };
        },

        // Needed for fill user data with form beta test registration
        setUserData(state, action: PayloadAction<{ name: string; email: string }>) {
            state.userData = {...action.payload, isShown: false, isFilled: true};
        },

        // Needed for showing user data and not showing user data from members list
        changeShowingUserDataStatus(state, action: PayloadAction<boolean>) {
            state.userData.isShown = action.payload;
        },

        // Change showing install metamask notification
        changeShowingNotificationStatus(state, action: PayloadAction<boolean>) {
            state.isShownNotification = action.payload;
        }
    }
});

export const {reducer: basicReducer, actions: basicActions} = slice;