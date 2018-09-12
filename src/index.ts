// src/index.ts

import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import App from "./components/App.vue";
import 'vuetify/dist/vuetify.min.css';

import Chat1 from "./components/views/Chat1.vue";


Vue.use(Vuetify);
Vue.use(VueRouter);

const routes: any[] = [
  {
    path: '/v1',
    name: 'Chat',
    component: Chat1,
  },
];



const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  el: '#app',
  router,
  components: { App },
  render(h) {
    return h('App');
  }
});
