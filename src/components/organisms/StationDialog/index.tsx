import { useEffect, useState } from 'react'

import { IStation } from '@shared/types/station'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import { ChargerCard } from '../../molecules/ChargerCard'
import { BookingDialog } from '../BookingDialog'
import {
  ChargesContainer,
  Content,
  Indicator,
  InfoStationContainer,
  Overlay,
  StationSaveArea,
  Title,
  TitleStationArea,
  Trigger,
} from './styles'

import { Heart } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { MarkerF } from '@react-google-maps/api'
import { useStations } from 'src/hooks/useStation'

const stationTypes = {
  fast: 'https://i.ibb.co/txykmBd/marker-dark.png',
  normal: 'https://i.ibb.co/tY4Y30C/marker-light.png',
}

interface MarkerStationDialogProps {
  station: IStation
}

export function MarkerStationDialog({ station }: MarkerStationDialogProps) {
  const [statusModal, setStatusModal] = useState(false)
  const [isStationSaved, setIsStationSaved] = useState(false)
  const { stations, saveStation, removeStation } = useStations()

  useEffect(() => {
    const isStationSavedInLocalStorage = stations.some(
      (obj) => obj.name === station.name,
    )

    setIsStationSaved(isStationSavedInLocalStorage)
  }, [])

  useEffect(() => {
    if (isStationSaved) {
      saveStation(station)
    } else {
      removeStation(station.name)
    }
  }, [isStationSaved])

  const redirectGPSRoute = `https://www.google.com/maps/dir/?api=1&origin=-23.563907263143754,-46.65239723388512&destination=${station.address.cords.lat},${station.address.cords.lng}&travelmode=driving`

  return (
    <Dialog.Root open={statusModal} onOpenChange={setStatusModal}>
      <Trigger asChild>
        <MarkerF
          key={station.name}
          position={station.address.cords}
          icon={stationTypes['fast']}
        />
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description>
            <Indicator></Indicator>
            <Title>
              <TitleStationArea>
                <Heading
                  level={2}
                  content={station.name}
                  size="medium"
                  color="black"
                  weight="bold"
                />

                <Heading
                  level={2}
                  content={`${station.address.street}, ${station.address.number}`}
                  size="xsmall"
                  color="gray_200"
                  weight="semiBold"
                />
              </TitleStationArea>

              <StationSaveArea
                onClick={() => setIsStationSaved(!isStationSaved)}
              >
                {isStationSaved ? (
                  <Heart size={32} color="red" weight="fill" />
                ) : (
                  <Heart size={32} />
                )}
              </StationSaveArea>
            </Title>

            <InfoStationContainer>
              <a href={redirectGPSRoute} target="_blank">
                <Button content="Traçar Rota" variant="charge" />
              </a>
            </InfoStationContainer>

            <ChargesContainer>
              <Text
                content="Selecione o conector"
                color="gray_80"
                size="xsmall"
              />

              {station.chargers.map((charger, index) => {
                return (
                  <BookingDialog
                    key={index}
                    charger={charger}
                    station={station}
                  />
                )
              })}
            </ChargesContainer>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
