import Vue from "vue";
import VueVideoPlayer from 'vue-video-player';

import App from "./App.vue";
import store from "./store";

import 'bulma/css/bulma.css';
import 'video.js/dist/video-js.css';

Vue.use(VueVideoPlayer);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
