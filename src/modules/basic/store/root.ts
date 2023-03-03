import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBetaTestRegistrationFormData} from '../components/beta-test-registration/form';

interface IInitialState {
    isShownNotification: boolean;
    isShownRegistrationData: boolean;
    metamaskAccount: { wallet: null | string; connectProgress: number };
    betaTestRegistrationData: { name: null | string, email: null | string };
}

const initialState: IInitialState = {
    isShownNotification: false,
    isShownRegistrationData: false,
    metamaskAccount: {wallet: null, connectProgress: 0},
    betaTestRegistrationData: {name: null, email: null}
};

const slice = createSlice({
    name: 'basic',
    initialState,
    reducers: {
        init() {
            return initialState;
        },

        resetBetaTestRegistrationData(state) {
            state.betaTestRegistrationData = initialState.betaTestRegistrationData;
        },

        changeNotificationStatus(state, action: PayloadAction<boolean>) {
            state.isShownNotification = action.payload;
        },

        changeShownRegistrationData(state, action: PayloadAction<boolean>) {
            state.isShownRegistrationData = action.payload;
        },

        setMetamaskAccount(state, action: PayloadAction<null | string>) {
            state.metamaskAccount = {wallet: action.payload, connectProgress: action.payload ? 50 : 0};
        },

        setBetaTestRegistrationData(state, action: PayloadAction<IBetaTestRegistrationFormData>) {
            state.betaTestRegistrationData = action.payload;
        }
    }
});

export const {reducer: basicReducer, actions: basicActions} = slice;