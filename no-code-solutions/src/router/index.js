import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ProductsPage from "../components/ProductsPage.vue";
import ProductDetailsPage from "../components/ProductDetailsPage.vue";
import CartPage from "../components/CartPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products", name: "Products", component: ProductsPage },
  { path: "/products/:id", name: "ProductDetails", component: ProductDetailsPage },
  { path: "/cart", name: "Cart", component: CartPage },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
