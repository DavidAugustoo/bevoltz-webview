import { IStation } from '@shared/types/station'

export const stations: IStation[] = [
  {
    name: 'Padaria Aclimação',
    address: {
      cep: '01520-001',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Aclimação',
      street: 'Rua Líbero Badaró',
      number: '456',
      service: 'Full Service',
      cords: {
        lat: -23.5711,
        lng: -46.6412,
      },
    },
    chargers: [
      { name: 'Charger A', plugType: 'Type 1', status: 'Available', power: 50 },
    ],
    operatingHours: '06:00 - 18:00',
    phone: '11-1234-5678',
  },
  {
    name: 'Mercado Central',
    address: {
      cep: '01522-002',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Aclimação',
      street: 'Rua Conselheiro Furtado',
      number: '789',
      service: 'Self Service',
      cords: {
        lat: -23.5725,
        lng: -46.639,
      },
    },
    chargers: [
      { name: 'Charger X', plugType: 'Type 2', status: 'Occupied', power: 100 },
    ],
    operatingHours: '24/7',
    phone: '11-2345-6789',
  },
  // Mais 8 exemplos fictícios
  // ...
  {
    name: 'Hotel Bela Vista',
    address: {
      cep: '01523-003',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Aclimação',
      street: 'Rua Tamandaré',
      number: '321',
      service: 'Full Service',
      cords: {
        lat: -23.5702,
        lng: -46.6367,
      },
    },
    chargers: [
      { name: 'Charger H', plugType: 'Type 3', status: 'Available', power: 60 },
    ],
    operatingHours: '24/7',
    phone: '11-3456-7890',
  },
  {
    name: 'Restaurante Tropicana',
    address: {
      cep: '01524-004',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Aclimação',
      street: 'Avenida da Aclimação',
      number: '111',
      service: 'Self Service',
      cords: {
        lat: -23.5733,
        lng: -46.6381,
      },
    },
    chargers: [
      { name: 'Charger T', plugType: 'Type 1', status: 'Occupied', power: 40 },
    ],
    operatingHours: '10:00 - 23:00',
    phone: '11-4567-8901',
  },

  {
    name: 'Farmácia Lins',
    address: {
      cep: '01538-000',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Cambuci',
      street: 'Avenida Lins de Vasconcelos',
      number: '100',
      service: 'Self Service',
      cords: {
        lat: -23.5663,
        lng: -46.625,
      },
    },
    chargers: [
      { name: 'Charger F', plugType: 'Type 2', status: 'Available', power: 70 },
    ],
    operatingHours: '08:00 - 22:00',
    phone: '11-5678-9012',
  },
  // Mais 9 exemplos...
  {
    name: 'Lavanderia Vasconcelos',
    address: {
      cep: '01539-001',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Vila Mariana',
      street: 'Avenida Lins de Vasconcelos',
      number: '200',
      service: 'Full Service',
      cords: {
        lat: -23.568,
        lng: -46.627,
      },
    },
    chargers: [
      { name: 'Charger L', plugType: 'Type 3', status: 'Occupied', power: 80 },
    ],
    operatingHours: '09:00 - 19:00',
    phone: '11-6789-0123',
  },
  {
    name: 'Supermercado Cambuci',
    address: {
      cep: '01540-002',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Cambuci',
      street: 'Avenida Lins de Vasconcelos',
      number: '300',
      service: 'Self Service',
      cords: {
        lat: -23.5695,
        lng: -46.6285,
      },
    },
    chargers: [
      { name: 'Charger S', plugType: 'Type 1', status: 'Available', power: 60 },
    ],
    operatingHours: '24/7',
    phone: '11-7890-1234',
  },
  {
    name: 'Pizzaria Bella Napoli',
    address: {
      cep: '01541-003',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Vila Mariana',
      street: 'Avenida Lins de Vasconcelos',
      number: '400',
      service: 'Full Service',
      cords: {
        lat: -23.5701,
        lng: -46.629,
      },
    },
    chargers: [
      { name: 'Charger P', plugType: 'Type 2', status: 'Occupied', power: 50 },
    ],
    operatingHours: '16:00 - 00:00',
    phone: '11-8901-2345',
  },
  {
    name: 'Academia Corpo e Alma',
    address: {
      cep: '01542-004',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Cambuci',
      street: 'Avenida Lins de Vasconcelos',
      number: '500',
      service: 'Self Service',
      cords: {
        lat: -23.5712,
        lng: -46.6302,
      },
    },
    chargers: [
      { name: 'Charger A', plugType: 'Type 3', status: 'Available', power: 90 },
    ],
    operatingHours: '06:00 - 23:00',
    phone: '11-9012-3456',
  },
  {
    name: 'Pet Shop Amigo Fiel',
    address: {
      cep: '01543-005',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Vila Mariana',
      street: 'Avenida Lins de Vasconcelos',
      number: '600',
      service: 'Full Service',
      cords: {
        lat: -23.5723,
        lng: -46.6315,
      },
    },
    chargers: [
      { name: 'Charger P', plugType: 'Type 1', status: 'Occupied', power: 40 },
    ],
    operatingHours: '09:00 - 18:00',
    phone: '11-0123-4567',
  },
  {
    name: 'Café Vasconcelos',
    address: {
      cep: '01544-006',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Cambuci',
      street: 'Avenida Lins de Vasconcelos',
      number: '700',
      service: 'Self Service',
      cords: {
        lat: -23.5734,
        lng: -46.632,
      },
    },
    chargers: [
      { name: 'Charger C', plugType: 'Type 2', status: 'Available', power: 30 },
    ],
    operatingHours: '07:00 - 19:00',
    phone: '11-1234-5670',
  },
  {
    name: 'Loja de Eletrônicos TechZone',
    address: {
      cep: '01545-007',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Vila Mariana',
      street: 'Avenida Lins de Vasconcelos',
      number: '800',
      service: 'Full Service',
      cords: {
        lat: -23.574,
        lng: -46.633,
      },
    },
    chargers: [
      { name: 'Charger T', plugType: 'Type 3', status: 'Occupied', power: 100 },
    ],
    operatingHours: '09:00 - 20:00',
    phone: '11-2345-6780',
  },
  // Continua...
]
