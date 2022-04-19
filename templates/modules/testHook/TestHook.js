import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, getTestData } from "./testHookSlice";


export default function TestHook() {

    const testHook = useSelector((state) => state.testHook);
    const dispatch = useDispatch();

    return (
        <section className="test-hook-module">
            <div>value: {JSON.stringify(testHook)}</div>
            <div>Degree: {testHook.degree}</div>
            <div>Status: {testHook.status}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
            <button onClick={() => dispatch(getTestData())}>getTestData</button>
        </section>
    )

}




