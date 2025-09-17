import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    total: 0,
    total_discount: 0,
    selectedAddress: null,
  }),

  getters: {
    itemCount: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0,
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.prices.price, 0),
    totalDiscount: (state) => state.items.reduce((sum, item) => sum + item.prices.discount_price, 0),
    totalPriceWithDiscount: (state) => state.items.reduce((sum, item) => sum + item.prices.price - item.prices.discount_price, 0),
  },

  actions: {
    setSelectedAddress(address) {
      this.selectedAddress = address;
    },
  },
});
