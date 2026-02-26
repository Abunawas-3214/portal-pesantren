/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.pesantrennu.id',
                pathname: '/storage/**',
            },
        ]
    }
};

export default nextConfig;
