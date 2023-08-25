import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { Map } from '@components/atoms/Map'

import { HomeContainer } from '@styles/pages/Home/styles'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Home() {
  const router = useRouter()

  const { chargeSuccess } = router.query

  if (chargeSuccess == 'true') {
    toast('⚡Recarga concluída!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return (
    <DefaultLayout>
      <HomeContainer>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Map />
      </HomeContainer>
    </DefaultLayout>
  )
}
