/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config
  },
}
