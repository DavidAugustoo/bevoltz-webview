import { useEffect } from 'react'

import { initMercadoPago } from '@mercadopago/sdk-react'

const InitMercadoPago = () => {
  useEffect(() => {
    initMercadoPago('APP_USR-a5c4cee8-680c-4eff-aa3f-eba4566fba6c')
  }, [])

  return null
}

export default InitMercadoPago
