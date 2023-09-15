/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source : '/(.*)',
        headers : [
          {
            key : 'X-Frame-Options',
            value : 'DENY',
          },
          {
            key : 'X-XSS-Protection',
            value : '1; mode=block',
          },
          {
            key : 'X-Content-Type-Options',
            value : 'nosniff',
          },
          {
            key : 'Referrer-Policy',
            value : 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // add security headers to static files
  async headers() {
    return [
      {
        source : '/(.*)',
        headers : [
          {
            key : 'X-Frame-Options',
            value : 'DENY',
          },
          {
            key : 'X-XSS-Protection',
            value : '1; mode=block',
          },
          {
            key : 'X-Content-Type-Options',
            value : 'nosniff',
          },
          {
            key : 'Referrer-Policy',
            value : 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

                   module.exports = nextConfig
