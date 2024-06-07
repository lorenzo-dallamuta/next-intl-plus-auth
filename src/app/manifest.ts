import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  // Pick a locale that is representative of the app
  const locale = "en";

  const t = await getTranslations({
    locale,
    namespace: "Manifest",
  });

  return {
    name: t("name"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
