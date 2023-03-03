import {basicReducer} from './root';

export const basicStore = {reducers: {basic: basicReducer}, whiteList: ['basic']};

export * from './root';