import { createApp } from "vue";
import "./style.css";
import router from "./router/index"
import VueSplide from "@splidejs/vue-splide";
import App from "./App.vue";

createApp(App)
.use(router)
.use(VueSplide)
.mount("#app");
