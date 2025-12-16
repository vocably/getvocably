# Chrome Extension 轉換為 Firefox Extension 評估報告

2025/12/15 Aiuanyu/GJRobert x Claude Code Opus 4.5 (@Antigravity)

---

## 實作進度

### Phase 1: 基礎相容性修改 ✅ 完成 (2025/12/16 05:09)

| 任務 | 狀態 | 說明 |
|------|------|------|
| 建立 Firefox Manifest | ✅ | `packages/extension/src/manifest.firefox.json.txt` |
| 統一 service-worker.ts API | ✅ | `chrome.*` → `browserEnv` |
| 統一 extension-stay-alive API | ✅ | `chrome.*` → `browserEnv` |
| 確認 Offscreen fallback | ✅ | 已有完善機制，無需修改 |
| 修改 Webpack 多目標建置 | ✅ | 支援 `TARGET_BROWSER=firefox` |
| 新增建置指令 | ✅ | `npm run build:firefox` |

**Commits:**
- `e6af5bdc` docs: add Firefox extension migration evaluation
- `b75b7ecc` feat(extension): add Firefox extension support (Phase 1)

### 建置測試 ✅ 成功

```bash
# 安裝依賴
npm install

# 建置內部 packages (依序)
npm run build --workspace=@vocably/sulna
npm run build --workspace=@vocably/model
npm run build --workspace=@vocably/webpack
npm run build --workspace=@vocably/extension-messages
npm run build --workspace=@vocably/extension-stay-alive
npm run build --workspace=@vocably/extension-service-worker
npm run build --workspace=@vocably/extension-content-ui
npm run build --workspace=@vocably/extension-content-script
cd packages/extension-popup && npm run build-dev && cd ../..

# 建置 Firefox extension
cd packages/extension && npm run build:firefox
```

**輸出目錄**: `packages/extension/dist-firefox/`

```
dist-firefox/
├── manifest.json       # Firefox 專用 manifest
├── content-script.js   # 909 KB
├── service-worker.js   # 2.04 MB
├── play-audio.js
├── play-audio.html
├── popup/              # Angular popup UI
└── images/             # 擴充套件圖示
```

### Phase 2: External Communication 替代方案 ⏳ 待定

`externally_connectable` 用於讓 `app.vocably.pro` 偵測是否安裝擴充套件。
此為輔助功能，可視需求決定是否實作。

### Phase 4: 測試 ⏳ 待進行

在 Firefox 載入測試：
1. 開啟 `about:debugging`
2. 點擊「This Firefox」
3. 點擊「Load Temporary Add-on...」
4. 選擇 `packages/extension/dist-firefox/manifest.json`

---

## 一、Chrome Extension 原始碼位置

本專案的 Chrome Extension 採用模組化架構，分散在多個 packages 中：

### 主要套件

| 套件 | 路徑 | 說明 |
|------|------|------|
| extension | `packages/extension/` | 主要進入點，Webpack 打包設定 |
| extension-popup | `packages/extension-popup/` | Angular 彈出視窗 UI |
| extension-content-script | `packages/extension-content-script/` | Content Script 邏輯 |
| extension-content-ui | `packages/extension-content-ui/` | Stencil Web Components UI |
| extension-service-worker | `packages/extension-service-worker/` | Service Worker 邏輯 |
| extension-messages | `packages/extension-messages/` | 訊息傳遞抽象層 (Hermes) |
| extension-stay-alive | `packages/extension-stay-alive/` | Service Worker 保活機制 |
| extension-angular-components | `packages/extension-angular-components/` | Angular 共用元件 |

### 關鍵檔案

- **Manifest**: `packages/extension/src/manifest.json.txt`
- **Service Worker**: `packages/extension/src/service-worker.ts`
- **Content Script**: `packages/extension/src/content-script.ts`
- **Browser API 抽象**: `packages/extension/src/browserEnv.ts`
- **Webpack 設定**: `packages/extension/webpack.config.js`

---

## 二、可行性評估

### 結論：**可行** ✅

此專案已具備部分跨瀏覽器相容設計，轉換工作量屬於**中等偏低**。

### 有利因素

1. **已有 `browserEnv` 抽象層**
   ```typescript
   // packages/extension/src/browserEnv.ts
   if (typeof chrome !== 'undefined') {
     browserEnv = chrome;
   } else if (typeof browser !== 'undefined') {
     browserEnv = browser;
   }
   ```
   多數 API 呼叫已透過此抽象層，減少直接依賴 Chrome API。

2. **使用 Manifest V3**
   Firefox 已支援 MV3（自 Firefox 109 起），manifest 結構大致相容。

