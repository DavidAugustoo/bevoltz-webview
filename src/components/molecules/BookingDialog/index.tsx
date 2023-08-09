import { useState } from 'react'

import { ICharger, IStation } from '@shared/types/station'

import { Heading } from '@components/atoms/Heading'

import { ChargerCard } from '../ChargerCard'
import {
  BookingDialogTrigger,
  Content,
  Indicator,
  Overlay,
  Title,
  TitleStationArea,
  Trigger,
} from './styles'

import * as Dialog from '@radix-ui/react-dialog'

interface ChargerCardProps {
  charger: ICharger[]
}

export function BookingDialog({ charger }: ChargerCardProps) {
  const [statusModal, setStatusModal] = useState(false)

  return (
    <Dialog.Root open={statusModal} onOpenChange={setStatusModal}>
      <Trigger asChild>
        <BookingDialogTrigger>
          <ChargerCard charger={charger} />
        </BookingDialogTrigger>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description>
            <Title>
              <TitleStationArea>
                <Heading
                  level={2}
                  content={'oi'}
                  size="medium"
                  color="black"
                  weight="bold"
                />

                <Heading
                  level={2}
                  content={'oi'}
                  size="xsmall"
                  color="gray_200"
                  weight="semiBold"
                />
              </TitleStationArea>
            </Title>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
