if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/a574df55c1f45d77ca823ad5755f96f649291ac2.f47b5669da5d7561d9dd.js",revision:"0932ffbd6f5f6995acec3db52e2b7a96"},{url:"/_next/static/chunks/b4bdcb6c41f8ea8087b3b14d917398b421f2abf5.1add0da6714c90c3d66f.js",revision:"12bd40eea48e10dbc06c06c0afed61fe"},{url:"/_next/static/chunks/commons.03461df6b4e05978867b.js",revision:"b26853553e5dcfdde4b39c24faf01ac8"},{url:"/_next/static/chunks/framework.9ec1f7868b3e9d138cdd.js",revision:"d0fde0e086852f5cc2882d8830400a6e"},{url:"/_next/static/chunks/main-5c0cdf279cfbf51b6e0e.js",revision:"18b587eda0acaca5022ffb652826b6b9"},{url:"/_next/static/chunks/pages/_app-4fab70c7704b4e1a8cac.js",revision:"94d724e55db86c2607ba0cfeac2ec13f"},{url:"/_next/static/chunks/pages/_error-efc065a63d89dde72fbf.js",revision:"a32dc9e877f7509f534ba133e43c4c72"},{url:"/_next/static/chunks/pages/admin/main-34dea41b273a3980c38c.js",revision:"d4848bf4ed331d279fa23d9d81d41db1"},{url:"/_next/static/chunks/pages/forbidden-feb8c1b4f02e20d9c4a9.js",revision:"724dc800833455b7484afde028fcb4b0"},{url:"/_next/static/chunks/pages/index-1230674fa97d42b103e1.js",revision:"1feb90c0658fe9679688805fe035ca55"},{url:"/_next/static/chunks/pages/login-05f1b5c8526e46c82690.js",revision:"3dbd80a195b88fafa4d0cb173c65963a"},{url:"/_next/static/chunks/pages/not-found-ca7d8cf91a3d491dd76f.js",revision:"f8c1fd70a6eb494e2edf10de84a749c4"},{url:"/_next/static/chunks/pages/products-4c1d6fe355875cad1e62.js",revision:"f556381e1725119ca2301d1a104a77ac"},{url:"/_next/static/chunks/pages/redirect-838581b2bb2449ae5c99.js",revision:"9503fbdef4ad36d81e5dea584fc8d51e"},{url:"/_next/static/chunks/pages/signup-73b05530e1a3b5d80b8f.js",revision:"6091be045e1ed983b2dfb6dfad51e126"},{url:"/_next/static/chunks/polyfills-49d513b8e73258edd797.js",revision:"a36b1c6feeca01c1468c6087d2958b03"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/dbef30e014757edd0bc9.css",revision:"141213eadb0ecdb8ba0a6bd0f9202683"},{url:"/_next/static/zCPyiMauBZQw7BKtTfkh3/_buildManifest.js",revision:"fb2619677a44b999b65109183c5a7103"},{url:"/_next/static/zCPyiMauBZQw7BKtTfkh3/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-512x512.png",revision:"6f46a6ab0525729b3f12745afa9fe71f"},{url:"/manifest.json",revision:"95c807e1713853b7b07beaf752ccd729"},{url:"/products/img/jebus.jpg",revision:"c8ee9913e21b7888b34400b4d595b519"},{url:"/serviceWorker.js",revision:"b839b3567658c01759b40ff3719f1acd"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));