import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: 'select_account',
        },
      },
    }),
    // Você pode adicionar mais provedores conforme necessário
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Adicione aqui as configurações de callback, session, etc., conforme necessário
})
