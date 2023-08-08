import styled, { css } from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  all: unset;
`

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 50vh;
    max-height: 100%;
    border-radius: 10px 18px 0px 0px;
    padding: 0px 2rem;
  `}
`

export const Close = styled(Dialog.Close)`
  display: flex;
  justify-content: center;
  align-items: center;
  all: unset;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: #00000052;
  position: fixed;
  inset: 0;
`

export const Indicator = styled('div')`
  ${({ theme }) => css`
    display: block;
    width: 4.625rem;
    height: 5px;
    border-radius: 1.25rem;
    background-color: ${theme.colors.green_100};
    margin: 0 auto;
    margin-top: 1.625rem;
  `}
`
export const Title = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  flex-direction: column;
  align-items: start;
  gap: 6px;
`
