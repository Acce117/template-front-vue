import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { i18n } from "./plugins/i18n";

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { primevueConfig } from './plugins/primevue';

const app = createApp(App)

app.use(router)
app.use(i18n);
app.use(PrimeVue, primevueConfig);
app.use(createPinia()).mount('#app')
