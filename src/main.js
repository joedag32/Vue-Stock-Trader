import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from "./store";
import VueCurrencyFilter from 'vue-currency-filter';

Vue.use(VueRouter);
Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: false
  });

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
