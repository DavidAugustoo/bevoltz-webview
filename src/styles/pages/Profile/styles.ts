import styled, { css } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 13%;
  gap: 30px;
  height: 79vh;

  span {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 13%;
    gap: 30px;
  }
`

export const ProfileCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ProfileOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

export const ProfileLogout = styled.div``

export const ProfileStationItem = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
    border-radius: 10px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      margin-top: 10px;
    }
  `}
`
