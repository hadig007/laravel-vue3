require('./bootstrap');

import router from './router'
import store from './store/store';

import { createApp } from "vue"
import App from "./App.vue"

import common from './common.js';



const app = createApp(App)
app.use(router)
app.use(store)
app.mixin(common)

app.mount('#app')