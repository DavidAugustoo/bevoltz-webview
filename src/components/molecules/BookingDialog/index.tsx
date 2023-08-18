import { useState } from 'react'

import { ICharger, IStation } from '@shared/types/station'

import { DateInput } from '@components/atoms/DateInput'
import { Heading } from '@components/atoms/Heading'
import { Input } from '@components/atoms/Input'
import TimePicker from '@components/atoms/TimeInput'

import { ChargerCard } from '../ChargerCard'
import {
  BookingDialogTrigger,
  BookingForm,
  BookingFormTime,
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
  charger: ICharger
  station: IStation
}

export function BookingDialog({ charger, station }: ChargerCardProps) {
  const [statusModal, setStatusModal] = useState(false)

  const addressFormated = `${station.address.street}, ${station.address.number} - ${station.address.neighborhood} - ${station.address.city}`

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
              <DateInput />

              <BookingFormTime>
                <TimePicker />
                <TimePicker />
              </BookingFormTime>

              <Input label="Local" disabled value={addressFormated} />
            </BookingForm>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
