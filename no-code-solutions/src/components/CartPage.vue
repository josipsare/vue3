<template>
  <div class="cart-container">
    <h1>Your Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
        <div class="cart-item-details">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>

        <div class="cart-item-actions">
          <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
          <div class="quantity">
            <button @click="decreaseQuantity(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)">+</button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <p>Total Items: {{ itemCount }}</p>
        <p>Total Price: ${{ totalPrice }}</p>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart.js";

export default {
  name: "CartPage",
  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.items;
    },
    itemCount() {
      const cartStore = useCartStore();
      return cartStore.itemCount;
    },
    totalPrice() {
      const cartStore = useCartStore();
      return cartStore.totalPrice;
    },
  },
  methods: {
    async addItemToCart(item) {
      const cartStore = useCartStore();
      await cartStore.addItemToCart(item);
    },
    async removeItem(itemId) {
      const cartStore = useCartStore();
      if (cartStore.items.find(item => item.id === itemId)) {
        await cartStore.removeItemFromCart(itemId);
      }
    },
    async clearCart() {
      const cartStore = useCartStore();
      await cartStore.clearCart();
    },
    async increaseQuantity(itemId) {
      const cartStore = useCartStore();
      await cartStore.increaseQuantity(itemId);
    },
    async decreaseQuantity(itemId) {
      const cartStore = useCartStore();
      await cartStore.decreaseQuantity(itemId);
    }
  },
};
</script>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #6e6e6e;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.cart-item-details {
  display: flex;
  align-items: center;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 5px;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #c0392b;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity button {
  background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quantity button:hover {
  background-color: #2980b9;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.checkout-btn {
  background-color: #2ecc71;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #27ae60;
}
</style>
