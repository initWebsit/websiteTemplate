# webTemplate
web的mobile, pc端模版框架，含：桌面端和移动端。

## 构建 Start

```
npm install		            # 安装依赖模块1

npm run start		         # 运行开发环境: http://localhost:6120
npm run build		         # 正式打包，用于生产环境
npm run pre-release	      # 运行正式打包后的最终文件（dist目录下的文件）: http://localhost:6122
```

## 目录结构 Structure

```
.
├── dist				                  # 打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
│   ├── official-prod               # 生产环境，官网编译后的资源文件
│   │   ├── assets		            # 编译后的图片等文件
│   │   ├── css				         # 编译后的样式文件
│   │   ├── js				            # 编译后的JS资源文件
│   │   ├── index.html			      # 编译后的主页html
│   │   └── service-worker.js	      # PWA核心worker, 用于离线访问，缓存不变的资源文件
│   ├── official-test               # 测试环境，官网编译后的资源文件
│   │   ├── ...
│   │   └── ...
│   ├── payment-prod                # 生产环境，充值编译后的资源文件
│   │   ├── ...
│   │   └── ...
│   └── payment-test                # 测试环境，充值编译后的资源文件
│       ├── ...
│       └── ...
│
├── mock				                  # mock测试数据
├── public				               # 静态文件，index.html等
├── scripts                         # 项目构建脚本文件
│   ├── paths.js                    # 路径汇总
│   ├── server.js			            # 用于开发环境的服务部署
│   ├── webpack.common.js		      # 公用的webpack配置
│   ├── webpack.dev.js		         # 用于开发环境的webpack配置
│   └── webpack.prod.js	            # 用于生产环境正式打包的webpack配置
│
└── src                             # 项目代码目录
    ├── assets                      # 不用编译的文件
    ├── commons                     # 公用工具方法
    ├── components                  # 所有的公共类UI组件
    ├── layouts                     # 所有布局文件
    │   ├── desktop                 # 桌面端布局
    │   └── mobile                  # 移动端布局
    ├── library                     # 所有的公用类库文件
    ├── projects                    # 所有的公共类UI组件
    │   ├── official                # 官网页面
    │   └── payment                 # 支付页面
    └── styles                      # 所有全局和基础样式文件
```