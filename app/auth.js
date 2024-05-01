import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./authconfig";
import { connectToDB } from "../app/lib/utils";
import { User } from "../app/lib/models";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong username or password");

    const isValid = await bcrypt.compare(credentials.password, user.password);

    if (!isValid) throw new Error("Wrong username or password");

    return user;
  } catch (error) {
    console.error("Error logging in: ", error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.img = user.img;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.img = token.img;
        session.user.username = token.username;
      }
      return session;
    },
  },
});
