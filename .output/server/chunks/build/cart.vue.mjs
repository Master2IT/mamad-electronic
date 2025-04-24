import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    total: 0
  }),
  getters: {
    itemCount: (state) => state.items.length,
    isEmpty: (state) => state.items.length === 0
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
    }
  }
});

const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartContents = resolveComponent("CartContents");
      const _component_CheckoutButton = resolveComponent("CheckoutButton");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CartContents, null, null, _parent));
      _push(ssrRenderComponent(_component_CheckoutButton, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart.vue.mjs.map
