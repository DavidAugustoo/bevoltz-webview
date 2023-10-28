import { IStation } from '@shared/types/station'

export const stations: IStation[] = [
  {
    name: 'FIAP - Aclimação',
    address: {
      cep: '01520-001',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Aclimação',
      street: 'Avenida Lins de Vasconcelos',
      number: '1222',
      service: 'Educação',
      cords: {
        lat: -23.573534358917236,
        lng: -46.62331323068125,
      },
    },
    chargers: [
      { name: 'Charger A', plugType: 'Type 1', status: 'Available', power: 50 },
    ],
    operatingHours: '07:00 - 22:00',
    phone: '11-33858010',
  },
  {
    name: 'ARCA - EVENTO NEXT',
    address: {
      cep: '01520-001',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Bela Bista',
      street: 'Av. Paulista',
      number: '1106',
      service: 'Educação',
      cords: {
        lat: -23.539353961466066,
        lng: -46.734475446916534,
      },
    },
    chargers: [
      { name: 'Charger A', plugType: 'Type 1', status: 'Available', power: 50 },
    ],
    operatingHours: '06:00 - 18:00',
    phone: '11-1234-5678',
  },
]
