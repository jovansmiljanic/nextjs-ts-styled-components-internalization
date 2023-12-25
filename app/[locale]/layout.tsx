// Global styles
import GlobalStyle from "@styles/globalStyles";

// Fonts
import { Comfortaa } from "next/font/google";

// Providers
import Providers from "providers";

// Store context
import { Store } from "@context";

// Global context
import { Layout } from "@components";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata = {
  title: "App name",
  description: "App description",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    return notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className={comfortaa.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <title>App name</title>
      </head>

      <body>
        <Providers>
          <GlobalStyle />

          <NextIntlClientProvider locale={locale} messages={messages}>
            <Store>
              <Layout>{children}</Layout>
            </Store>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
