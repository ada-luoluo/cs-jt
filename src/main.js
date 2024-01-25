import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import VueLazyLoad from 'vue3-lazyload';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import i18n from './lang';
import quote from './network/quote';

// 判断设备类型，并引入 AOS.js
if (window.matchMedia('(min-width: 768px)').matches) {
    import('aos').then((AOS) => {
        import('aos/dist/aos.css').then(() => {
            createApp(App)
                .use(router)
                .use(i18n)
                .component('Datepicker', Datepicker)
                .use(VueLazyLoad)
                .use(quote)
                .mount('#app');
            AOS.init({
                duration: 500 // 设置全局默认的动画持续时间
            });
        });
    });
} else {
    createApp(App)
        .use(router)
        .use(i18n)
        .component('Datepicker', Datepicker)
        .use(VueLazyLoad)
        .use(quote)
        .mount('#app');
}




