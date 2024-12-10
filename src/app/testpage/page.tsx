"use client"

import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '../store/slices/exampleSlice';
import { RootState } from '../store/store';



export default function Home() {
    const count = useSelector((state: RootState) => state.example.value);
    const dispatch = useDispatch();

    return (
        <div className='w-full items-center gap-5 flex justify-start'>
            <h1>Home Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}
