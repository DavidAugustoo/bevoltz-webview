import { useContext } from 'react'

import { StationContext } from 'src/contexts/stationsContext'

export const useStations = () => {
  const context = useContext(StationContext)

  if (!context) {
    throw new Error('useStations must be used within a StationProvider')
  }

  return context
}
