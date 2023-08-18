import { ICharger, IStation } from '@shared/types/station'

import { Text } from '@components/atoms/Text'

import {
  ChargerCardContainer,
  ChargerDescription,
  ChargerImage,
  ChargerStatus,
  ChargerStatusIndicator,
} from './styles'

import plugA from '@assets/plug-1.svg'
import { CaretRight } from '@phosphor-icons/react'

interface ChargerCardProps {
  charger: ICharger
}

export function ChargerCard({ charger }: ChargerCardProps) {
  return (
    <ChargerCardContainer>
      <ChargerImage src={plugA} alt="" />
      <ChargerDescription>
        <Text
          content="IEC62196"
          color="gray_100"
          size="xxxsmall"
          weight="medium"
        />
        <Text content="25KW DC" color="gray_400" size="xsmall" weight="bold" />
        <Text
          content="ID: 18372"
          color="gray_100"
          size="xxxsmall"
          weight="medium"
        />
      </ChargerDescription>

      <ChargerStatus>
        <ChargerStatusIndicator></ChargerStatusIndicator>
        <Text content="Não Disponível" color="gray_400" size="xxxsmall" />
      </ChargerStatus>

      <CaretRight size={26} />
    </ChargerCardContainer>
  )
}
