import { useEffect, useState } from 'react'

import { Button } from '@components/atoms/Button'
import { StatusTag } from '@components/atoms/StatusTag'
import { Text } from '@components/atoms/Text'

import {
  SavedContainer,
  SavedStationItem,
  SavedStationList,
} from '@styles/pages/Saved/styles'
import { useStations } from 'src/hooks/useStation'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Saved() {
  const { stations } = useStations()

  return (
    <DefaultLayout>
      <SavedContainer className="container-content">
        <Text
          content="Estações Favoritadas"
          color="gray_200"
          size="medium"
          weight="semiBold"
        />

        <SavedStationList>
          {stations.map(({ name, address }, index) => {
            return (
              <SavedStationItem key={index}>
                <Text
                  content={name}
                  color="gray_200"
                  size="small"
                  weight="semiBold"
                />
                <Text
                  content={address.street}
                  color="gray_100"
                  size="xsmall"
                  weight="semiBold"
                />
                <Text
                  content="1.8 km de distância"
                  color="black"
                  size="xxxsmall"
                  weight="semiBold"
                />
                <Button content="Carregar" variant="charge" charge />
              </SavedStationItem>
            )
          })}
        </SavedStationList>
      </SavedContainer>
    </DefaultLayout>
  )
}
