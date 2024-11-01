import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Provider from '@/app/Provider'

import { headers } from "next/headers";
import { ContextProvider } from "@/config";
import { Config, cookieToInitialState } from "wagmi";
import getConfig from "next/config";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Coolha',
    default: 'Coolha',
  },
  description: "coolha.top,为Lens协议中文用户构建",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookies = headers().get('cookie')
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie')
  )
  return (
    <html lang="zh">
      <head>
        <meta charSet="utf-8" />
        {/*         <meta property="twitter:image" content="/logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="VimCoed:Lens Protocol Web3 Content social 内容社交" />
        <meta property="twitter:description" content="Lens Protocol Web3 Content social" />
        <meta property="description" content="基于Lens协议构建,为中文用户构建,内容社交,社群聊天,放大创作者经济,灵感保证原创,Web3优质内容的去中心化平台" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="VimCord Dapp:基于Lens协议构建,为中文用户设计的去中心化平台" />
        <meta property="og:title" content="VimCord Dapp"></meta>
        <meta property="og:description" content="基于Lens协议构建,为中文用户构建,内容社交,社群聊天,放大创作者经济,灵感保证原创,Web3优质内容的去中心化平台" /> */}
        {/*  <meta property="og:url" content="Canonical link preview URL"></meta> */}
      </head>

      <body className={`${inter.className} bg-base-200`}>
        <Provider>

          <ContextProvider    initialState={initialState}  >

            {children}

          </ContextProvider>





        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
