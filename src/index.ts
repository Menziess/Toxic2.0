// src/index.ts

import Vue from "vue";
import Vuetify from "vuetify";
import App from "./components/App.vue";

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
	el: '#app',
	components: { App },
	render(h) {
		return h('App');
	}
});
