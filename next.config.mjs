/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: 'https://admin-sate-beber.azurewebsites.net/api/categories',
        MAX_FETCH_SIZE: '2'
    }
};

export default nextConfig;
