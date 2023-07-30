import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { SocialButton } from '@components/atoms/SocialButton'
import { Text } from '@components/atoms/Text'

import beVoltzLogo from '@assets/bevoltz-logo.svg'
import { Aperture } from '@phosphor-icons/react'
import { ButtonArea, HomeContainer } from '@styles/pages/Home/stylets'

export default function Home() {
  return (
    <HomeContainer>
      <Image src={beVoltzLogo} alt="oi" />
      <Text
        content="Conectando motoristas e estações de carregamento em uma rede global unificada."
        color="gray_100"
        align="center"
        weight="semiBold"
      />

      <ButtonArea>
        <SocialButton variant="apple" full={true} />
        <SocialButton variant="google" full={true} />
        <Button content="CONTINUAR COM EMAIL" variant="secondary" full={true} />
      </ButtonArea>
    </HomeContainer>
  )
}
