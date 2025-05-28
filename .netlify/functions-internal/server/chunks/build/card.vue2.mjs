import { _ as __nuxt_component_0$1 } from './nuxt-layout.mjs';
import { _ as __nuxt_component_0 } from './Card.vue3.mjs';
import { a as __nuxt_component_3, d as __nuxt_component_3$1 } from './server.mjs';
import { P as PRODUCTS, _ as _sfc_main$2 } from './index.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'vue-router';
import 'reka-ui';
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
import './Icon.vue.mjs';

const _sfc_main$1 = {
  __name: "ShopCard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UButton = __nuxt_component_3$1;
      const _component_CommonProductCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-7 p-10 gap-5 w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCard, { class: "col-span-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-5 gap-5"${_scopeId}><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "h-72 w-full",
              src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hfNK8S7ywtaPVr8WGTV4-wHaE7%26pid%3DApi&f=1&ipt=5c6457e85e91df6fd76ec0370b001563b9d75153ef52ede1bbec796523e42d71&ipo=images",
              alt: "MacBook Air MGN63 2020"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-3"${_scopeId}><div class="flex flex-col space-y-2"${_scopeId}><h1 class="font-bold"${_scopeId}>لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020</h1><span class="text-gray-400"${_scopeId}>گارانتی سلامت کالا</span><span class="text-gray-400"${_scopeId}>ارسال امروز</span><span class="text-gray-400"${_scopeId}>ارسال رایگان</span></div><div class="flex item-center justify-between mt-4"${_scopeId}><p class="text-red-500"${_scopeId}>۴۸،۴۹۰،۰۰۰</p><p class=""${_scopeId}> ۴۸،۴۹۰،۰۰۰ تومان</p>`);
            _push2(ssrRenderComponent(_component_UButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`button`);
                } else {
                  return [
                    createTextVNode("button")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-5 gap-5" }, [
                createVNode("div", { class: "col-span-2" }, [
                  createVNode(_component_NuxtImg, {
                    class: "h-72 w-full",
                    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hfNK8S7ywtaPVr8WGTV4-wHaE7%26pid%3DApi&f=1&ipt=5c6457e85e91df6fd76ec0370b001563b9d75153ef52ede1bbec796523e42d71&ipo=images",
                    alt: "MacBook Air MGN63 2020"
                  })
                ]),
                createVNode("div", { class: "col-span-3" }, [
                  createVNode("div", { class: "flex flex-col space-y-2" }, [
                    createVNode("h1", { class: "font-bold" }, "لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020"),
                    createVNode("span", { class: "text-gray-400" }, "گارانتی سلامت کالا"),
                    createVNode("span", { class: "text-gray-400" }, "ارسال امروز"),
                    createVNode("span", { class: "text-gray-400" }, "ارسال رایگان")
                  ]),
                  createVNode("div", { class: "flex item-center justify-between mt-4" }, [
                    createVNode("p", { class: "text-red-500" }, "۴۸،۴۹۰،۰۰۰"),
                    createVNode("p", { class: "" }, " ۴۸،۴۹۰،۰۰۰ تومان"),
                    createVNode(_component_UButton, null, {
                      default: withCtx(() => [
                        createTextVNode("button")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "col-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 space-y-2"${_scopeId}><h2 class="text-lg font-bold mb-4"${_scopeId}>سبد خرید</h2><div class="flex justify-between mb-2"${_scopeId}><span${_scopeId}>قیمت کالاها (۳)</span><span${_scopeId}>۵۰,۵۰۰,۰۰۰ تومان</span></div><div class="flex justify-between mb-2"${_scopeId}><span class="font-bold"${_scopeId}>جمع سبد خرید</span><span${_scopeId}>۵۰,۵۰۰,۰۰۰ تومان</span></div><div class="flex justify-between mb-2"${_scopeId}><span class="font-bold text-red-500"${_scopeId}>سود تخفیف پلکانی</span><span${_scopeId}>۵۰,۵۰۰,۰۰۰ تومان</span></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              block: "",
              color: "primary",
              class: "mt-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`تایید و تکمیل سفارش`);
                } else {
                  return [
                    createTextVNode("تایید و تکمیل سفارش")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-2"${_scopeId}><span class="text-gray-500 text-xs"${_scopeId}>هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی کالاها از سبد خرید حذف میشنود.</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 space-y-2" }, [
                createVNode("h2", { class: "text-lg font-bold mb-4" }, "سبد خرید"),
                createVNode("div", { class: "flex justify-between mb-2" }, [
                  createVNode("span", null, "قیمت کالاها (۳)"),
                  createVNode("span", null, "۵۰,۵۰۰,۰۰۰ تومان")
                ]),
                createVNode("div", { class: "flex justify-between mb-2" }, [
                  createVNode("span", { class: "font-bold" }, "جمع سبد خرید"),
                  createVNode("span", null, "۵۰,۵۰۰,۰۰۰ تومان")
                ]),
                createVNode("div", { class: "flex justify-between mb-2" }, [
                  createVNode("span", { class: "font-bold text-red-500" }, "سود تخفیف پلکانی"),
                  createVNode("span", null, "۵۰,۵۰۰,۰۰۰ تومان")
                ]),
                createVNode(_component_UButton, {
                  block: "",
                  color: "primary",
                  class: "mt-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode("تایید و تکمیل سفارش")
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-2" }, [
                  createVNode("span", { class: "text-gray-500 text-xs" }, "هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی کالاها از سبد خرید حذف میشنود.")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "col-span-7" }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-lg font-bold p-4 text-primary-800"${_scopeId}><span class="border-b-2"${_scopeId}>خریداران این محصولات،</span> محصولات زیر را هم خریده اند </p>`);
          } else {
            return [
              createVNode("p", { class: "text-lg font-bold p-4 text-primary-800" }, [
                createVNode("span", { class: "border-b-2" }, "خریداران این محصولات،"),
                createTextVNode(" محصولات زیر را هم خریده اند ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-4 gap-4 p-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(PRODUCTS).slice(0, 4), (product) => {
              _push2(ssrRenderComponent(_component_CommonProductCard, {
                key: product.id,
                type: 2,
                product,
                "show-review": ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-4 gap-4 p-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(PRODUCTS).slice(0, 4), (product) => {
                  return openBlock(), createBlock(_component_CommonProductCard, {
                    key: product.id,
                    type: 2,
                    product,
                    "show-review": ""
                  }, null, 8, ["product"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_ShopCard = _sfc_main$1;
  _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "check-out" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ShopCard, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ShopCard)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkOut/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { card as default };
//# sourceMappingURL=card.vue2.mjs.map
