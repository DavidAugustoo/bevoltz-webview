import Image from 'next/image'

import styled, { css } from 'styled-components'

export const ChargerCardContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: ${theme.colors.gray_50};
    border-radius: 10px;
    width: 100%;
  `}
`

export const ChargerImage = styled(Image)`
  max-width: 30px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`

export const ChargerDescription = styled('div')`
  display: flex;
  flex-direction: column;
`

export const ChargerStatus = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const ChargerStatusIndicator = styled('div')`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: green;
`
