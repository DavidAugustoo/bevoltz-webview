import { useState } from 'react'

import { IReservation } from '@shared/types/reservation'

import { Button } from '@components/atoms/Button'
import { DateInput } from '@components/atoms/DateInput'
import { Heading } from '@components/atoms/Heading'
import { Input } from '@components/atoms/Input'
import { BookingCard } from '@components/molecules/BookingCard'

import {
  BookingButtonArea,
  BookingDialogTrigger,
  BookingForm,
  BookingFormArea,
  BookingFormPrice,
  BookingFormTime,
  Close,
  Content,
  Overlay,
  Title,
  TitleStationArea,
  Trigger,
} from './styles'

import { Wallet } from '@mercadopago/sdk-react'
import CircularProgress from '@mui/material/CircularProgress'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

interface ConfirmBookingChargeDialogProps {
  data: IReservation
}

export function ConfirmBookingChargeDialog({
  data,
}: ConfirmBookingChargeDialogProps) {
  const [statusModal, setStatusModal] = useState(false)
  const [isWalletReady, setIsWalletReady] = useState(false)

  const addressFormated = `${data.station.address.street}, ${data.station.address.number} - ${data.station.address.neighborhood} - ${data.station.address.city}`

  const handleWalletReady = () => {
    setIsWalletReady(true)
  }

  return (
    <Dialog.Root open={statusModal} onOpenChange={setStatusModal}>
      <Trigger asChild>
        <BookingDialogTrigger>
          <BookingCard data={data} />
        </BookingDialogTrigger>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Description>
            <BookingFormArea>
              <Title>
                <TitleStationArea>
                  <Heading
                    level={2}
                    content={'Confirmar Recarga'}
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
                <DateInput disabled />

                <BookingFormTime>
                  <Input
                    label="Horário"
                    mask="99:99"
                    inputMode="numeric"
                    value={data.horario}
                    disabled
                  />
                  <Input
                    label="Duração"
                    mask="9h 99m"
                    inputMode="numeric"
                    value={data.duracao}
                    disabled
                  />
                </BookingFormTime>

                <Input label="Local" disabled value={addressFormated} />

                <BookingFormPrice>
                  <Input label="Preço" disabled value={data.price} />
                  <Input label="Plug" disabled value={data.charger.plugType} />
                </BookingFormPrice>
              </BookingForm>

              <BookingButtonArea>
                <Wallet
                  onReady={handleWalletReady}
                  locale="pt-BR"
                  initialization={{
                    preferenceId:
                      '1457798436-52abfd59-a1f3-46b6-86b6-ad42beb24604',
                  }}
                />
                {!isWalletReady ? <CircularProgress /> : null}
              </BookingButtonArea>
            </BookingFormArea>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
