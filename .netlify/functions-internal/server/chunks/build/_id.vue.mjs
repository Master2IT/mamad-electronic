import { withAsyncContext, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { h as useRoute } from './server.mjs';
import { u as useFetch } from './fetch.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'reka-ui';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const _sfc_main = {
  __name: "_id",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/products/${route.params.id}`, "$vD0j326B8m")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductDetail = resolveComponent("ProductDetail");
      _push(ssrRenderComponent(_component_ProductDetail, mergeProps({ product: unref(product) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/products/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id.vue.mjs.map
