import { useState } from 'react'

import { IStation } from '@shared/types/station'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import { ChargerCard } from '../ChargerCard'
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

const stationTypes = {
  fast: 'https://i.ibb.co/txykmBd/marker-dark.png',
  normal: 'https://i.ibb.co/tY4Y30C/marker-light.png',
}

interface MarkerStationDialogProps {
  station: IStation
}

export function MarkerStationDialog({ station }: MarkerStationDialogProps) {
  const [statusModal, setStatusModal] = useState(false)

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

              <StationSaveArea>
                <Heart size={32} />
              </StationSaveArea>
            </Title>

            <InfoStationContainer>
              <Button content="Traçar Rota" variant="charge" />
            </InfoStationContainer>

            <ChargesContainer>
              <Text
                content="Selecione o conector"
                color="gray_80"
                size="xsmall"
              />
              <ChargerCard charger={station.chargers} />
              <ChargerCard charger={station.chargers} />
            </ChargesContainer>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
