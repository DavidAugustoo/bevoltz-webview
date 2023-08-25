import { useRouter } from 'next/router'
import { Key } from 'react'

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

const chargingInfo: any = [
  {
    label: 'Preço',
    value: 'R$19,80',
  },
  {
    label: 'Duração',
    value: '3h 45m',
  },
  {
    label: 'Plug',
    value: 'Type 2',
  },
]

export default function Success() {
  const router = useRouter()

  return (
    <SuccessContainer>
      <Title>
        <TitleStationArea>
          <Close>
            <CaretLeft size={22} color="#61E4A3" />
          </Close>

          <Heading
            level={2}
            content={'Carregando'}
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
              85 <span>%</span>{' '}
            </ChargePercentage>

            <LastContainer>
              <Text
                content={'Tempo Restante'}
                color="green_300"
                size="xsmall"
                weight="bold"
              />
              <Text
                content={'1 hora e 38 minutos'}
                color="gray_400"
                size="xxsmall"
                weight="regular"
              />
            </LastContainer>
          </ChargerHeader>

          <LineDivider></LineDivider>

          <ReservationInfoContainer>
            {chargingInfo.map((data: any, index: Key | null | undefined) => {
              console.log(data)
              return (
                <ReservationInfo key={index}>
                  <Text
                    content={data.value}
                    color="green_300"
                    size="xsmall"
                    weight="bold"
                  />
                  <Text
                    content={data.label}
                    color="gray_400"
                    size="xxsmall"
                    weight="regular"
                  />
                </ReservationInfo>
              )
            })}
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
