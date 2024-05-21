/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: 'http://localhost:8080/api',
        MAX_FETCH_SIZE: '100'
    }
};

export default nextConfig;
