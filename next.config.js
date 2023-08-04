/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: "https://ashish-ka-server.vercel.app",
    NEXTAUTH_SECRET: "9PlBBwMZ6DXMDJp9tC67gENtsjbcNVm8sf1hvcvwphg=",
  },
};

module.exports = nextConfig;
