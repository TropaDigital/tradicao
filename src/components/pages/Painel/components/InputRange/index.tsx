import React from 'react'
import * as Slider from '@radix-ui/react-slider';
import { Container } from './styles';

interface RangeProps {
  defaultValue: number;
  maxValue: number;
  minValue: number;
  handleOnChange: (value: any) => void;
}

export default function InputRange({ defaultValue, maxValue, minValue, handleOnChange }: RangeProps) {
  return (
    <Container>
      <Slider.Root 
        className="SliderRoot" 
        defaultValue={[defaultValue]} 
        max={3000} 
        step={1} 
        aria-label="Volume"
        onValueChange={handleOnChange}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>

      <div className="inputRangeValues">
        <div className="values">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(minValue ?? 0)}
        </div>
        <div className="values">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(maxValue ?? 3000)}
        </div>
      </div>
    </Container>
  )
}
