# 使用 Node.js 作為基底映像檔
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安裝生產環境依賴
RUN npm install --production

# 複製專案檔案
COPY . .

# 建置 Next.js 專案
RUN npm run build

# 暴露應用程式埠
EXPOSE 3000

# 啟動應用程式
CMD ["npm", "run", "start"]