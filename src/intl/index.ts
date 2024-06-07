// /node_modules/next-intl/dist/types/src/middleware/NextIntlMiddlewareConfig.d.ts

import { Pathnames } from "next-intl/navigation";

// Used when no locale matches
export const defaultLocale = "en";

// A list of all locales that are supported
export const locales = ["en", "es"];

export const localePrefix = "as-needed"; // 'as-needed' | 'always' | 'never'

export const pathnames = {
  "/": "/",

  "/login": "/login",

  "/apiFromClient": {
    en: "/apiFromClient",
    es: "/apiDelClient",
  },

  "/apiFromServer": {
    en: "/apiFromServer",
    es: "/apiDelServer",
  },

  "/protected": {
    en: "/protected",
    es: "/protegido",
  },

  "/serverAction": {
    en: "/serverAction",
    es: "/accionServer",
  },
} satisfies Pathnames<typeof locales>;
