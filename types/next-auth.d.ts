import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name: string;
      token: string;
      message: string;
      //more to be added as needed
    };
  }
}
