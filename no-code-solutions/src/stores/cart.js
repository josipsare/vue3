import { defineStore } from "pinia";
import { fetchCartData, saveCartData, clearCartData } from '../storage';

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + (item.price * item.quantity), 0),
  },
  actions: {
    async loadCartData() {
      this.items = await fetchCartData();
    },
    async addItemToCart(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {

        this.items.push({ ...item, quantity: 1 });
      }
      await saveCartData(this.items);
    },
    async removeItemFromCart(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      await saveCartData(this.items);
    },
    async clearCart() {
      this.items = [];
      await clearCartData();
    },
    increaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
        this.saveCartData(this.items);
      }
    },
    decreaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        this.saveCartData(this.items);
      }
    },
    async saveCartData(items) {
      await saveCartData(items);
    }
  },
});
