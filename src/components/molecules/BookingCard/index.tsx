import { IReservation } from '@shared/types/reservation'

import { StatusTag } from '@components/atoms/StatusTag'
import { Text } from '@components/atoms/Text'

import {
  ChargeDetail,
  ChargeValueArea,
  ChargeValueBox,
  BookingCardContainer,
} from './styles'

interface BookingCardProps {
  data: IReservation
}

export function BookingCard({ data }: BookingCardProps) {
  return (
    <BookingCardContainer>
      <Text
        content={data.station.name}
        color="gray_400"
        size="medium"
        weight="semiBold"
      />
      <Text
        content={data.station.address.street}
        color="gray_100"
        size="xsmall"
        weight="medium"
      />
      <ChargeDetail>
        <Text
          content="Data: 08 de Agosto, 2023"
          color="black"
          size="xxxsmall"
          weight="semiBold"
        />
        <Text
          content={`Duração: ${data.duracao}`}
          color="black"
          size="xxxsmall"
          weight="semiBold"
        />
        <Text
          content={`Horário: ${data.horario} PM`}
          color="black"
          size="xxxsmall"
          weight="semiBold"
        />
      </ChargeDetail>

      <ChargeValueBox>
        <StatusTag variant={data.status as 'Available'} />
        <ChargeValueArea>
          <Text content={data.price} color="black" size="small" weight="bold" />
        </ChargeValueArea>
      </ChargeValueBox>
    </BookingCardContainer>
  )
}
