import Image from 'next/image'
import React from 'react'

import { Text } from '../Text'
import { ButtonContainer, IconContainer, SocialLogo } from './styles'

import appleLogo from '@assets/apple-logo.svg'
import googleLogo from '@assets/google-logo.svg'

export interface SocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'google' | 'apple'
  full?: boolean
}

const variants = {
  google: {
    title: 'CONTINUAR COM O GOOGLE ',
    icon: googleLogo,
  },
  apple: {
    title: 'CONTINUAR COM A APPLE ',
    icon: appleLogo,
  },
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  content,
  variant,
  ...rest
}) => {
  return (
    <ButtonContainer content={content} variant={variant} {...rest}>
      <IconContainer>
        <SocialLogo src={variants[variant].icon} alt="" />
      </IconContainer>

      <Text
        content={variants[variant].title}
        color="white"
        size="xsmall"
        weight="semiBold"
      />
    </ButtonContainer>
  )
}
