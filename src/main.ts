import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import './style.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { VueQueryPlugin } from "@tanstack/vue-query";
//import {useLoginStore} from "./store/Login";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);

app.use(pinia);
app.use(router);

VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries:{
                cacheTime: 1000 * 60, // 1 minuto
            }
        }
    }
})

app.mount('#app')


