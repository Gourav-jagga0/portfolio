//const isDev = process.env.NODE_ENV !== "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  assetPrefix: "",
  trailingSlash: true,
  //headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
  // async rewrites() {
  //   if (isDev) {
  //     return [
  //       {
  //         source: "/api/:path*",
  //         destination: "http://localhost:3000/api/:path*",
  //       },
  //     ];
  //   }
  //   return [];
  // },
};
module.exports = nextConfig;
