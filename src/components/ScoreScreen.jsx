import React from 'react'
import { getScore } from '../reducers/counterSlice';
import { useSelector } from 'react-redux';

export default function ScoreScreen(props) {

    const score  = useSelector(getScore);

    props.setIsActive(false)
    
  return (
    <div>
        <h1>You scored: {score} </h1>
    </div>
  )
}
