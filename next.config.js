/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  