// src/index.ts

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import 'vuetify/dist/vuetify.min.css';
import { install as VueGun } from 'vue-gun';

import Post from './components/views/Post.vue';
import Login from './components/views/Login.vue';

const Gun = require("gun");
const gun = Gun();
require("gun/sea");

Vue.use(VueGun, { gun: gun, peers: [location.origin + '/gun'] });
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes: any[] = [
  {
    path: '/',
    component: Post,
  },
  {
    path: '/login',
    component: Login,
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
