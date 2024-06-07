// "use client";

import { useLocale } from "next-intl";
// import Error from "next/error";

export default function Page() {
  const locale = useLocale();

  return (
    /**
     * we need to add html and body tag, because the root
     * layout delegates them to the localized layout
     */
    <html lang="en">
      <body>
        <p>not found - outside</p>
        <p>locale: {locale}</p>
        {/* <Error statusCode={404} /> */}
      </body>
    </html>
  );
}
