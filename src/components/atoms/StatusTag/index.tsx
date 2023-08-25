import { Text } from '@components/atoms/Text'

import { StatusTagContainer } from './styles'

export interface StatusTagProps {
  variant: 'In Progress' | 'Canceled' | 'Available' | 'Scheduled' | 'Completed'
}

const renamedStatusTag = {
  'In Progress': 'Em progresso',
  Canceled: 'Cancelado',
  Available: 'Disponível',
  Scheduled: 'Agendado',
  Completed: 'Completo',
}

export function StatusTag({ variant }: StatusTagProps) {
  return (
    <StatusTagContainer variant={variant}>
      <Text
        content={renamedStatusTag[variant]}
        color="white"
        align="center"
        size="xxsmall"
      />
    </StatusTagContainer>
  )
}
