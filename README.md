# view-ui-project-vuecli
This project build for Vue3, Vue-router, Vuex, ViewUIPlus and Vue-cli.
## Install
```shell
npm install
```
## Run
```shell
npm run serve
```
## Build
### Build for Production
```shell
npm run build
```
### Build for Staging
```shell
npm run build:staging
```
## Run Eslint
### Run without Fixing

- 此操作也将在 git-commit 之前运行。
```shell
npm run lint
```
### Run with Fixing
```shell
npm run lint:fix
```
## .env Description

- 该项目在 `process.env` 对象上公开环境变量。
- 不同的模式(development/staging/production)对应不同的环境文件(.env.*).
- 始终包含 .env 文件，重复变量被特定模式文件 (.env) 覆盖。
