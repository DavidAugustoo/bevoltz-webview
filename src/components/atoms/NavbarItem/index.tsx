import Link from 'next/link'
import React from 'react'

interface INavbarItem {
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  href: string
  activePath: string
}

export function NavbarItem({ icon, href, activePath }: INavbarItem) {
  const isActive = activePath === href
  const statusColor = isActive ? '#223739' : '#54BF8D'

  return (
    <Link href={href} passHref>
      <span>
        {React.cloneElement(icon, { size: '20', color: statusColor })}
      </span>
    </Link>
  )
}
