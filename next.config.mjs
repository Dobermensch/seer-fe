/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NODE_ENV === "production" ? "https://seer-be-2110dd3ebd6f.herokuapp.com" : "http://localhost:3001"
  }
};

export default nextConfig;
