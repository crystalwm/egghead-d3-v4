## 1：网址

[https://d3js.org/](https://d3js.org/)

## 2:安装的依赖包

```javascript
npm i -D browser-sync
npm install --save d3
```

## 3: 启动项的解释

```javascript
"start": "browser-sync start -s -f index.html src --no-ui --no-notify"
```
`browser-sync start -s` browser-sync是start server
`-f index.html src`监视index.html文件和src文件夹
