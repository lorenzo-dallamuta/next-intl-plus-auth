/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    /* not sure how this would work with localhost */
    // domains: [
    //   {
    //     domain: "local.com",
    //     defaultLocale: "en",
    //   },
    //   {
    //     domain: "local.es",
    //     defaultLocale: "es",
    //   },
    // ],
  },
};

export default nextConfig;
