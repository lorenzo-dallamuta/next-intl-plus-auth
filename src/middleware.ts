// https://github.com/vercel/next.js/discussions/53997#discussioncomment-8626373
// https://github.com/nextauthjs/next-auth/discussions/8961#discussioncomment-9508689
// https://stackoverflow.com/a/78582968/3950644
// node_modules/.pnpm/next@14.2.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/web/types.d.ts

import createMiddleware from "next-intl/middleware";
import { chain, FinalNextResponse } from "@nimpl/middleware-chain";
import { Middleware } from "@nimpl/middleware-chain/dist/lib/types";
import { auth, BASE_PATH } from "@/auth";
import locales from "@/utils/locales.json";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en",
});

const authMiddleware = auth((req) => {
  const reqUrl = new URL(req.url);
  // if (!req.auth && reqUrl?.pathname === "/protected") {
  const regex = new RegExp(/^\/((en|es)\/)*(protected$|protected(\/.*))/);
  if (!req.auth && regex.test(reqUrl?.pathname)) {
    // return NextResponse.redirect(
    return FinalNextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
          reqUrl?.pathname
        )}`,
        req.url
      )
    );
  } else if (req.auth && reqUrl?.pathname === "/login") {
    // return NextResponse.redirect(new URL(`/`, req.url));
    return FinalNextResponse.redirect(new URL(`/`, req.url));
  }
});

export default chain([
  intlMiddleware,
  (req) => {
    if (req.summary.type === "redirect") return FinalNextResponse.next();
  },
  authMiddleware as unknown as Middleware,
]);

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico).*)", // `/api` still gives issues
    // "/", "/(en|es)/:path*",
  ],
};

// this is a remnant for a diffent approach without daisy chaining where
// a check on the request url path switches on a middleware rather then
// the other, it's useless now since the intl middleware always runs first
// but you never know...
// const publicPages = ["/", "/login"];
// const publicPathnameRegex = RegExp(
//   `^(/(${locales.join("|")}))?(${publicPages
//     .flatMap((p) => (p === "/" ? ["", "/"] : p))
//     .join("|")})/?$`,
//   "i"
// );
