import Vue from 'vue';
import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';
import App from './App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');
