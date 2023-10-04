import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import car from '@assets/charging-car.svg'
import { CaretLeft, X } from '@phosphor-icons/react'
import {
  ChargePercentage,
  ChargerHeader,
  ChargerImage,
  ChargerInfoContainer,
  Close,
  ContentContainer,
  LastContainer,
  LineDivider,
  ReservationInfo,
  ReservationInfoContainer,
  SuccessContainer,
  Title,
  TitleStationArea,
} from '@styles/pages/Success/styles'
import { useReservations } from 'src/hooks/useReservation'

export default function Success() {
  const router = useRouter()
  const { reservations } = useReservations()
  const lastReservation = reservations.at(-1)

  const [remainingMinutes, setRemainingMinutes] = useState<number | null>(null)

  useEffect(() => {
    const convertToMinutes = (duration: string): number => {
      const [hoursStr, minutesStr] = duration
        .split(' ')
        .map((part) => part.match(/\d+/)?.[0] ?? '0')
      return parseInt(hoursStr, 10) * 60 + parseInt(minutesStr, 10)
    }

    if (lastReservation?.duracao) {
      setRemainingMinutes(convertToMinutes(lastReservation.duracao))
    }
  }, [lastReservation])

  useEffect(() => {
    if (remainingMinutes && remainingMinutes > 0) {
      const timer = setTimeout(() => {
        setRemainingMinutes((prev) => (prev ? prev - 1 : 0))
      }, 60000)
      return () => clearTimeout(timer)
    }
  }, [remainingMinutes])

  const formatTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <SuccessContainer>
      <Title>
        <TitleStationArea>
          <Heading
            level={2}
            content={'Veículo Não Conectado'}
            size="medium"
            color="black"
            weight="medium"
          />
        </TitleStationArea>
      </Title>
      <ContentContainer>
        <ChargerImage src={car} alt="" />
        <ChargerInfoContainer>
          <ChargerHeader>
            <ChargePercentage>
              0 <span>%</span>{' '}
            </ChargePercentage>
            <LastContainer>
              <Text
                content={'Tempo Restante'}
                color="green_300"
                size="xsmall"
                weight="bold"
              />
              <Text
                content={
                  remainingMinutes !== null
                    ? formatTime(remainingMinutes)
                    : 'Calculando...'
                }
                color="gray_400"
                size="xxsmall"
                weight="regular"
              />
            </LastContainer>
          </ChargerHeader>
          <LineDivider></LineDivider>
          <ReservationInfoContainer>
            <ReservationInfo>
              <Text
                content={'Preço'}
                color="green_300"
                size="xsmall"
                weight="bold"
              />
              <Text
                content={lastReservation?.price as string}
                color="gray_400"
                size="xxsmall"
                weight="regular"
              />
            </ReservationInfo>
            <ReservationInfo>
              <Text
                content={'Duração'}
                color="green_300"
                size="xsmall"
                weight="bold"
              />
              <Text
                content={lastReservation?.duracao as string}
                color="gray_400"
                size="xxsmall"
                weight="regular"
              />
            </ReservationInfo>
            <ReservationInfo>
              <Text
                content={'Plug'}
                color="green_300"
                size="xsmall"
                weight="bold"
              />
              <Text
                content={'Type 2'}
                color="gray_400"
                size="xxsmall"
                weight="regular"
              />
            </ReservationInfo>
          </ReservationInfoContainer>
        </ChargerInfoContainer>
        <Button
          content="Concluir Recarga"
          variant="booking"
          full={true}
          onClick={() =>
            router.push({
              pathname: '/home',
              query: { chargeSuccess: true },
            })
          }
        />
      </ContentContainer>
    </SuccessContainer>
  )
}