3. **Offscreen API 已有 Fallback**
   ```typescript
   // packages/extension-content-script/src/playAudioPronunciation.ts
   const canPlayOffScreen = await api.canPlayOffScreen();
   if (canPlayOffScreen) {
     return api.playAudioPronunciation(payload);
   }
   // Fallback: 直接在 content script 播放
   ```

4. **模組化架構**
   各功能獨立封裝，方便針對特定模組進行 Firefox 適配。

### 需解決的問題

| 問題 | 嚴重程度 | 說明 |
|------|----------|------|
| `externally_connectable` | 🔴 高 | Firefox 不支援此 manifest 欄位 |
| `offscreen` 權限 | 🟡 中 | Firefox 不支援 Offscreen API |
| 部分程式碼直接使用 `chrome.*` | 🟡 中 | 未經過 `browserEnv` 抽象層 |
| Service Worker 生命週期 | 🟡 中 | Firefox SW 行為略有差異 |
| `chrome.runtime.OnInstalledReason` | 🟢 低 | 需改用字串比對 |

---

## 三、詳細問題分析

### 3.1 `externally_connectable` 不支援

**現況**：
```json
"externally_connectable": {
  "matches": ["https://app.vocably.pro/*"]
}
```

**影響**：無法讓外部網頁（如 app.vocably.pro）直接與擴充套件通訊。

**解決方案**：
- 使用 Content Script 注入目標頁面
- 透過 `window.postMessage` + Content Script 作為中介橋接

### 3.2 `offscreen` API 不支援

**現況**：
```json
"permissions": ["storage", "offscreen", "contextMenus"]
```

**影響**：Offscreen document 用於在背景播放音訊，Firefox 不支援此功能。

**解決方案**：
- 已有 fallback 機制（在 content script 直接播放）
- 移除 `offscreen` 權限，強制使用 fallback 路徑

### 3.3 直接使用 `chrome.*` API

**問題位置**：

1. `packages/extension/src/service-worker.ts`:
   ```typescript
   chrome.runtime.onInstalled.addListener(...)  // Line 39
   chrome.runtime.setUninstallURL(...)          // Line 47
   chrome.storage.sync.clear()                  // Line 51
   ```

2. `packages/extension-stay-alive/src/index.ts`:
   ```typescript
   chrome.runtime.lastError      // Line 22
   chrome.runtime.onInstalled    // Line 40
   chrome.windows.onCreated      // Line 54
   ```

**解決方案**：統一改用 `browserEnv` 抽象層。

### 3.4 `OnInstalledReason` 列舉

**現況**：
```typescript
if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
```

**Firefox 相容寫法**：
```typescript
if (details.reason === 'install') {
```

---

## 四、轉換步驟規劃

### Phase 1: 基礎相容性修改 ✅

#### Step 1.1: 建立 Firefox Manifest ✅
- [x] 複製 `manifest.json.txt` 為 `manifest.firefox.json.txt`
- [x] 移除 `externally_connectable` 欄位
- [x] 移除 `offscreen` 權限
- [x] 新增 Firefox 特有欄位：
  ```json
  "browser_specific_settings": {
    "gecko": {
      "id": "{{ process.env.FIREFOX_EXTENSION_ID }}",
      "strict_min_version": "109.0"
    }
  }
  ```

#### Step 1.2: 統一 Browser API 抽象 ✅
- [x] 修改 `packages/extension/src/service-worker.ts`
  - 將 `chrome.runtime.onInstalled` 改為 `browserEnv.runtime.onInstalled`
  - 將 `chrome.runtime.setUninstallURL` 改為 `browserEnv.runtime.setUninstallURL`
  - 將 `chrome.storage.sync` 改為 `browserEnv.storage.sync`
  - 將 `chrome.runtime.OnInstalledReason.INSTALL` 改為字串 `'install'`

- [x] 修改 `packages/extension-stay-alive/src/index.ts`
  - 將所有 `chrome.*` 呼叫改為 `browserEnv`

#### Step 1.3: Offscreen API 適配 ✅
- [x] 確認 `hasOffscreen` 檢查已正確實作（檢查 `browserEnv['offscreen']` 是否存在）
- [x] 確認 `canPlayOffScreen` 邏輯在 Firefox 正確運作（Firefox 會回傳 `false`，自動使用 fallback）

### Phase 2: External Communication 替代方案

#### Step 2.1: 建立 Content Script Bridge
- [ ] 新增 `packages/extension/src/external-bridge.ts`
- [ ] 實作 `window.postMessage` 監聽
- [ ] 建立安全的訊息驗證機制（檢查 origin）

#### Step 2.2: 更新目標網頁
- [ ] 修改 app.vocably.pro 與擴充套件的通訊方式
- [ ] 使用 `postMessage` 取代 `chrome.runtime.sendMessage`

### Phase 3: 建置流程調整 ✅

