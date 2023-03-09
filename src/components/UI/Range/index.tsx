import React from 'react'
import { RangeInput } from './styles'

interface IRange {
    maxRange: number;
    minRange: number;
}

const Range = ({ maxRange, minRange}: IRange) => {
  return (
    <>
        <RangeInput type="range" min={minRange} max={maxRange}/>
    </>
  )
}

export default Range