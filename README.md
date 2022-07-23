# フロント手順書

1. 環境設定

http クライアント: Axios
UI Kit: Chakra UI
日付管理ライブラリ: dayjs

```sh
yarn add axios
yarn add dayjs
```

ChakraUI は emotion を使っている。  
emotion を使う時にプラグマとかいうのをファイル毎に書かなければいけなくなるのでそれを CreateReactApp で作ったアプリケーションでも Babel の設定で避ける為に CRACO というのを導入する.[参考](https://qiita.com/xrxoxcxox/items/17e0762d8e69c1ef208f)

```
yarn add -D @emotion/babel-plugin
yarn add @craco/craco
```

`craco.config.js`の作成

```js
module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
    plugins: ['@emotion/babel-plugin'],
  },
};
```
