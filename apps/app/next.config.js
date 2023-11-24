//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
		    return [
      {
        source: '/api',
        // destination: `https://${process.env.API_URL}/api` || `https://nx-boila-awesome.vercel.app/api` || `http://localhost:3000/api`,
        destination: `https://nx-boila-super.vercel.app/api`,
      },
      {
        source: '/api/:path*',
        // destination: `https://${process.env.API_URL}/api/:path*` || `https://nx-boila-awesome.vercel.app/api/:path*` || `http://localhost:3000/api/:path*`,
        destination: `https://nx-boila-awesome.vercel.app/api/:path*`,
      },
    ];
	},
};

module.exports = withNx(nextConfig);