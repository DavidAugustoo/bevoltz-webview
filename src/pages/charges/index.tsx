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
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Charges() {
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
          <ChargesStationItem>
            <Text
              content="Ester Star"
              color="gray_400"
              size="medium"
              weight="semiBold"
            />
            <Text
              content="Av. Lacerda Franco"
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
                content="Duração: 3 horas e 45 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Horário: 02:00 PM"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>

            <ChargeValueBox>
              <StatusTag variant="Scheduled" />
              <ChargeValueArea>
                <Text
                  content="R$ 54,93"
                  color="black"
                  size="small"
                  weight="bold"
                />
              </ChargeValueArea>
            </ChargeValueBox>
          </ChargesStationItem>

          <ChargesStationItem>
            <Text
              content="Ester Star"
              color="gray_400"
              size="medium"
              weight="semiBold"
            />
            <Text
              content="Av. Lacerda Franco"
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
                content="Duração: 3 horas e 45 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Horário: 02:00 PM"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>

            <ChargeValueBox>
              <StatusTag variant="Scheduled" />
              <ChargeValueArea>
                <Text
                  content="R$ 54,93"
                  color="black"
                  size="small"
                  weight="bold"
                />
              </ChargeValueArea>
            </ChargeValueBox>
          </ChargesStationItem>
        </ChargesStationList>
      </ChargesContainer>
    </DefaultLayout>
  )
}
