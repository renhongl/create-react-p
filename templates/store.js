

import { configureStore } from '@reduxjs/toolkit';

import testHookReducer from './modules/testHook/testHookSlice';
import testReducer from './modules/test/testSlice';



export default configureStore({
    reducer: {
        test: testReducer,
        testHook: testHookReducer
    }
});

