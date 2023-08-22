import { useEffect } from 'react'

import { Button } from '@components/atoms/Button'
import { StatusTag } from '@components/atoms/StatusTag'
import { Text } from '@components/atoms/Text'

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
          {reservations.map(
            ({ charger, station, duracao, horario, price, status }, index) => {
              return (
                <ChargesStationItem key={index}>
                  <Text
                    content={station.name}
                    color="gray_400"
                    size="medium"
                    weight="semiBold"
                  />
                  <Text
                    content={station.address.street}
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
                      content={`Duração: ${duracao}`}
                      color="black"
                      size="xxxsmall"
                      weight="semiBold"
                    />
                    <Text
                      content={`Horário: ${horario} PM`}
                      color="black"
                      size="xxxsmall"
                      weight="semiBold"
                    />
                  </ChargeDetail>

                  <ChargeValueBox>
                    <StatusTag variant={status as 'Scheduled'} />
                    <ChargeValueArea>
                      <Text
                        content={price}
                        color="black"
                        size="small"
                        weight="bold"
                      />
                    </ChargeValueArea>
                  </ChargeValueBox>
                </ChargesStationItem>
              )
            },
          )}
        </ChargesStationList>
      </ChargesContainer>
    </DefaultLayout>
  )
}
