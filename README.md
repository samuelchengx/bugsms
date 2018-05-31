# BUG DMS 后台项目

## npm/yarn 脚本指令

### 运行环境

- 开发环境 `yarn run dev`
- 测试环境 `yarn run build && yarn run test`
- 预发布环境 `yarn run build && yarn run alpha`
- 生产环境 `yarn run build && yarn run start`

### 功能指令

- 运行单元测试 `yarn run do-test`
- 运行语法检查 `yarn run lint`
- 打包dist文件 `yarn run build`
- 重新生成dll文件 `yarn run rebuild-dll`

## 编码要求

### 基本规范

- LF 换行符
- 2spaces 缩进
- 驼峰式命名
- prefer ES6 ES7 syntax
- 复数式文件／文件夹名

### 建议非必要的条件下 都使用 ES6 module

```javascript
 const (\w+) = require\(('[\w-/.]+')\)
 // 替换为
 import $1 from $2
```

## client 文件目录说明及 react redux 体系设计规范

- 容器定义在 containers 目录中，其作用是控制交互行为和页面展示逻辑
- 组件定义在 components 目录中，其负责 UI 的表现形式
- 行为定义在 actions 目录中，其负责抽象数据交互的行为
- 规约定义在 reducers 目录中，其负责表述行为如何影响状态机并返回新的状态
- 枚举定义在 enums 目录中
- 通用功能定义在 common 目录中
- 路由定义在 routes 目录中
- 全局样式定义在 styles 目录中
