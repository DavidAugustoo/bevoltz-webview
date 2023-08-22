import { Button } from '@components/atoms/Button'
import { StatusTag } from '@components/atoms/StatusTag'
import { Text } from '@components/atoms/Text'

import {
  SavedContainer,
  SavedStationItem,
  SavedStationList,
} from '@styles/pages/Saved/styles'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Saved() {
  return (
    <DefaultLayout>
      <SavedContainer className="container-content">
        <Text
          content="Estações Favoritadas"
          color="gray_200"
          size="medium"
          weight="semiBold"
        />

        <SavedStationList>
          <SavedStationItem>
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
            <Text
              content="1.8 km de distância"
              color="black"
              size="xxxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" charge />
          </SavedStationItem>
          <SavedStationItem>
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
            <Text
              content="3.8 km de distância"
              color="black"
              size="xxxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" charge />
          </SavedStationItem>
          <SavedStationItem>
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
            <Text
              content="5.8 km de distância"
              color="black"
              size="xxxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" charge />
          </SavedStationItem>
          <SavedStationItem>
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
            <Text
              content="13.8 km de distância"
              color="black"
              size="xxxsmall"
              weight="semiBold"
            />

            <Button content="Carregar" variant="charge" full={true} charge />
          </SavedStationItem>
        </SavedStationList>
      </SavedContainer>
    </DefaultLayout>
  )
}
