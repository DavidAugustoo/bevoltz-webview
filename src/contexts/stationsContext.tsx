import { createContext } from 'react'
import React, { useState, useEffect, ReactNode } from 'react'

import { IStation } from '@shared/types/station'

type StationsContextProps = {
  stations: IStation[]
  saveStation: (station: IStation) => void
  removeStation: (name: string) => void
  getStations: () => void
}

export const StationContext = createContext<StationsContextProps | undefined>(
  undefined,
)

const LOCAL_STORAGE_KEY = 'stations'

export const StationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stations, setStations] = useState<IStation[]>([])

  useEffect(() => {
    getStations()
  }, [])

  const getStations = () => {
    const storedReservations = localStorage.getItem(LOCAL_STORAGE_KEY)

    console.log('Dentro do contexto', storedReservations)

    if (storedReservations) {
      setStations(JSON.parse(storedReservations))
    }
  }

  const saveStation = (station: IStation) => {
    const updatedStations = [...stations, station]
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedStations))
    setStations(updatedStations)
  }

  const removeStation = (name: string) => {
    const updatedReservations = stations.filter((res) => res.name !== name)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReservations))
    setStations(updatedReservations)
  }

  return (
    <StationContext.Provider
      value={{
        stations,
        saveStation,
        removeStation,
        getStations,
      }}
    >
      {children}
    </StationContext.Provider>
  )
}
