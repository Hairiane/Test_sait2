import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'element-plus/dist/index.css'
import './assets/main.css'
import ru from 'element-plus/es/locale/lang/ru'

import router from "@/router";
// import store from "@/store";
const pinia = createPinia()

const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
    .use(ElementPlus,{ locale: ru })
    .use(pinia)
    // .use(store)
    .mount('#app')
