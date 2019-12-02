import Vue from 'vue';
import 'lazysizes';
import App from './App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');
