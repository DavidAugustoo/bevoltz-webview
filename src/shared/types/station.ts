export interface ICharger {
  name: string
  plugType: string
  status: string
  power: number
}

export interface IStation {
  name: string
  address: {
    cep: string
    state: string
    city: string
    neighborhood: string
    number: string
    street: string
    service: string
    cords: {
      lat: number
      lng: number
    }
  }
  chargers: ICharger[]
  operatingHours: string
  phone: string
}
