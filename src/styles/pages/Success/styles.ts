import Image from 'next/image'

import styled, { css } from 'styled-components'

export const SuccessContainer = styled('div')`
  padding: 5rem 3rem;
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
export const Close = styled('div')`
  width: 35px;
  height: 35px;
  border: 1px solid #61e4a3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`
export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rem;
  margin-bottom: 1.5rem;
  gap: 70px;
`

export const ChargerImage = styled(Image)`
  max-width: 280px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
  }
`

export const ChargerInfoContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 30px;
`

export const ChargerHeader = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const ChargePercentage = styled('h1')`
  display: flex;
  align-items: flex-end;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.green_300};
  `}

  span {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.medium};
    `}
  }
`

export const LastContainer = styled('h1')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const LineDivider = styled('div')`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, #d9d9d9 20%, #d9d9d9 100%, #d9d9d9 20%);
`

export const ReservationInfoContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ReservationInfo = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`
