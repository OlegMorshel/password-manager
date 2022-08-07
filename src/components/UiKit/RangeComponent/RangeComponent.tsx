import * as React from 'react'
import { useState } from 'react'
import { getTrackBackground, Range } from 'react-range'
export type RangeValue = Array<number>

interface IRangeComponent {
  minValue: number
  maxValue: number
  currentValue: { values: RangeValue }
  onChangeCurrentValue: (value: RangeValue) => RangeValue
}
const RangeComponent: React.FC<IRangeComponent> = ({ currentValue, maxValue, minValue, onChangeCurrentValue }) => {
  return (
    <Range
      step={0.1}
      min={minValue}
      max={maxValue}
      values={currentValue.values}
      onChange={values => onChangeCurrentValue(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '4px',
            width: `100%`,
            backgroundColor: '#2F8883',
            borderRadius: '4px',
            background: getTrackBackground({
              values: currentValue.values,
              colors: ['#2F8883', '#E5E5E5'],
              min: minValue,
              max: maxValue,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: '13px',
            width: '13px',
            backgroundColor: '#ffffff',
            border: '2px solid #2F8883',
            borderRadius: '50%',
            background: '#ffffff',
          }}
        />
      )}
    />
  )
}

export default RangeComponent
