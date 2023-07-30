import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Home: React.FC = () => {
  const { data: session } = useSession()

  if (!session) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>Olá, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
      <img src={session.user?.image || ''} alt="Imagem do perfil" />
    </div>
  )
}

export default Home
