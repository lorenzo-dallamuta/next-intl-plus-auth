/**
 * THIS IS NOT a builtin special way to handle the not-found template
 * 
 * the premise of this solution is that if no static route can be matched 
 * then the requested url (which is handled as a dynamic path segment) is 
 * just an unexpected url and should render some "not found" logic
 * 
 * THEN the notFound() function is invoked which will render the root level
 * not-found.tsx page under the localized url and the localized layout (with
 * the next-intl provider), making localization available outside the [locale]
 * path segment
 * 
 * its a big hack.
 * 
 * https://github.com/vercel/next.js/discussions/50518#discussioncomment-9691184
 */

import { notFound } from "next/navigation";

export default function Page() {
  return notFound();
}
