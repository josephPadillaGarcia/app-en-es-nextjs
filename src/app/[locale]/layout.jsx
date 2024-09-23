import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/header";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata = {
  title: "Next dos idiomas",
  description: "Next dos idiomas",
};

export default async function RootLayout({ children, params }) {

  const { locale } = params;

  // Proveer todos los mensajes al cliente
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className=""
      >
        
      <Header lang={locale}/>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
