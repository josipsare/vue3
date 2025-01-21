import { defineStore } from "pinia";
import { fetchCartData, saveCartData, clearCartData } from '../storage';

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.reduce((total, item) => total + item.quantity, 0), // Zbroj svih količina
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + (item.price * item.quantity), 0), // Izračunaj ukupnu cijenu
  },
  actions: {
    async loadCartData() {
      this.items = await fetchCartData();
    },
    async addItemToCart(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Povećaj količinu postojećeg proizvoda
      } else {
        // Ako proizvod ne postoji, dodaj ga s početnom količinom 1
        this.items.push({ ...item, quantity: 1 });
      }
      await saveCartData(this.items); // Asinkroni zapis u mock storage
    },
    async removeItemFromCart(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      await saveCartData(this.items); // Asinkroni zapis u mock storage
    },
    async clearCart() {
      this.items = [];
      await clearCartData(); // Asinkroni brisanje podataka
    },
    increaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item) {
        item.quantity++; // Povećaj količinu proizvoda
        this.saveCartData(this.items); // Asinkrono spremanje
      }
    },
    decreaseQuantity(itemId) {
      const item = this.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--; // Smanji količinu proizvoda, ali ne ispod 1
        this.saveCartData(this.items); // Asinkrono spremanje
      }
    },
    async saveCartData(items) {
      await saveCartData(items); // Asinkrono spremanje podataka
    }
  },
});
