import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  "src/intl/i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: ...nope,
};

export default withNextIntl(nextConfig);
