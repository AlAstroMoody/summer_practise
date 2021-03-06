import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey: "",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1"
};
Vue.use(YmapPlugin, settings);
Vue.config.productionTip = false;
Vue.use(ElementUI);
store.dispatch("places/setPlaces").then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
