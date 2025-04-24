import { _ as __nuxt_component_0$1 } from './nuxt-layout.mjs';
import { a as __nuxt_component_0 } from './Icon.vue.mjs';
import { d as __nuxt_component_3 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'vue-router';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CommonIcon = __nuxt_component_0;
  const _component_UButton = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="flex flex-col gap-5 p-5"><div><h1 class="text-2xl font-bold mb-1">کارت هدیه دارید؟</h1><p class="text-gray-600">لیست کارت ها</p></div><div class="flex flex-col items-center justify-center">`);
  _push(ssrRenderComponent(_component_CommonIcon, {
    name: "gift",
    size: "300"
  }, null, _parent));
  _push(`<h1 class="text-2xl font-bold mb-1">کسی به شما کارت هدیه داده؟ یا خودتون کارت هدیه دارید؟ </h1><p class="text-2xl font-bold mb-1"> اینجا اضافه کنید تا بعدا دنبالش نگردید</p>`);
  _push(ssrRenderComponent(_component_UButton, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`اضافه کردن کارت هدیه`);
      } else {
        return [
          createTextVNode("اضافه کردن کارت هدیه")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/GiftList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "PanelGiftList" });

const _sfc_main = {
  __name: "gifts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_PanelGiftList = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "panel" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PanelGiftList, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PanelGiftList)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/gifts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gifts.vue.mjs.map
