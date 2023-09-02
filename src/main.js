import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Importación modulos externos instalados
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import axios from 'axios'

const app = createApp(App)

app.use(bootstrap)
app.config.globalProperties.axios = axios;
app.use(createPinia())
app.use(router)

app.mount('#app')
