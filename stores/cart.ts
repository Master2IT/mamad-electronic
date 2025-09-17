import { defineStore } from "pinia";

// Define types for better type safety
interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  total_discount: number;
  selectedAddressId: string | number | null;
}

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    items: [],
    total: 0,
    total_discount: 0,
    selectedAddressId: null,
  }),

  getters: {
    getSelectedAddressId: (state): string | number | null => state.selectedAddressId,
    getTotal: (state): number => state.total,
    getTotalDiscount: (state): number => state.total_discount,
    getItems: (state): CartItem[] => state.items,
    getItemCount: (state): number => state.items.length,
  },

  actions: {
    setItems(items: CartItem[]): void {
      this.items = items;
    },
    setTotal(total: number): void {
      this.total = total;
    },
    setTotalDiscount(total_discount: number): void {
      this.total_discount = total_discount;
    },
    setSelectedAddressId(addressId: string | number | null): void {
      this.selectedAddressId = addressId;
    },
  },

  persist: true,
});