#### Step 3.1: 修改 Webpack 設定 ✅
- [x] 新增 Firefox 建置目標
- [x] 建立環境變數切換機制 (`TARGET_BROWSER=firefox`)
- [x] 新增 `dist-firefox/` 到 `.gitignore`

```javascript
// webpack.config.js (已實作)
const targetBrowser = process.env.TARGET_BROWSER || 'chrome';
const isFirefox = targetBrowser === 'firefox';
const manifestFile = isFirefox ? 'manifest.firefox.json.txt' : 'manifest.json.txt';
const outputDir = isFirefox ? 'dist-firefox' : 'dist';
```

#### Step 3.2: 新增建置指令 ✅
- [x] 在 `package.json` 新增：
  ```json
  {
    "scripts": {
      "build:firefox": "TARGET_BROWSER=firefox webpack --env production",
      "start:firefox": "TARGET_BROWSER=firefox webpack --watch --env development"
    }
  }
  ```

### Phase 4: 測試與發布

#### Step 4.1: 功能測試
- [ ] Content Script 注入測試
- [ ] Service Worker 生命週期測試
- [ ] 音訊播放功能測試（使用 fallback）
- [ ] 右鍵選單功能測試
- [ ] 彈出視窗功能測試
- [ ] 與 app.vocably.pro 通訊測試（如適用）

#### Step 4.2: 相容性測試
- [ ] Firefox 109+ 測試
- [ ] Firefox ESR 測試
- [ ] Firefox Android 測試（如需要）

#### Step 4.3: 發布準備
- [ ] 準備 Firefox Add-ons 商店資料
- [ ] 截圖與描述文案
- [ ] 隱私權政策確認
- [ ] 提交審核

---

## 五、預估工作量

| 階段 | 預估複雜度 | 主要任務 |
|------|-----------|----------|
| Phase 1 | 低 | Manifest 修改、API 抽象統一 |
| Phase 2 | 中 | External communication 替代方案 |
| Phase 3 | 低 | 建置流程調整 |
| Phase 4 | 中 | 完整測試 |

---

## 六、替代方案：使用 WebExtension Polyfill

