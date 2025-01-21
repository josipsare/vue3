<template>
  <div v-if="loading">
    <p>Loading product details...</p>
  </div>
  <div v-else>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <br>
    <br>
    <ul>
      <li v-for="(item, index) in parseDescriptionAsList(product.longDescription)" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/product.js";
import { useCartStore } from "../stores/cart.js";


export default {
  name: "ProductDetailsPage",
  data() {
    return {
      loading: true,
      product: null,
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchProductDetails() {
      const productStore = useProductStore();
      const product = productStore.products.find(
        (p) => p.id === parseInt(this.productId)
      );
      this.product = product || null;
      this.loading = false;
    },
    parseDescriptionAsList(description) {
      return description.split(/\./).map((item) => item.trim()).filter(Boolean);
    },
    addToCart() {
      const cartStore = useCartStore();
      if (this.product) {
        cartStore.addItemToCart(this.product);
        alert(`${this.product.name} added to cart!`);
      }
    },
  },
  mounted() {
    this.fetchProductDetails();
  },
  onBeforeRouteUpdate(to, from, next) {
    this.fetchProductDetails();
    next();
  }
};
</script>

<style scoped>
h1 {
  color: #007bff;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
