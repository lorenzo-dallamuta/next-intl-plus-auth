import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import locales from "@/utils/locales.json";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  console.log({ pathname });
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  console.log(locale);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  console.log(request.nextUrl.pathname);
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

function getLocale(request: NextRequest) {
  // let headers = { "accept-language": "en-US,en;q=0.5" };
  // let languages = new Negotiator({ headers }).languages();
  const acceptLanguage = request.headers.get("accept-language");
  let headers = {
    "accept-language": acceptLanguage ?? "en-US,en;q=0.5",
  };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}
