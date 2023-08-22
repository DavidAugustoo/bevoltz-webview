import styled, { css } from 'styled-components'

import { StatusTagProps } from '.'

export const StatusTagContainer = styled.div<StatusTagProps>`
  display: flex;
  width: 110px;
  height: 32px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${({ variant, theme }) =>
    variant === 'In Progress' &&
    css`
      background-color: ${theme.colors.yellow_200};
    `}

  ${({ variant, theme }) =>
    variant === 'Canceled' &&
    css`
      background-color: ${theme.colors.red_200};
    `}

    ${({ variant, theme }) =>
    variant === 'Available' &&
    css`
      background-color: ${theme.colors.green_100};
    `}

    ${({ variant, theme }) =>
    variant === 'Scheduled' &&
    css`
      background-color: ${theme.colors.green_300};
    `}

    ${({ variant, theme }) =>
    variant === 'Completed' &&
    css`
      background-color: ${theme.colors.gray_100};
    `}
`
