import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connecctDB } from '@/libs/mongodb';
import admin from '@/models/admin';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        await connecctDB();

        const adminFound = await admin
          .findOne({ email: credentials?.email })
          .select('+contraseña');
        if (!adminFound) {
          throw new Error('Invalid Credentials');
        }

        await bcrypt.compare(credentials!.password, adminFound!.contraseña);
        return adminFound;
      }
    })
  ],
  callbacks: {
    jwt({ token, user }: any) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
});

export { handler as GET, handler as POST };
