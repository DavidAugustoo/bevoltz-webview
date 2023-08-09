import { useState } from 'react'

import { ICharger, IStation } from '@shared/types/station'

import { Heading } from '@components/atoms/Heading'
import { Input } from '@components/atoms/Input'

import { ChargerCard } from '../ChargerCard'
import {
  BookingDialogTrigger,
  BookingForm,
  Close,
  Content,
  Indicator,
  Overlay,
  Title,
  TitleStationArea,
  Trigger,
} from './styles'

import { X } from '@phosphor-icons/react'
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
                  content={'Reservar o conector'}
                  size="medium"
                  color="black"
                  weight="medium"
                />

                <Close>
                  <X size={22} color="#61E4A3" />
                </Close>
              </TitleStationArea>
            </Title>

            <BookingForm>
              <Input />
            </BookingForm>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
