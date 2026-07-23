# Handoff: PITWORKS 網站 → 部署至 Vercel

## 專案性質
這不是「重新實作設計」的交接包，而是**已經可以直接運作的完整靜態網站**。目的是讓 Claude Code 幫你把這些檔案原封不動部署上線（Vercel），並在需要時繼續維護。

## 檔案結構
- `index.dc.html` — 首頁
- `ip.dc.html` — IP 公仔頁
- `vehicles.dc.html` — 車輛頁
- `contact.dc.html` — 聯絡頁
- `lang.js` — 中英文切換邏輯
- `support.js` — 頁面執行所需的 runtime，**不可刪除或修改**
- `uploads/` — 圖片與其他上傳素材

這四個 `.dc.html` 檔都是可獨立開啟的完整網頁，彼此用相對路徑連結（`<a href="ip.dc.html">` 等）。

## 給 Claude Code 的部署指示
請依序執行：

1. 在這個資料夾內初始化 git repo（若尚未是 repo）：
   ```
   git init
   git add .
   git commit -m "PITWORKS site"
   ```
2. 建一個 `index.html`，內容為導向 `index.dc.html` 的 redirect（因為 Vercel 預設抓 `index.html`）：
   ```html
   <!DOCTYPE html><meta http-equiv="refresh" content="0; url=/index.dc.html">
   ```
   或直接把 `index.dc.html` 的內容複製一份存成 `index.html`（同步維護兩者，或用 build script 複製）。
3. 加入 `vercel.json`：
   ```json
   {
     "cleanUrls": false,
     "trailingSlash": false
   }
   ```
   不需要 build command，Framework Preset 選 "Other"，Output Directory 為根目錄。
4. 使用 Vercel CLI 部署：
   ```
   npm i -g vercel
   vercel --prod
   ```
   或在 Vercel 網站上 Import 這個 GitHub repo。
5. 部署後確認 4 個頁面與圖片皆能正確載入，導覽列連結（HOME / IP FIGURES / VEHICLES / CONTACT / SHOP）皆正常。

## 之後維護
若要修改文字、連結或圖片，直接編輯對應的 `.dc.html` 檔案原始碼（純 HTML + inline style + 一段 JS class），改完 commit + push 即會觸發 Vercel 重新部署。

## 已知外部連結
- 商店：`https://cosmosdepot.my1shop.com/categories/all`
- Instagram：`https://www.instagram.com/pitworks.ted/`
- Email：`pitworksdesign@gmail.com`
