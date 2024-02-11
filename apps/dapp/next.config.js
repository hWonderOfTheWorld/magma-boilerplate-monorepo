module.exports = {
  reactStrictMode: true,
  transpilePackages: [ "ui", "dapp-contracts",  "network-tools"],
  eslint: {
    ignoreDuringBuilds: true,
  },
   webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/404',
        permanent: false,
        missing: [
          {
            type: 'query',
            key: 'secret',
            value: 'yum-activated'
          }
        ]
      },
    ]
  },
};
