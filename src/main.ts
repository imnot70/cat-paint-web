import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {createI18n} from 'vue-i18n'
import App from './App.vue'
import router from './router'
import zh from './lang/zh-cn'
import en from './lang/en-us'

import './assets/main.css'

const i18n = createI18n({
    locale: 'zh',
    message:{zh,en},
}) 


const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
