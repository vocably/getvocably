# Chrome Extension 轉換為 Firefox Extension 評估報告

2025/12/15 Aiuanyu/GJRobert x Claude Code Opus 4.5 (@Antigravity)

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

### Phase 1: 基礎相容性修改

#### Step 1.1: 建立 Firefox Manifest
- [ ] 複製 `manifest.json.txt` 為 `manifest.firefox.json.txt`
- [ ] 移除 `externally_connectable` 欄位
- [ ] 移除 `offscreen` 權限
- [ ] 新增 Firefox 特有欄位：
  ```json
  "browser_specific_settings": {
    "gecko": {
      "id": "vocably@vocably.pro",
      "strict_min_version": "109.0"
    }
  }
  ```

#### Step 1.2: 統一 Browser API 抽象
- [ ] 修改 `packages/extension/src/service-worker.ts`
  - 將 `chrome.runtime.onInstalled` 改為 `browserEnv.runtime.onInstalled`
  - 將 `chrome.runtime.setUninstallURL` 改為 `browserEnv.runtime.setUninstallURL`
  - 將 `chrome.storage.sync` 改為 `browserEnv.storage.sync`
  - 將 `chrome.runtime.OnInstalledReason.INSTALL` 改為字串 `'install'`

- [ ] 修改 `packages/extension-stay-alive/src/index.ts`
  - 將所有 `chrome.*` 呼叫改為 `browserEnv`

#### Step 1.3: Offscreen API 適配
- [ ] 修改 `packages/extension/src/browserEnv.ts`
  - 增強 `hasOffscreen` 檢查，確保 Firefox 環境回傳 `false`

- [ ] 確認 `canPlayOffScreen` 邏輯在 Firefox 正確運作

### Phase 2: External Communication 替代方案

#### Step 2.1: 建立 Content Script Bridge
- [ ] 新增 `packages/extension/src/external-bridge.ts`
- [ ] 實作 `window.postMessage` 監聽
- [ ] 建立安全的訊息驗證機制（檢查 origin）

#### Step 2.2: 更新目標網頁
- [ ] 修改 app.vocably.pro 與擴充套件的通訊方式
- [ ] 使用 `postMessage` 取代 `chrome.runtime.sendMessage`

### Phase 3: 建置流程調整

#### Step 3.1: 修改 Webpack 設定
- [ ] 新增 Firefox 建置目標
- [ ] 建立環境變數切換機制 (`TARGET_BROWSER=firefox`)

```javascript
// webpack.config.js 修改建議
const isFirefox = process.env.TARGET_BROWSER === 'firefox';
const manifestFile = isFirefox
  ? 'manifest.firefox.json.txt'
  : 'manifest.json.txt';
```

#### Step 3.2: 新增建置指令
- [ ] 在 `package.json` 新增：
  ```json
  {
    "scripts": {
      "build:firefox": "TARGET_BROWSER=firefox webpack --env production",
      "build:chrome": "webpack --env production"
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
