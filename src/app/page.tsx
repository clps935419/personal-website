// 服務端渲染頁面 - 不使用 "use client"
import Image from "next/image";
import Link from "next/link";
import { 
  CodeOutlined, 
  CloudServerOutlined, 
  RobotOutlined, 
  CheckOutlined,
} from "@ant-design/icons";
import LineButton from "@/components/LineButton";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 導航欄 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="Leonard Logo" 
              width={40} 
              height={40} 
              className="mr-3 rounded-full"
            />
            <div className="text-xl font-bold">里納德程式小幫手</div>
          </div>
          <nav className="relative">
            <ul className="hidden md:flex space-x-6">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">關於我</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">服務項目</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">聯絡我</a></li>
            </ul>
            
            {/* 行動版選單按鈕 - 使用客戶端組件 */}
            <MobileMenu />
          </nav>
        </div>
      </header>

      <main>
        {/* 首頁橫幅 Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">高屏地區專業網站開發與數位解決方案</h1>
                <p className="text-xl mb-8">打造符合您需求的優質網站與 Line 聊天機器人，提升您的業務效率</p>
                <a
                  href="https://line.me/R/ti/p/@095bkacu" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  立即LINE諮詢
                </a>
              </div>
              <div className="md:w-2/5">
                <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-center">專業服務</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 flex items-center justify-center">
                        <CodeOutlined />
                      </span>
                      前後端網站開發
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 flex items-center justify-center">
                        <CloudServerOutlined />
                      </span>
                      網站架設服務
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 flex items-center justify-center">
                        <RobotOutlined />
                      </span>
                      Line 聊天機器人
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 關於 Leonard */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">關於我</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="rounded-full overflow-hidden w-64 h-64 mx-auto border-4 border-white shadow-lg">
                  <Image 
                    src="/logo.jpg" 
                    alt="Leonard Logo" 
                    width={256} 
                    height={256} 
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <p className="text-lg mb-6">
                  我是 Leonard，一位專業的網站開發者，擁有豐富的前後端開發經驗。我致力於為客戶打造高效能、易於管理的網站，無論是企業官網、電子商務平台還是內部系統，皆能提供完善的解決方案。
                </p>
                <p className="text-lg mb-6">
                  除了網站開發，我還專精於 Line 聊天機器人的設計開發，能為您的業務自動化提供強大支援，提升客戶互動體驗。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React/Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">資料庫設計</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">雲端部署</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Line Bot API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 服務項目 */}
        <section id="services" className="py-20 bg-blue-100 w-full">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">服務項目</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 前後端網站開發 */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all hover:transform hover:scale-105">
                <div className="text-4xl text-blue-600 mb-6 flex justify-center">
                  <CodeOutlined />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">前後端網站開發</h3>
                <p className="text-gray-600 mb-6">
                  提供全方位的網站開發服務，為您打造符合需求的客製化網站。
                </p>
                <ul className="text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    響應式網頁設計
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    一頁式網站開發
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    API 開發與整合
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    資料庫設計與管理
                  </li>
                </ul>
              </div>

              {/* 架站 */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all hover:transform hover:scale-105">
                <div className="text-4xl text-blue-600 mb-6 flex justify-center">
                  <CloudServerOutlined />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">網站架設服務</h3>
                <p className="text-gray-600 mb-6">
                  幫助您將網站部署至雲端伺服器，設定網域、SSL 憑證，確保網站安全且穩定地運行，讓您無需擔心技術問題。
                </p>
                <ul className="text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    雲端伺服器設定
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    網域申請與設定
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    SSL 憑證安裝
                  </li>
                </ul>
              </div>

              {/* Line 聊天機器人 */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 transition-all hover:transform hover:scale-105">
                <div className="text-4xl text-blue-600 mb-6 flex justify-center">
                  <RobotOutlined />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Line 聊天機器人</h3>
                <p className="text-gray-600 mb-6">
                  打造智能 Line 聊天機器人，自動回應客戶查詢、處理訂單、提供服務預約等功能，提升業務效率和客戶體驗。
                </p>
                <ul className="text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    客製化機器人功能
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    自動回應系統
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    會員系統整合
                  </li>
                  <li className="flex items-center">
                    <CheckOutlined className="text-green-500 mr-2" />
                    訂單處理與追蹤
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">關於我</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">服務項目</a>
            </div>
          </div>
          <hr className="border-gray-800 my-8" />
          <div className="text-center text-white-500 mb-6">
            <h2 className="text-xl font-bold mb-2">聯絡我</h2>
            <p className="text-sm mb-2">如果您有任何問題或需求，歡迎透過以下信箱聯絡我：</p>
            <a 
              href="mailto:clps935419@gmail.com" 
              className="text-blue-400 text-sm font-medium hover:underline"
            >
              clps935419@gmail.com
            </a>
          </div>
          <div className="text-center text-white-500">
            © {new Date().getFullYear()} 里納德程式小幫手 版權所有
          </div>
        </div>
      </footer>

      {/* LINE 浮動按鈕 */}
      <LineButton lineId="@095bkacu" />
    </div>
  );
}
