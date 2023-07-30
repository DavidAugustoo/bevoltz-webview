import React from 'react'

import { Text } from '../Text'
import { ButtonContainer, IconContainer } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  variant: 'primary' | 'secondary' | 'charge'
  full?: boolean
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const Button: React.FC<ButtonProps> = ({
  content,
  variant,
  icon,
  ...rest
}) => {
  return (
    <ButtonContainer content={content} variant={variant} {...rest}>
      {icon && (
        <IconContainer>
          {React.cloneElement(icon, { size: '20', weight: 'bold' })}
        </IconContainer>
      )}

      <Text content={content} color="white" size="xsmall" weight="semiBold" />
    </ButtonContainer>
  )
}
