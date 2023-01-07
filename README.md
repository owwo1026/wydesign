# 開發規範
## Compoment 命名規則
各開發模組請依照以下規則放置
### 模組資料夾與檔案命名方式
- 模組資料夾/app/modules/{模組名稱}
  - 子模組資料夾 /app/modules/{模組名稱}/{子模組名稱}
- 模組Route：{模組資料夾}/pages/{模組名稱}Route.js
- 列表：{模組資料夾}/pages/{模組名稱}List.js
- 內頁：{模組資料夾}/pages/{模組名稱}Info.js
- 功能頁面：{模組資料夾}/pages/{模組名稱}{Feature_Name}.js

### Route 
- list: /{模組名稱}
- info: /{模組名稱}/info/:id?
- feature without id: /{模組名稱}/{feature}  
- feature with id : /{模組名稱}/info/:id/{feature}

# 概述
- 本範例採用技術範例
   - Node v10.16.0
   - NPM package
      - React v16.12.0
      - NPM v6.14.9
      - Metronic v7.1.4
      - MaterialUI 4.9.14
      - React Redux v7.1.3
      - Redux 4.0.5
      - Redux Saga 1.1.3
      - Redux Persist 6.0.0
      - prettier 1.19.1
      - lodash 4.17.19 
- 修改為SYSCOM使用的React UI Template框架
- 部署方式
   - 使用Dockerfile描述如何包裝成images
   - 後推上GitHub Repo區分branch至部署區域
      - ^release-.*$ 部署至正式站
      - ^develop-.*$ 部署至正式站
   - Cloud Build
      - 監聽GitHub Repo，拉下資料後，由Doockerfile配置開始build docker image
      - build images成功後，會依照內嵌在GCP上的cloudbuil.yml（此段刻意不放在repo中，以免同事不小心修改到）將image部署至Cloud Run
- Dockerfile
   - STEP1 react-build
      - 使用node:10.16.0建置HTML資料夾至container的/app/build
   - STEP2 使用nginx:stable啟動web service
      - 複製nginx/nginx.conf到container指定路徑/etc/nginx/conf.d/configfile.template
      - 將STEP1 react-build的/app/build複製到/usr/share/nginx/html
      - 使用以下ENV啟動nginx服務
         - ENV PORT 8080
         - ENV HOST 0.0.0.0
         - EXPOSE 8080 
      - container啟動指令

```
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
```

# ESLint
本範例使用ESLint規範程式碼寫法
- [ESLint](https://eslint.org)

# 調整Metronic v7.1.4
此處說明與原本Metronic v7.1.4相異之處
- 從--react-scripts--替換成**react-app-rewired**
- src/eslintrc.js 新增eslint rules
- 新增husky+lint-staged

## react-app-rewired
- 新增react-app-rewired與customize-cra
```
npm i -D react-app-rewired customize-cra
```
- 新增config-overrides.js
```
/* config-overrides.js */
 
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

- 修改package.json，把scripts中的react-scripts替換成react-app-rewired

```
  /* package.json */
  "scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
    "eject": "react-scripts eject"
}
  /* 修改為.json */ 
  "scripts": {
+   "start": "react-app-rewired start",
+   "build": "react-app-rewired build",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

## 新增husky+lint-staged

# 分析模組大小
- 安裝source-map-explorer
```
npm install --save-dev source-map-explorer
```
- 新增npm script
```
"scripts": {
        "start": "react-app-rewired start",
        ...
+       "analyze": "source-map-explorer 'build/static/js/*.js'"
    },
```
- 之後可以用npm run analyze分析模組大小
