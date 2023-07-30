import { signIn } from 'next-auth/react'
import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { SocialButton } from '@components/atoms/SocialButton'
import { Text } from '@components/atoms/Text'

import beVoltzLogo from '@assets/bevoltz-logo.svg'
import { ButtonArea, HomeContainer } from '@styles/pages/Home/stylets'

export default function Home() {
  return (
    <HomeContainer className="container-content">
      <Image src={beVoltzLogo} alt="oi" />
      <Text
        content="Conectando motoristas e estações de carregamento em uma rede global unificada."
        color="gray_100"
        align="center"
        weight="semiBold"
      />

      <ButtonArea>
        <SocialButton variant="apple" full={true} />
        <SocialButton
          variant="google"
          full={true}
          onClick={() =>
            signIn('google', {
              callbackUrl: '/home',
            })
          }
        />
        <Button content="CONTINUAR COM EMAIL" variant="secondary" full={true} />
      </ButtonArea>
    </HomeContainer>
  )
}