可考慮使用 Mozilla 的 [webextension-polyfill](https://github.com/AntonyDalmiere/webextension-polyfill) 簡化跨瀏覽器開發：

```bash
npm install webextension-polyfill
```

```typescript
import browser from 'webextension-polyfill';
// 統一使用 browser.* API，自動相容 Chrome 和 Firefox
```

**優點**：
- Promise-based API（Chrome 原本是 callback-based）
- 自動處理大部分跨瀏覽器差異

**缺點**：
- 新增依賴
- 需要重構現有 `browserEnv` 抽象

---

## 七、結論

本專案轉換為 Firefox Extension 是**可行且工作量可控**的。主要工作集中在：

1. **Manifest 調整** - 移除 Firefox 不支援的欄位
2. **統一 API 呼叫** - 將遺漏的 `chrome.*` 改為抽象層
3. **External Communication 替代** - 若需要 `externally_connectable` 功能

建議優先完成 Phase 1，即可產出可運作的 Firefox 版本，再根據實際需求決定是否實作 Phase 2。

## Debugging

### 1. 載入暫時附加元件錯誤
```
安裝暫用附加元件時發生錯誤。
錯誤詳細資訊

Extension is invalid

Reading manifest: Error processing browser_specific_settings.gecko.id: Value "{{ process.env.FIREFOX_EXTENSION_ID }}" must either: match the pattern /^\{[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\}$/i, or match the pattern /^[a-z0-9-._]*@[a-z0-9-._]+$/i
```

**原因**：`FIREFOX_EXTENSION_ID` 環境變數未設定，模板字串未被替換。

**解決**：將 `manifest.firefox.json.txt` 中的 `gecko.id` 改為固定值：
```json
"browser_specific_settings": {
  "gecko": {
    "id": "vocably-extension@vocably.pro",
    "strict_min_version": "109.0"
  }
}
```

Firefox extension ID 必須符合以下格式之一：
- UUID: `{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}`
- Email-like: `name@domain`

### 2. background.service_worker is currently disabled

**原因**：Firefox MV3 使用 `background.scripts` 而非 Chrome 的 `background.service_worker`。

**解決**：修改 `manifest.firefox.json.txt`：
```json
// Chrome (manifest.json.txt)
"background": {
  "service_worker": "service-worker.js"
}

// Firefox (manifest.firefox.json.txt)
"background": {
  "scripts": ["service-worker.js"]
}
```

### 3. content_scripts.0.exclude_matches

> Extension is invalid
>
> Reading manifest: Error processing content_scripts.0.exclude_matches: Array requires at least 1 items; you have 0

**原因**：`CONTENT_SCRIPT_EXCLUDED_MATCHES` 環境變數未設定，產生空陣列 `[]`。Firefox 不允許空的 `exclude_matches`。

**解決**：從 Firefox manifest 移除 `exclude_matches` 欄位：
```json
"content_scripts": [
  {
    "matches": ["*://*/*"],
    "js": ["content-script.js", "play-audio.js"],
    "all_frames": true
  }
]
```

### 4. 登入導到開發頁面
<sup>20251216 8:00</sup> 來測試 Claude 做好的初版！
1. 工具列按鈕可以用！
2. 可以導到登入頁面！
3. 登入卻是空頁面 → https://app.dev.env.vocably.pro/welcome 是因為這是開發版嗎？而且，工具列按鈕也沒有變成已登入的狀態

**原因**：Popup 使用 `npm run build-dev` 建置，導致環境變數指向開發環境 (`app.dev.env.vocably.pro`)。

查看 `packages/extension-popup/package.json` 中的建置指令：
```json
"build-dev": "ng build --configuration development",
"build-prod": "ng build --configuration production"
```

開發環境的設定檔 (`packages/extension-popup/src/environments/environmentLocal.ts`) 使用：
```typescript
appBaseUrl: 'https://app.dev.env.vocably.pro'
```

**解決**：使用 production 建置指令重新編譯 popup：
```bash
cd packages/extension-popup && npm run build-prod && cd ../..
cd packages/extension && npm run build:firefox
```

這樣 popup 會使用 `environment.prod.ts` 中正確的 production URL (`https://app.vocably.pro`)。

### 5. 順利導到 production 頁面登入，但工具列按鈕沒有變成已登入的狀態

**原因**：

**可能原因**：

Chrome 與 Firefox 的 `storage.sync` 和 background script 行為差異：

1. **Background Script 類型差異**：
   - Chrome MV3: 使用 `service_worker`，每次啟動都是全新的執行環境
   - Firefox: 使用 `background.scripts`，可能保持較長的生命週期
   
2. **Storage.sync API 差異**：
   - Firefox 的 `browser.storage.sync` 需要額外權限或配置
   - Chrome 的 `chrome.storage.sync` 會自動與 Google 帳號同步
   - Firefox 可能需要 Firefox Account 登入或使用 `storage.local` 替代

3. **AWS Amplify Auth 狀態儲存問題**：
   - `registerExtensionStorage('sync')` 使用 `storage.sync` 儲存 AWS Cognito tokens
   - Firefox 的 `storage.sync` 可能無法正確寫入或讀取 auth tokens
   - Auth session 無法正確恢復，導致 `Auth.currentSession()` 失敗

4. **`isLoggedIn$` Observable 輪詢機制**：
   ```typescript
   export const isLoggedIn$: Observable<boolean> = timer(0, 2000).pipe(
     switchMap(async () => {
       return await Auth.currentSession()
         .then(() => true)
         .catch(() => false);
     }),
     distinctUntilChanged()
   );
   ```
   每 2 秒檢查一次登入狀態，但如果 storage 無法正確讀取，會一直回傳 `false`。

**調查步驟**：

1. 開啟 Firefox DevTools → Storage → Extension Storage，檢查是否有 AWS Cognito 相關的 keys
2. 查看 service-worker console 是否有錯誤訊息
3. 測試 `browser.storage.sync` vs `browser.storage.local` 的讀寫

**建議解決方案**：

#### 方案 A：改用 `storage.local`（推薦）

修改 `packages/extension/src/service-worker.ts`：

```typescript
// 將 'sync' 改為 'local'
const storage = registerExtensionStorage('local');
```

Firefox 的 `storage.local` 更穩定，且不需要額外的同步帳號配置。

#### 方案 B：確保 Firefox 支援 `storage.sync`

在 `manifest.firefox.json.txt` 中確認 `storage` 權限已正確設定：

```json
"permissions": [
  "storage",
  "contextMenus"
]
```

並在 Firefox 中測試 storage.sync 是否可用：

```javascript
// 在 service-worker console 測試
await browser.storage.sync.set({ test: 'value' });
const result = await browser.storage.sync.get('test');
console.log(result); // 應該顯示 { test: 'value' }
```

#### 方案 C：建立 Firefox 專用的 storage 配置

建立條件判斷，根據瀏覽器選擇 storage 類型：

```typescript
const isFirefox = typeof browser !== 'undefined' && typeof chrome === 'undefined';
const storage = registerExtensionStorage(isFirefox ? 'local' : 'sync');
```

**驗證方法**：

登入後，在 service-worker console 執行：
```javascript
Auth.currentSession()
  .then(session => console.log('✅ Logged in:', session))
  .catch(err => console.error('❌ Not logged in:', err));
```