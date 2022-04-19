

import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    value: 0,
    degree: -1,
    status: 'unknown',
};

export const testHookSlice = createSlice({
    name: 'testHook',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        setDegree: (state, action) => {
            state.degree = action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const getTestData = () => async (dispatch, getState) => {
    dispatch(setStatus('fetching'));
    dispatch(setDegree(-1));
    const response = await fetch('https://yiketianqi.com/api?unescape=1&version=v1&appid=85841439&appsecret=EKCDLT4I');
    const data = await response.json();
    dispatch(setDegree(data.data[0].tem));
    dispatch(setStatus('finished'));
}

export const { increment, decrement, incrementByAmount, setDegree, setStatus } = testHookSlice.actions;
export default testHookSlice.reducer;



