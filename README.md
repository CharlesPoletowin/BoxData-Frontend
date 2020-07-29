# boxdata (boxdata)

boxdata visualization

## Install the dependencies
```bash
yarn
```
```bash
cnpm install
```


### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

1. 这是boxData 的前端展示页面，该项目使用了quasar框架。
2. 该项目通过websocket和后端部分进行数据交接，使用vuex和unity3d模块(h53d.vue)进行传递数据。
3. index页面严格分为realtime和statistics两部分，其中realtime数据需从数据库更新。每一个ECharts分别对应一个vue文件。
4. 数据交互主要在realtime.vue中，利用props向其子组件传递数据，并在子组件中监听并适当情况下更新ECharts图。
5. 2020-07-29 离职交接，该项目最后一次提交
