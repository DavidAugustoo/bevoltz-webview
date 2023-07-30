import { Button } from '@components/atoms/Button'
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
              content="Shopping Pátio Lins"
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
              content="7.8 km de distância"
              color="black"
              size="xxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" />
          </SavedStationItem>
          <SavedStationItem>
            <Text
              content="Shopping Pátio Lins"
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
              content="7.8 km de distância"
              color="black"
              size="xxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" />
          </SavedStationItem>
          <SavedStationItem>
            <Text
              content="Shopping Pátio Lins"
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
              content="7.8 km de distância"
              color="black"
              size="xxsmall"
              weight="semiBold"
            />
            <Button content="Carregar" variant="charge" />
          </SavedStationItem>
          <SavedStationItem>
            <Text
              content="Shopping Pátio Lins"
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
              content="7.8 km de distância"
              color="black"
              size="xxsmall"
              weight="semiBold"
            />

            <Button content="Carregar" variant="charge" full={true} />
          </SavedStationItem>
        </SavedStationList>
      </SavedContainer>
    </DefaultLayout>
  )
}
