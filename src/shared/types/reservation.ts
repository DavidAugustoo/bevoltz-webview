import { ICharger, IStation } from './station'

export interface IReservation {
  horario: string
  duracao: string
  price: string
  status: string
  charger: ICharger
  station: IStation
}
