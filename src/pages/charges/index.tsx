import { Button } from '@components/atoms/Button'
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
              color="gray_200"
              size="small"
              weight="semiBold"
            />
            <Text
              content="Av. Lacerda Franco"
              color="gray_100"
              size="xsmall"
              weight="semiBold"
            />
            <ChargeDetail>
              <Text
                content="Duração: 1 hora e 30 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Data: 10/06/2023"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Veículo: HWT-0858"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>

            <ChargeValueBox>
              <Button content="Repetir Recarga" variant="charge" />
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
              content="Beco do Cambuci"
              color="gray_200"
              size="small"
              weight="semiBold"
            />
            <Text
              content="Rua Simão Dias, 72"
              color="gray_100"
              size="xsmall"
              weight="semiBold"
            />
            <ChargeDetail>
              <Text
                content="Duração: 1 hora e 30 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Data: 10/06/2023"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Veículo: HWT-0858"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>
            <Button content="Carregar" variant="charge" />
          </ChargesStationItem>
          <ChargesStationItem>
            <Text
              content="Esfiharia Dubai Lins"
              color="gray_200"
              size="small"
              weight="semiBold"
            />
            <Text
              content="Av. Lins de Vasconcelos, 1147"
              color="gray_100"
              size="xsmall"
              weight="semiBold"
            />
            <ChargeDetail>
              <Text
                content="Duração: 1 hora e 30 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Data: 10/06/2023"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Veículo: HWT-0858"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>
            <Button content="Carregar" variant="charge" />
          </ChargesStationItem>
          <ChargesStationItem>
            <Text
              content="Shopping Pátio Higienópolis"
              color="gray_200"
              size="small"
              weight="semiBold"
            />
            <Text
              content="Av. Higienópolis, 618"
              color="gray_100"
              size="xsmall"
              weight="semiBold"
            />
            <ChargeDetail>
              <Text
                content="Duração: 1 hora e 30 minutos"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Data: 10/06/2023"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
              <Text
                content="Veículo: HWT-0858"
                color="black"
                size="xxxsmall"
                weight="semiBold"
              />
            </ChargeDetail>
            <Button content="Carregar" variant="charge" full={true} />
          </ChargesStationItem>
        </ChargesStationList>
      </ChargesContainer>
    </DefaultLayout>
  )
}
