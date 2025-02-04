/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '', // Leave it empty if you are not using a subdirectory
    output: "export", // Enables static export
    trailingSlash: true, // Ensures all paths have a trailing slash
    images: {
        unoptimized: true, // Fix image loading issues in static export
    },
    reactStrictMode: true,
};

export default nextConfig;
