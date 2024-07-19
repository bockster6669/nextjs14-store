'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/redux-store';
import React from 'react';
import { selectCounterValue } from './counter.selectors';
import { decrement, increment } from './counter.slice';

const Counter = () => {
  const counter = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {counter}
    </div>
  );
};

export default Counter;
