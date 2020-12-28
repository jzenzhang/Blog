import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import fetch from './utils/request'

const app = createApp(App)
app.config.globalProperties.$http = fetch


app.mount('#app')
