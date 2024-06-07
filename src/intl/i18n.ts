import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/intl";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  console.log("getRequestConfig", locale)
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
