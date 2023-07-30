import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

import { Map } from '@components/atoms/Map'

import { HomeContainer } from '@styles/pages/Home/styles'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <HomeContainer>
        <Map />
      </HomeContainer>
    </DefaultLayout>
  )
}
