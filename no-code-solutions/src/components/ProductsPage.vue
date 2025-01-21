<template>
  <div>
    <h1>Our Products</h1>
    <div v-if="loading">Loading products...</div>
    <div v-else>
      <ul>
        <li v-for="product in products" :key="product.id">
          <ProductCard
            :product="product"
            @add-to-cart="addToCart"
            @view-details="viewProductDetails"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart.js";
import { useProductStore } from "@/stores/product.js";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductsPage",
  components: {ProductCard},
  data() {
    return {
      loading: true,
    };
  },
  computed: {

    products() {
      const productStore = useProductStore();
      return productStore.products;
    },
  },
  methods: {
    async fetchProducts() {
      const productStore = useProductStore();
      await productStore.fetchProducts();
      this.loading = false;
    },
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addItemToCart(product);
      alert(`${product.name} added to cart!`);
    },
    viewProductDetails(productId) {
      this.$router.push(`/products/${productId}`);
    }
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
h1 {
  color: #007bff;
}

button {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
