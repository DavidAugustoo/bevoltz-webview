import Image from 'next/image'

import styled from 'styled-components'
import { css } from 'styled-components'

import { SocialButtonProps } from '.'

export const IconContainer = styled('div')`
  display: flex;
  align-items: center;
`

export const SocialLogo = styled(Image)`
  width: 100%;
  height: 100%;
`

export const ButtonContainer = styled('button')<SocialButtonProps>`
  ${({ theme, variant = 'primary', full = false }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    max-width: 310px;
    min-width: 130px;
    padding: 10px 16px;
    border: none;
    border-radius: ${theme.border.radius.small};
    transition: all 0.1s ease-in;

    ${variant == 'google' &&
    css`
      background-color: transparent;
      border: 2px solid ${theme.colors.black};

      ${IconContainer}, p {
        color: ${theme.colors.black};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${variant == 'apple' &&
    css`
      background-color: ${theme.colors.black};
      border: 2px solid ${theme.colors.black};

      ${IconContainer}, p {
        color: ${theme.colors.white};
      }

      &:hover {
        opacity: 0.8;
      }
    `}

    ${full &&
    css`
      width: 100%;
    `}
  `}
`
