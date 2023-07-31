import { signOut } from 'next-auth/react'

import { DefaultLayout } from 'src/Layout/DefaultLayout'

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <p>Perfil</p>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
    </DefaultLayout>
  )
}
