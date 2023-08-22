'   '
import { createContext } from 'react'
import React, { useState, useEffect, ReactNode } from 'react'

import { IReservation } from '@shared/types/reservation'

type ReservationContextProps = {
  reservations: IReservation[]
  saveReservation: (reservation: IReservation) => void
  removeReservation: (name: string) => void
  editReservation: (name: string, updatedReservation: IReservation) => void
  getReservations: () => void
}

export const ReservationContext = createContext<
  ReservationContextProps | undefined
>(undefined)

const LOCAL_STORAGE_KEY = 'reservations'

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [reservations, setReservations] = useState<IReservation[]>([])

  useEffect(() => {
    getReservations()
  }, [])

  const getReservations = () => {
    const storedReservations = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedReservations) {
      setReservations(JSON.parse(storedReservations))
    }
  }

  const saveReservation = (reservation: IReservation) => {
    const updatedReservations = [...reservations, reservation]
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReservations))
    setReservations(updatedReservations)
  }

  const removeReservation = (name: string) => {
    const updatedReservations = reservations.filter(
      (res) => res.station.name !== name,
    )
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReservations))
    setReservations(updatedReservations)
  }

  const editReservation = (name: string, updatedReservation: IReservation) => {
    const updatedReservations = reservations.map((res) =>
      res.station.name === name ? updatedReservation : res,
    )
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedReservations))
    setReservations(updatedReservations)
  }

  return (
    <ReservationContext.Provider
      value={{
        reservations,
        saveReservation,
        removeReservation,
        editReservation,
        getReservations,
      }}
    >
      {children}
    </ReservationContext.Provider>
  )
}
