import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

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

4

export default function Charges() {
  const { reservations } = useReservations()

  const router = useRouter()

  const { bookingSuccess } = router.query

  if (bookingSuccess == 'true') {
    toast('Recarga realizada!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return (
    <DefaultLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
