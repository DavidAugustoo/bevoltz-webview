import styled, { css } from 'styled-components'

export const BookingCardContainer = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    button {
      margin-top: 10px;
    }
  `}
`

export const ChargeDetail = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`

export const ChargeValueBox = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`

export const ChargeValueArea = styled('div')`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: end;
  padding: 5px 0px;
`
