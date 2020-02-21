import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLeaf,
  faAppleAlt,
  faCarrot,
  faLemon,
  faHamburger,
  faPizzaSlice,
  faCheese,
  faBacon,
  faHotdog
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLeaf,
  faAppleAlt,
  faCarrot,
  faLemon,
  faHamburger,
  faPizzaSlice,
  faCheese,
  faBacon,
  faHotdog
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
