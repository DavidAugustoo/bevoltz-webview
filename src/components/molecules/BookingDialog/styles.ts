import styled, { css, keyframes } from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

export const Trigger = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  all: unset;
`

export const BookingDialogTrigger = styled('div')`
  width: 100%;
`

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    padding: 5rem 3rem;
    transform: translateY(100%);
    opacity: 0;
    &[data-state='open'] {
      animation: ${slideUp} 0.3s ease forwards;
    }
    &[data-state='closed'] {
      animation: ${slideDown} 0.3s ease forwards;
    }
  `}
`

export const Close = styled(Dialog.Close)`
  width: 35px;
  height: 35px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
`

export const Overlay = styled(Dialog.Overlay)`
  background-color: #00000052;
  position: fixed;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  &[data-state='open'] {
    opacity: 1;
  }
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
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
`

export const TitleStationArea = styled('div')`
  display: flex;
  background-color: white;
  width: 100%;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 6px;
`

export const StationSaveArea = styled('div')``

export const InfoStationContainer = styled('div')`
  padding: 2rem 0px;
`
