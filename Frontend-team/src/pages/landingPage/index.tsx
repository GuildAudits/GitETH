import { Button } from '@/components/ui/button';
import { decrement, increment, RootState } from '@/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function LandingPage() {
    const counter = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch()
  
    return (
      <>
        <div className="text-5xl text-red-700">Hello</div>
        <Button onClick={()=> dispatch(decrement())}>-</Button>
        <div className="">{counter}</div>
        <Button onClick={()=> dispatch(increment())}>+</Button>
      </>
    )
  }

export default LandingPage