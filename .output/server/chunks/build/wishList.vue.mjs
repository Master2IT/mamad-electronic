import { _ as __nuxt_component_0 } from './nuxt-layout.mjs';
import { P as PRODUCTS, _ as _sfc_main$2 } from './index.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'better-sqlite3';
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
import 'lucide-vue-next';
import './Icon.vue.mjs';

const _sfc_main$1 = {
  __name: "PanelWishList",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonProductCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 p-5" }, _attrs))}><div><h1 class="text-2xl font-bold mb-1">علاقه مندی ها</h1><p class="text-gray-600">مواردی که لیست شده</p></div><div class="grid grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(unref(PRODUCTS), (product) => {
        _push(ssrRenderComponent(_component_CommonProductCard, {
          type: 2,
          "show-review": "",
          product,
          key: product.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/WishList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_PanelWishList = _sfc_main$1;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "panel" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_PanelWishList, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_PanelWishList)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/wishList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wishList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { wishList as default };
//# sourceMappingURL=wishList.vue.mjs.map
