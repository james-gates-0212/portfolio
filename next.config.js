/** @type {import('next').NextConfig} */
const ChildProcess = require('child_process');
const NextBundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  output: 'export',
  images: { unoptimized: process.env.NODE_ENV === 'development' },
  basePath: process.env.BASE_PATH || '',
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    const commitHash = ChildProcess.execSync('git log --pretty=format:"%h" -n1').toString().trim();
    return process.env.GIT_HASH || commitHash;
  },
});

module.exports = nextConfig;
