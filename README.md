# react-ssr-simple

### 总结

#### 同构应用架构组成

一，
分别有 ssr 和 csr 组成

ssr:   store , router(StaticRouter), component ->  app.js  -> 打包 -> server(入口）renderToString方法 -> bundle -> node（服务端）渲染首页 -> web端


优点: 首屏渲染速度快，可使用SEO。


缺点: 对服务器有一定的要求。


csr:  store, router(BrowserRouter), componet -> app.js -> 打包 -> client（入口）hydrate（注水）为页面加载js,用于交互 -> bundle -> node（服务端） -> web端。


优点: 前后分离。(这里目前没看出来)


缺点: 首屏响应较慢，不利于SEO
