import { useEffect } from 'react'

import { Button } from '@components/atoms/Button'
import { StatusTag } from '@components/atoms/StatusTag'
import { Text } from '@components/atoms/Text'
import { BookingCard } from '@components/molecules/BookingCard'
import { ConfirmBookingChargeDialog } from '@components/organisms/ConfirmBookingChargeDialog'

import {
  ChargeDetail,
  ChargeValueArea,
  ChargeValueBox,
  ChargesContainer,
  ChargesStationItem,
  ChargesStationList,
} from '@styles/pages/Charge/styles'
import { useReservations } from 'src/hooks/useReservation'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Charges() {
  const { reservations } = useReservations()

  useEffect(() => {
    console.log(reservations)
  }, [reservations])

  return (
    <DefaultLayout>
      <ChargesContainer className="container-content">
        <Text
          content="Recargas Realizadas"
          color="gray_200"
          size="medium"
          weight="semiBold"
        />

        <ChargesStationList>
          {reservations.map((data, index) => {
            return <ConfirmBookingChargeDialog data={data} key={index} />
          })}
        </ChargesStationList>
      </ChargesContainer>
    </DefaultLayout>
  )
}
