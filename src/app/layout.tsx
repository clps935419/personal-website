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
  title: "里納德程式小幫手｜高雄屏東網站開發、架站、Line 機器人專家",
  description: "里納德程式小幫手專注於高雄、屏東地區，提供專業前後端網站開發、網站架設、Line 聊天機器人與數位轉型顧問服務，協助企業打造高效數位解決方案，提升品牌競爭力。",
  keywords: "高雄網站開發, 屏東網站開發, 網站架設, 前端開發, 後端開發, Line 聊天機器人, 網頁設計, 數位轉型, 小型企業網站, RWD, SEO, 客製化開發",
  openGraph: {
    title: "里納德程式小幫手｜高雄屏東網站開發、架站、Line 機器人專家",
    description: "高雄、屏東專業網站開發、架站、Line 聊天機器人與數位顧問服務，協助企業數位升級。",
    url: "http://leonardtechsolutions.com/",
    siteName: "里納德程式小幫手 Leonard Tech Solutions",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "里納德程式小幫手 Logo"
      }
    ]
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
