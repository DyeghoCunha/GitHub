/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname:"raw.githubusercontent.com",
        port:"",
        pathname:"**",
      },
       {
        protocol: "https",
        hostname:"randomuser.me",
        port:"",
        pathname:"**",
      },{
        protocol: "https",
        hostname:"exemplo.com",
        port:"",
        pathname:"**",
      },
        {
        protocol: 'https',
        hostname: 'dyeghocunha-udemy-nextjs-demo-user-image.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'samucatsv2.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      
    ]
  }
};

export default nextConfig;
