/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: '',
        pathname: '/ytc/**',
      },

      {
        protocol: 'https',
        hostname: 'mui.com/static/themes',
        port: '',
        pathname: '/onepirate/productCurvyLines.png',
      }
      
    ],
  }
}

module.exports = nextConfig
