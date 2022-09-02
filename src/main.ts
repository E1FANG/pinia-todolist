import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import {createWebHashHistory,createRouter} from 'vue-router'
import Bar from "./views/Bar.vue";
import Foo from "./views/Foo.vue"

const routes = [
  { path: '/', component: Bar },
  { path: '/bar', component: Bar },
  { path: '/foo', component: Foo },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})


createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
