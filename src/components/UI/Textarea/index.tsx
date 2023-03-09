import React from 'react'
import { TextAreaContainer } from './styles';

interface ITextArea {
    placeholder?: string;
    height?: number;
    width?: number;
}

const Textarea = ({ placeholder, height, width }: ITextArea) => {
  return (
    <>
        <TextAreaContainer placeholder={placeholder} height={height} width={width}/>
    </>
  )
}

export default Textarea