import React from 'react'

import { Text } from '../Text'
import { ButtonContainer, IconContainer, RayIcon } from './styles'

import rayIcon from '@assets/ray-bevoltz.svg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  variant: 'primary' | 'secondary' | 'charge'
  full?: boolean
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  charge?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  content,
  variant,
  icon,
  charge,
  ...rest
}) => {
  return (
    <ButtonContainer content={content} variant={variant} {...rest}>
      {icon && (
        <IconContainer>
          {React.cloneElement(icon, { size: '20', weight: 'bold' })}
        </IconContainer>
      )}

      {charge && (
        <IconContainer>
          <RayIcon src={rayIcon} alt="light" />
        </IconContainer>
      )}

      <Text content={content} color="white" size="xsmall" weight="semiBold" />
    </ButtonContainer>
  )
}
