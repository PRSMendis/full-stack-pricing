import "~/styles/globals.css";
import "@mantine/core/styles.css"

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { MantineProvider, createTheme } from "@mantine/core";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const theme = createTheme({
  /** Put your mantine theme override here */
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
