import { _ as __nuxt_component_0 } from './Card.vue3.mjs';
import { j as __nuxt_component_1 } from './server.mjs';
import { a as _sfc_main$1, c as __nuxt_component_2, b as _sfc_main$2 } from './Footer.vue.mjs';
import { ref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'reka-ui';
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
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'lucide-vue-next';

const _sfc_main = {
  __name: "panel",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      [
        {
          label: "اطلاعات فردی",
          to: "/panel/profile",
          icon: "i-heroicons-user"
        },
        {
          label: "پرداخت و اقساط",
          to: "/panel/card",
          icon: "i-heroicons-currency-dollar-20-solid"
        },
        {
          label: "سفارش ها",
          to: "/panel/orders",
          icon: "i-heroicons-shopping-bag"
        },
        {
          label: "لیست های من",
          to: "/panel/wishlist",
          icon: "i-heroicons-heart"
        },
        {
          label: "کارت های هدیه",
          to: "/panel/gifts",
          icon: "i-heroicons-gift"
        },
        {
          label: "پیغام ها",
          to: "/panel/notifications",
          icon: "i-heroicons-bell"
        },
        {
          label: "تماس با ما",
          to: "/panel/contact",
          icon: "i-heroicons-chat-bubble-oval-left"
        }
      ]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_UAvatar = __nuxt_component_1;
      const _component_UNavigationMenu = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="flex gap-3">`);
      _push(ssrRenderComponent(_component_UCard, { class: "w-56" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>mehran</p></div>`);
            _push2(ssrRenderComponent(_component_UNavigationMenu, {
              orientation: "vertical",
              items: items.value,
              class: "data-[orientation=vertical]:w-48",
              ui: {
                item: "mb-3"
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4 mb-4" }, [
                createVNode(_component_UAvatar, {
                  src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
                  size: "sm"
                }),
                createVNode("p", null, "mehran")
              ]),
              createVNode(_component_UNavigationMenu, {
                orientation: "vertical",
                items: items.value,
                class: "data-[orientation=vertical]:w-48",
                ui: {
                  item: "mb-3"
                }
              }, null, 8, ["items"])
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/panel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=panel.vue.mjs.map
