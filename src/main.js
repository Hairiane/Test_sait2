import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'


import 'element-plus/dist/index.css'
import './assets/main.css'
import ru from 'element-plus/es/locale/lang/ru'

import router from "@/router";
// import store from "@/store";
const pinia = createPinia()

const app = createApp(App)

app.use(router)
    .use(ElementPlus,{ locale: ru })
    .use(pinia)
    // .use(store)
    .mount('#app')
