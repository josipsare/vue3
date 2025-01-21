import {createApp, defineAsyncComponent} from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import HomePage from "@/views/HomePage.vue";
import ProductsPage from "@/components/ProductsPage.vue";
import ProductDetailsPage from "@/components/ProductDetailsPage.vue";
import CartPage from "@/components/CartPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const ProductCard = defineAsyncComponent(() => import ("@/components/ProductCard.vue"));

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component("HomePage", HomePage)
  .component("ProductsPage", ProductsPage)
  .component("ProductDetailsPage", ProductDetailsPage)
  .component("CartPage", CartPage)
  .component("NotFoundPage", NotFoundPage)
  .component("ProductsCard", ProductCard)
  .mount("#app");
