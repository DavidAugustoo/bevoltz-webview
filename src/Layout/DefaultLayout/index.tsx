import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

import { NavbarItem } from '@components/atoms/NavbarItem'

import { Navbar } from './styles'

import {
  ChargingStation,
  BookmarkSimple,
  BatteryChargingVertical,
  User,
} from '@phosphor-icons/react'

interface LayoutProps {
  children: ReactNode
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  return (
    <div>
      {children}
      <Navbar>
        <NavbarItem
          icon={<ChargingStation />}
          href="/home"
          activePath={router.pathname}
        />
        <NavbarItem
          icon={<BookmarkSimple />}
          href="/saved"
          activePath={router.pathname}
        />
        <NavbarItem
          icon={<BatteryChargingVertical />}
          href="/charges"
          activePath={router.pathname}
        />
        <NavbarItem
          icon={<User />}
          href="/profile"
          activePath={router.pathname}
        />
      </Navbar>
    </div>
  )
}
