import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { locales } from "@/intl";

export const GET = auth(async ({ auth, headers}) => {
  // Receive the `locale` via a search param
  // const { searchParams } = new URL(url);
  // const locale = searchParams.get("locale");

  // Receive the `locale` via layout segment (through referer header)
  let locale = "en";
  const referer = headers.get("referer");
  if (referer != null) {
    const segmentRegex = new RegExp(/^\/([a-zA-Z]+)\/{0,1}/);
    const pathname = new URL(referer).pathname;
    const match = pathname.match(segmentRegex);
    if (match && locales.includes(match[1])) {
      locale = match[1];
    }
  }

  // Receive the `locale` via accept-language header
  // const acceptLannguage = req.headers.get("accept-language");
  // // do something with `en-US,en;q=0.9,it;q=0.8`

  const t = await getTranslations({ locale, namespace: "Whoami" });

  return NextResponse.json({
    name: auth?.user?.name,
    title: t("title")
  });
});
