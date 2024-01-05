import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({ subsets: ["latin"] });
import ConfigureAmplifyClientSide from "../components/ConfigureAmplify";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Cognito Auth",
  description: "Simple app to demonstrate cognito auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <ConfigureAmplifyClientSide />
          {children}
        </Providers>
      </body>
    </html>
  );
}
