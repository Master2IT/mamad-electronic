import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    total: 0,
  }),

  getters: {
    itemCount: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
  },

  actions: {
    addItem(product) {
      this.items.push(product);
      this.calculateTotal();
    },

    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.calculateTotal();
    },

    calculateTotal() {
      this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
});
