import { createApp } from "vue";
import "./style.css";
import router from "./router/index"
import { Field, Form, ErrorMessage, configure ,} from 'vee-validate';
import VueSplide from "@splidejs/vue-splide";
import App from "./App.vue";

const app=  createApp(App)
app.use(router)
app.use(VueSplide)
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);
app.use(configure);
app.mount("#app");
