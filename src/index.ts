// src/index.ts

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import 'vuetify/dist/vuetify.min.css';
import VueGun from 'vue-gun';
import SEA from 'gun/sea';

import Testing from './components/views/Testing.vue';
import Post from './components/views/Post.vue';
import Login from './components/views/Login.vue';

Vue.use(VueGun);
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes: any[] = [
  {
    path: '/testing',
    component: Testing,
  },
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
