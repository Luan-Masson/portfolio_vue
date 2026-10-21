import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Lara from '../src/assets/Lara/index.js';
import Tooltip from 'primevue/tooltip';
import AnimateOnScroll from 'primevue/animateonscroll';
import ToastService from 'primevue/toastservice';
import { i18n, loadLanguage } from './i18n';

import './style.css';

const initialLocale = localStorage.getItem('lang') || 'pt';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
app.use(i18n);
app.use(ToastService);
app.directive('animateonscroll', AnimateOnScroll);
app.directive('tooltip', Tooltip);

loadLanguage(initialLocale).finally(() => {
    app.mount('#app');
});
