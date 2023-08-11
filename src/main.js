import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from '@iconify/vue';
import { http } from '@/http/http.service'

const app =createApp(App)
.component('Icon', Icon)
.use(router)
.use(store)
app.config.globalProperties.$http = http;
app.mount('#app')
