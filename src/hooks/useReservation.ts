import { useContext } from 'react'

import { ReservationContext } from 'src/contexts/reservationsContext'

export const useReservations = () => {
  const context = useContext(ReservationContext)

  if (!context) {
    throw new Error('useReservations must be used within a ReservationProvider')
  }

  return context
}
