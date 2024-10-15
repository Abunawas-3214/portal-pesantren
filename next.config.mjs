/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'app.pesantrennu.id',
                pathname: '/storage/**',
            },
        ]
        // domains: ['localhost', '127.0.0.1'],
    }
};

export default nextConfig;
