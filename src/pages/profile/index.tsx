import { signOut } from 'next-auth/react'

import { Button } from '@components/atoms/Button'
import { Text } from 'src/components/atoms/Text'

import {
  CaretRight,
  Info,
  Lifebuoy,
  PencilSimple,
  Question,
  Scroll,
  SignOut,
} from '@phosphor-icons/react'
import {
  ProfileCategory,
  ProfileContainer,
  ProfileLogout,
  ProfileOption,
} from '@styles/pages/Profile/styles'
import { DefaultLayout } from 'src/Layout/DefaultLayout'

const infoOption = [
  {
    title: 'Informações',
    icon: <Info size={20} weight="fill" />,
  },
  {
    title: 'Perguntas Frequentes',
    icon: <Question size={20} weight="fill" />,
  },
  {
    title: 'Termos de utilização',
    icon: <Scroll size={20} weight="fill" />,
  },
  {
    title: 'Ajuda e suporte',
    icon: <Lifebuoy size={20} weight="fill" />,
  },
]

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <ProfileContainer className="container-content">
        <span>
          <Text
            content="Configuração de conta"
            color="gray_200"
            size="medium"
            weight="semiBold"
          />

          <ProfileCategory>
            <Text
              content="Informação"
              color="gray_80"
              size="small"
              weight="semiBold"
            />

            {infoOption.map(({ icon, title }, index) => {
              return (
                <ProfileOption key={index}>
                  <div>
                    {icon}

                    <Text
                      content={title}
                      color="black"
                      size="xsmall"
                      weight="semiBold"
                    />
                  </div>
                  <CaretRight size={15} weight="bold" />
                </ProfileOption>
              )
            })}
          </ProfileCategory>
        </span>

        <ProfileLogout>
          <ProfileOption
            onClick={() => {
              signOut({ callbackUrl: '/' })
            }}
          >
            <div>
              <SignOut size={20} weight="fill" />

              <Text
                content={'Sair'}
                color="black"
                size="xsmall"
                weight="semiBold"
              />
            </div>
            <CaretRight size={15} weight="bold" />
          </ProfileOption>
        </ProfileLogout>
      </ProfileContainer>
    </DefaultLayout>
  )
}
