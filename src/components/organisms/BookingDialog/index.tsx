import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { ICharger, IStation } from '@shared/types/station'

import { Button } from '@components/atoms/Button'
import { DateInput } from '@components/atoms/DateInput'
import { Heading } from '@components/atoms/Heading'
import { Input } from '@components/atoms/Input'
import { Text } from '@components/atoms/Text'

import { ChargerCard } from '../../molecules/ChargerCard'
import {
  BookingButtonArea,
  BookingDialogTrigger,
  BookingForm,
  BookingFormArea,
  BookingFormPrice,
  BookingFormTime,
  Close,
  Content,
  Indicator,
  Overlay,
  Title,
  TitleStationArea,
  Trigger,
} from './styles'

import { yupResolver } from '@hookform/resolvers/yup'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReservationContext } from 'src/contexts/reservationsContext'
import * as yup from 'yup'

interface ChargerCardProps {
  charger: ICharger
  station: IStation
}

const schema = yup.object().shape({
  horario: yup
    .string()
    .required('Horário é obrigatório')
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Horário inválido'),
  duracao: yup
    .string()
    .required('Duração é obrigatória')
    .matches(/^\d{1}h [0-5][0-9]m$/, 'Duração inválida'),
})

function useReservationContext() {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error(
      'useReservationContext deve ser usado dentro de um ReservationProvider',
    )
  }
  return context
}

export function BookingDialog({ charger, station }: ChargerCardProps) {
  const [statusModal, setStatusModal] = useState(false)
  const { watch, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  })
  const router = useRouter()

  const { saveReservation } = useReservationContext()

  const addressFormated = `${station.address.street}, ${station.address.number} - ${station.address.neighborhood} - ${station.address.city}`

  const watchedHorario = watch('duracao', '')

  const calculatePrice = (time: string) => {
    const hourMatch = time.match(/(\d+)h/)
    const minuteMatch = time.match(/(\d+)m/)

    let totalMinutes = 0

    if (hourMatch) {
      totalMinutes += parseInt(hourMatch[1], 10) * 60
    }

    if (minuteMatch) {
      totalMinutes += parseInt(minuteMatch[1], 10)
    }

    const price = totalMinutes * 0.3

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const price = calculatePrice(watchedHorario)

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
            <BookingFormArea
              onSubmit={handleSubmit((data) => {
                const reservation = {
                  ...data,
                  price,
                  status: 'Available',
                  charger,
                  station,
                }
                saveReservation(reservation)
                router.push({
                  pathname: '/charges',
                  query: { bookingSuccess: true },
                })
              })}
            >
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
                  <Controller
                    name="horario"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Horário"
                        mask="99:99"
                        inputMode="numeric"
                      />
                    )}
                  />
                  <Controller
                    name="duracao"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Duração"
                        mask="9h 99m"
                        inputMode="numeric"
                      />
                    )}
                  />
                </BookingFormTime>

                <Input label="Local" disabled value={addressFormated} />

                <BookingFormPrice>
                  <Input label="Preço" disabled value={price} />
                  <Input label="Plug" disabled value={charger.plugType} />
                </BookingFormPrice>
              </BookingForm>

              <BookingButtonArea>
                <Text
                  content="Li e concordo com os termos da Política de Uso"
                  color="black"
                  weight="regular"
                  size="xxxsmall"
                />
                <Button
                  content="Reservar"
                  variant="booking"
                  full={true}
                  type="submit"
                />
                <Text
                  content="A reserva é gratuita, e o conector ficará disponível para você por mais 15 minutos após o horário informado em casos de atraso"
                  color="gray_100"
                  align="center"
                  weight="light"
                  size="xxxsmall"
                />
              </BookingButtonArea>
            </BookingFormArea>
          </Dialog.Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
