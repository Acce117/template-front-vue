import { createPinia } from 'pinia';
import 'virtual:uno.css';
import { createApp } from 'vue';
import { i18n } from "./plugins/i18n";
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import App from './App.vue';
import { useAppStore } from './common/store/app-store';
import { UserService } from './modules/users/services/UserService';
import { primevueConfig } from './plugins/primevue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(PrimeVue, primevueConfig);
app.use(ConfirmationService);
app.use(ToastService);
app.use(createPinia()).mount('#app');

app.provide('USER_SERVICE', new UserService());
useAppStore();