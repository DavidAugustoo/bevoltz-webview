import React from 'react'
import InputMask from 'react-input-mask'

import { Text } from '../Text'
import { InputContainer } from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  mask?: string
}

export function Input({ label, mask, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor="">
        <Text content={label} color="black" size="xxsmall" weight="regular" />
      </label>
      {mask ? <InputMask mask={mask} {...rest} /> : <input {...rest} />}
    </InputContainer>
  )
}
