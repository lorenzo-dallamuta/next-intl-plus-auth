import { auth } from "@/auth";
import SessionProvider from "@/components/SessionProvider";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}

/**
 * serions talk, is there any sort of issue deriving from
 * wrapping the whole html jsx tag with a provider function?
 */
