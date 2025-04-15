import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from 'antd';
import zhTW from 'antd/locale/zh_TW';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leonard | 專業網站開發與架設服務",
  description: "專業提供前後端網站開發、網站架設與 Line 聊天機器人開發服務，為您的業務打造最佳數位解決方案。",
  keywords: "網站開發, 前端開發, 後端開發, 架站服務, Line 聊天機器人, 網頁設計",
  openGraph: {
    title: "Leonard | 專業網站開發與架設服務",
    description: "專業提供前後端網站開發、網站架設與 Line 聊天機器人開發服務，為您的業務打造最佳數位解決方案。",
    url: "https://leonard-services.com", 
    siteName: "Leonard 專業網站服務",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} antialiased`}>
        <ConfigProvider locale={zhTW}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
