import { _ as __nuxt_component_0$1 } from './nuxt-layout.mjs';
import { _ as __nuxt_component_0 } from './Card.vue3.mjs';
import { defineComponent, useSlots, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, createVNode, Fragment, renderList, useSSRContext, isRef, ref } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent, Primitive, ProgressRoot, ProgressIndicator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, U as UIcon, j as __nuxt_component_1, g as get, e as _appConfig, c as useLocale, a as __nuxt_component_3 } from './server.mjs';
import 'vue-router';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const theme$1 = {
  "slots": {
    "root": "flex items-center gap-2",
    "list": "relative flex p-1 group",
    "indicator": "absolute transition-[translate,width] duration-200",
    "trigger": [
      "group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-(--ui-text-muted) hover:data-[state=inactive]:not-disabled:text-(--ui-text) font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "content": "focus:outline-none w-full",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "label": "truncate"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "tertiary": "",
      "info": "",
      "success": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": {
        "list": "bg-(--ui-bg-elevated) rounded-[calc(var(--ui-radius)*2)]",
        "trigger": "flex-1 w-full",
        "indicator": "rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"
      },
      "link": {
        "list": "border-(--ui-border)",
        "indicator": "rounded-full"
      }
    },
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "list": "w-full",
        "indicator": "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)",
        "trigger": "justify-center"
      },
      "vertical": {
        "list": "flex-col",
        "indicator": "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)"
      }
    },
    "size": {
      "xs": {
        "trigger": "px-2 py-1 text-xs gap-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "sm": {
        "trigger": "px-2.5 py-1.5 text-xs gap-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs"
      },
      "md": {
        "trigger": "px-3 py-1.5 text-sm gap-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "lg": {
        "trigger": "px-3 py-2 text-sm gap-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs"
      },
      "xl": {
        "trigger": "px-3 py-2 text-base gap-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "variant": "pill",
      "class": {
        "indicator": "inset-y-1"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "link",
      "class": {
        "list": "border-b -mb-px",
        "indicator": "-bottom-px h-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "pill",
      "class": {
        "indicator": "inset-x-1",
        "list": "items-center"
      }
    },
    {
      "orientation": "vertical",
      "variant": "link",
      "class": {
        "list": "border-s -ms-px",
        "indicator": "-start-px w-px"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-secondary)"
      }
    },
    {
      "color": "tertiary",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-tertiary)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-tertiary)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-info)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-success)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-bg) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-border-inverted)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-primary)",
        "trigger": "data-[state=active]:text-(--ui-primary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-secondary)",
        "trigger": "data-[state=active]:text-(--ui-secondary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
      }
    },
    {
      "color": "tertiary",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-tertiary)",
        "trigger": "data-[state=active]:text-(--ui-tertiary) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-tertiary)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-info)",
        "trigger": "data-[state=active]:text-(--ui-info) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-success)",
        "trigger": "data-[state=active]:text-(--ui-success) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-warning)",
        "trigger": "data-[state=active]:text-(--ui-warning) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-error)",
        "trigger": "data-[state=active]:text-(--ui-error) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "class": {
        "indicator": "bg-(--ui-bg-inverted)",
        "trigger": "data-[state=active]:text-(--ui-text-highlighted) focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "pill",
    "size": "md"
  }
};

var _a$1;
const appConfigTabs = _appConfig;
const tabs = tv({ extend: tv(theme$1), ...((_a$1 = appConfigTabs.ui) == null ? void 0 : _a$1.tabs) || {} });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    as: {},
    items: {},
    color: {},
    variant: {},
    size: {},
    orientation: { default: "horizontal" },
    content: { type: Boolean, default: true },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    defaultValue: { default: "0" },
    modelValue: {},
    activationMode: {},
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "activationMode", "unmountOnHide"), emits);
    const ui = computed(() => tabs({
      color: props.color,
      variant: props.variant,
      size: props.size,
      orientation: props.orientation
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabsList), {
              class: ui.value.list({ class: (_a3 = props.ui) == null ? void 0 : _a3.list })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabsIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                  }, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.items, (item, index) => {
                    var _a5;
                    _push3(ssrRenderComponent(unref(TabsTrigger), {
                      key: index,
                      value: item.value || String(index),
                      disabled: item.disabled,
                      class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            item,
                            index
                          }, () => {
                            var _a7, _b4, _c;
                            if (item.icon) {
                              _push4(ssrRenderComponent(UIcon, {
                                name: item.icon,
                                class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (item.avatar) {
                              _push4(ssrRenderComponent(__nuxt_component_1, mergeProps({
                                size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                ref_for: true
                              }, item.avatar, {
                                class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          if (unref(get)(item, props.labelKey) || !!slots.default) {
                            _push4(`<span class="${ssrRenderClass(ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "default", {
                              item,
                              index
                            }, () => {
                              _push4(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            item,
                            index
                          }, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b4, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                                  key: 1,
                                  size: ((_b4 = props.ui) == null ? void 0 : _b4.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b3, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                                  key: 1,
                                  size: ((_b3 = props.ui) == null ? void 0 : _b3.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            if (!!_ctx.content) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                var _a4;
                _push2(ssrRenderComponent(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                        item,
                        index
                      }, () => {
                        _push3(`${ssrInterpolate(item.content)}`);
                      }, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, item.slot || "content", {
                          item,
                          index
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(TabsList), {
                class: ui.value.list({ class: (_b = props.ui) == null ? void 0 : _b.list })
              }, {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(TabsIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator })
                    }, null, 8, ["class"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      var _a5;
                      return openBlock(), createBlock(unref(TabsTrigger), {
                        key: index,
                        value: item.value || String(index),
                        disabled: item.disabled,
                        class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger })
                      }, {
                        default: withCtx(() => {
                          var _a6;
                          return [
                            renderSlot(_ctx.$slots, "leading", {
                              item,
                              index
                            }, () => {
                              var _a7, _b2, _c;
                              return [
                                item.icon ? (openBlock(), createBlock(UIcon, {
                                  key: 0,
                                  name: item.icon,
                                  class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                }, null, 8, ["name", "class"])) : item.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                                  key: 1,
                                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize(),
                                  ref_for: true
                                }, item.avatar, {
                                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                              ];
                            }),
                            unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                            }, [
                              renderSlot(_ctx.$slots, "default", {
                                item,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                              ])
                            ], 2)) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "trailing", {
                              item,
                              index
                            })
                          ];
                        }),
                        _: 2
                      }, 1032, ["value", "disabled", "class"]);
                    }), 128))
                  ];
                }),
                _: 3
              }, 8, ["class"]),
              !!_ctx.content ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.items, (item, index) => {
                var _a4;
                return openBlock(), createBlock(unref(TabsContent), {
                  key: index,
                  value: item.value || String(index),
                  class: ui.value.content({ class: (_a4 = props.ui) == null ? void 0 : _a4.content })
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, item.slot || "content", {
                      item,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value", "class"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$7, { __name: "UTabs" });

const theme = {
  "slots": {
    "root": "gap-2",
    "base": "relative overflow-hidden rounded-full bg-(--ui-bg-accented)",
    "indicator": "rounded-full size-full transition-transform duration-200 ease-out",
    "status": "flex justify-end text-(--ui-text-dimmed) transition-[width] duration-200",
    "steps": "grid items-end",
    "step": "truncate text-end row-start-1 col-start-1 transition-opacity"
  },
  "variants": {
    "animation": {
      "carousel": "",
      "carousel-inverse": "",
      "swing": "",
      "elastic": ""
    },
    "color": {
      "primary": {
        "indicator": "bg-(--ui-primary)",
        "steps": "text-(--ui-primary)"
      },
      "secondary": {
        "indicator": "bg-(--ui-secondary)",
        "steps": "text-(--ui-secondary)"
      },
      "tertiary": {
        "indicator": "bg-(--ui-tertiary)",
        "steps": "text-(--ui-tertiary)"
      },
      "info": {
        "indicator": "bg-(--ui-info)",
        "steps": "text-(--ui-info)"
      },
      "success": {
        "indicator": "bg-(--ui-success)",
        "steps": "text-(--ui-success)"
      },
      "warning": {
        "indicator": "bg-(--ui-warning)",
        "steps": "text-(--ui-warning)"
      },
      "error": {
        "indicator": "bg-(--ui-error)",
        "steps": "text-(--ui-error)"
      },
      "neutral": {
        "indicator": "bg-(--ui-bg-inverted)",
        "steps": "text-(--ui-bg)"
      }
    },
    "size": {
      "2xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "xs": {
        "status": "text-xs",
        "steps": "text-xs"
      },
      "sm": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "md": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "lg": {
        "status": "text-sm",
        "steps": "text-sm"
      },
      "xl": {
        "status": "text-base",
        "steps": "text-base"
      },
      "2xl": {
        "status": "text-base",
        "steps": "text-base"
      }
    },
    "step": {
      "active": {
        "step": "opacity-100"
      },
      "first": {
        "step": "opacity-100 text-(--ui-text-muted)"
      },
      "other": {
        "step": "opacity-0"
      },
      "last": {
        "step": ""
      }
    },
    "orientation": {
      "horizontal": {
        "root": "w-full flex flex-col",
        "base": "w-full",
        "status": "flex-row"
      },
      "vertical": {
        "root": "h-full flex flex-row-reverse",
        "base": "h-full",
        "status": "flex-col"
      }
    },
    "inverted": {
      "true": {
        "status": "self-end"
      }
    }
  },
  "compoundVariants": [
    {
      "inverted": true,
      "orientation": "horizontal",
      "class": {
        "step": "text-start",
        "status": "flex-row-reverse"
      }
    },
    {
      "inverted": true,
      "orientation": "vertical",
      "class": {
        "steps": "items-start",
        "status": "flex-col-reverse"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": "h-px"
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": "h-0.5"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "h-1"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "h-2"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "h-3"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "h-4"
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": "h-5"
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": "w-px"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "w-0.5"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "w-1"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "w-2"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "w-3"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "w-4"
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": "w-5"
    },
    {
      "orientation": "horizontal",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:rtl:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "carousel-inverse",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "swing",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "horizontal",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite]"
      }
    },
    {
      "orientation": "vertical",
      "animation": "elastic",
      "class": {
        "indicator": "data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite]"
      }
    }
  ],
  "defaultVariants": {
    "animation": "carousel",
    "color": "primary",
    "size": "md"
  }
};

var _a;
const appConfigProgress = _appConfig;
const progress = tv({ extend: tv(theme), ...((_a = appConfigProgress.ui) == null ? void 0 : _a.progress) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Progress",
  __ssrInlineRender: true,
  props: {
    as: {},
    max: {},
    status: { type: Boolean },
    inverted: { type: Boolean, default: false },
    size: {},
    color: {},
    orientation: { default: "horizontal" },
    animation: {},
    class: {},
    ui: {},
    getValueLabel: {},
    modelValue: { default: null }
  },
  emits: ["update:modelValue", "update:max"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { dir } = useLocale();
    const rootProps = useForwardPropsEmits(reactivePick(props, "getValueLabel", "modelValue"), emits);
    const isIndeterminate = computed(() => rootProps.value.modelValue === null);
    const hasSteps = computed(() => Array.isArray(props.max));
    const realMax = computed(() => {
      if (isIndeterminate.value || !props.max) {
        return void 0;
      }
      if (Array.isArray(props.max)) {
        return props.max.length - 1;
      }
      return Number(props.max);
    });
    const percent = computed(() => {
      if (isIndeterminate.value) {
        return void 0;
      }
      switch (true) {
        case rootProps.value.modelValue < 0:
          return 0;
        case rootProps.value.modelValue > (realMax.value ?? 100):
          return 100;
        default:
          return Math.round(rootProps.value.modelValue / (realMax.value ?? 100) * 100);
      }
    });
    const indicatorStyle = computed(() => {
      if (percent.value === void 0) {
        return;
      }
      if (props.orientation === "vertical") {
        return {
          transform: `translateY(${props.inverted ? "" : "-"}${100 - percent.value}%)`
        };
      } else {
        if (dir.value === "rtl") {
          return {
            transform: `translateX(${props.inverted ? "-" : ""}${100 - percent.value}%)`
          };
        } else {
          return {
            transform: `translateX(${props.inverted ? "" : "-"}${100 - percent.value}%)`
          };
        }
      }
    });
    const statusStyle = computed(() => {
      return {
        [props.orientation === "vertical" ? "height" : "width"]: percent.value ? `${percent.value}%` : "fit-content"
      };
    });
    function isActive(index) {
      return index === Number(props.modelValue);
    }
    function isFirst(index) {
      return index === 0;
    }
    function isLast(index) {
      return index === realMax.value;
    }
    function stepVariant(index) {
      index = Number(index);
      if (isActive(index) && !isFirst(index)) {
        return "active";
      }
      if (isFirst(index) && isActive(index)) {
        return "first";
      }
      if (isLast(index) && isActive(index)) {
        return "last";
      }
      return "other";
    }
    const ui = computed(() => progress({
      animation: props.animation,
      size: props.size,
      color: props.color,
      orientation: props.orientation,
      inverted: props.inverted
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!isIndeterminate.value && (_ctx.status || !!slots.status)) {
              _push2(`<div class="${ssrRenderClass(ui.value.status({ class: (_a3 = props.ui) == null ? void 0 : _a3.status }))}" style="${ssrRenderStyle(statusStyle.value)}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "status", { percent: percent.value }, () => {
                _push2(`${ssrInterpolate(percent.value)}% `);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(ProgressRoot), mergeProps(unref(rootProps), {
              max: realMax.value,
              class: ui.value.base({ class: (_b = props.ui) == null ? void 0 : _b.base }),
              style: { "transform": "translateZ(0)" }
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a4, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProgressIndicator), {
                    class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator }),
                    style: indicatorStyle.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (hasSteps.value) {
              _push2(`<div class="${ssrRenderClass(ui.value.steps({ class: (_c = props.ui) == null ? void 0 : _c.steps }))}"${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.max, (step, index) => {
                var _a4;
                _push2(`<div class="${ssrRenderClass(ui.value.step({ class: (_a4 = props.ui) == null ? void 0 : _a4.step, step: stepVariant(index) }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, `step-${index}`, { step }, () => {
                  _push2(`${ssrInterpolate(step)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !isIndeterminate.value && (_ctx.status || !!slots.status) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.status({ class: (_d = props.ui) == null ? void 0 : _d.status }),
                style: statusStyle.value
              }, [
                renderSlot(_ctx.$slots, "status", { percent: percent.value }, () => [
                  createTextVNode(toDisplayString(percent.value) + "% ", 1)
                ])
              ], 6)) : createCommentVNode("", true),
              createVNode(unref(ProgressRoot), mergeProps(unref(rootProps), {
                max: realMax.value,
                class: ui.value.base({ class: (_e = props.ui) == null ? void 0 : _e.base }),
                style: { "transform": "translateZ(0)" }
              }), {
                default: withCtx(() => {
                  var _a4;
                  return [
                    createVNode(unref(ProgressIndicator), {
                      class: ui.value.indicator({ class: (_a4 = props.ui) == null ? void 0 : _a4.indicator }),
                      style: indicatorStyle.value
                    }, null, 8, ["class", "style"])
                  ];
                }),
                _: 1
              }, 16, ["max", "class"]),
              hasSteps.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.steps({ class: (_f = props.ui) == null ? void 0 : _f.steps })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.max, (step, index) => {
                  var _a4;
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: ui.value.step({ class: (_a4 = props.ui) == null ? void 0 : _a4.step, step: stepVariant(index) })
                  }, [
                    renderSlot(_ctx.$slots, `step-${index}`, { step }, () => [
                      createTextVNode(toDisplayString(step), 1)
                    ])
                  ], 2);
                }), 128))
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Progress.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$6, { __name: "UProgress" });

const _sfc_main$5 = {
  __name: "CommonOrderDetail",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      required: true
    },
    type: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const orderStatus = computed(() => {
      switch (props.order.status) {
        case "processing":
          return "در حال پردازش";
        case "readyToShip":
          return "آماده ارسال";
        case "delivered":
          return "تحویل داده شده";
        case "cancelled":
          return "لغو شده";
        default:
          return "";
      }
    });
    const orderProgressValue = computed(() => {
      switch (props.order.status) {
        case "processing":
          return 25;
        case "readyToShip":
          return 75;
        case "delivered":
          return 100;
        case "cancelled":
          return 0;
        default:
          return 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCard = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UProgress = __nuxt_component_2;
      _push(ssrRenderComponent(_component_UCard, mergeProps({ class: "my-4" }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full grid grid-cols-2"${_scopeId}><div class="flex flex-col justify-start items-start"${_scopeId}><p class="font-bold"${_scopeId}>مرسوله ۱ از ۱</p><div class="flex justify-between"${_scopeId}><span class="font-medium"${_scopeId}>تاریخ تحویل:</span><span${_scopeId}>${ssrInterpolate(props.order.deliveryDate)}</span></div>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: props.order.productImage,
              alt: "تصویر محصول",
              class: "max-h-28 object-contain"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.type == "current") {
              _push2(`<div class="space-y-2"${_scopeId}><div class="flex justify-between mt-2 rtl"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(orderStatus))}</span>`);
              if (props.order.status === "readyToShip") {
                _push2(`<span${_scopeId}>آماده ارسال</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UProgress, {
                inverted: "",
                modelValue: unref(orderProgressValue),
                "onUpdate:modelValue": ($event) => isRef(orderProgressValue) ? orderProgressValue.value = $event : null,
                color: "success"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full grid grid-cols-2" }, [
                createVNode("div", { class: "flex flex-col justify-start items-start" }, [
                  createVNode("p", { class: "font-bold" }, "مرسوله ۱ از ۱"),
                  createVNode("div", { class: "flex justify-between" }, [
                    createVNode("span", { class: "font-medium" }, "تاریخ تحویل:"),
                    createVNode("span", null, toDisplayString(props.order.deliveryDate), 1)
                  ]),
                  createVNode(_component_NuxtImg, {
                    src: props.order.productImage,
                    alt: "تصویر محصول",
                    class: "max-h-28 object-contain"
                  }, null, 8, ["src"])
                ]),
                __props.type == "current" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-2"
                }, [
                  createVNode("div", { class: "flex justify-between mt-2 rtl" }, [
                    createVNode("span", null, toDisplayString(unref(orderStatus)), 1),
                    props.order.status === "readyToShip" ? (openBlock(), createBlock("span", { key: 0 }, "آماده ارسال")) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_UProgress, {
                    inverted: "",
                    modelValue: unref(orderProgressValue),
                    "onUpdate:modelValue": ($event) => isRef(orderProgressValue) ? orderProgressValue.value = $event : null,
                    color: "success"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}><h2 class="text-xl font-bold"${_scopeId}>جزئیات سفارش</h2><div class="flex flex-wrap gap-4"${_scopeId}><div class="flex justify-between items-center gap-1"${_scopeId}><span class="font-medium"${_scopeId}>کد سفارش:</span><span class="text-neutral-600 text-sm"${_scopeId}>${ssrInterpolate(props.order.code)}</span></div><span${_scopeId}>•</span><div class="flex justify-between items-center gap-1"${_scopeId}><span class="font-medium"${_scopeId}>تاریخ سفارش:</span><span class="text-neutral-600 text-sm"${_scopeId}>${ssrInterpolate(props.order.date)}</span></div><span${_scopeId}>•</span><div class="flex justify-between items-center gap-1"${_scopeId}><span class="font-medium"${_scopeId}>مبلغ سفارش:</span><span class="text-neutral-600 text-sm"${_scopeId}>${ssrInterpolate(props.order.amount)} تومان</span></div><span${_scopeId}>•</span><div class="flex justify-between items-center gap-1"${_scopeId}><span class="font-medium"${_scopeId}>تخفیف:</span><span class="text-neutral-600 text-sm"${_scopeId}>${ssrInterpolate(props.order.discount)} تومان</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode("h2", { class: "text-xl font-bold" }, "جزئیات سفارش"),
                createVNode("div", { class: "flex flex-wrap gap-4" }, [
                  createVNode("div", { class: "flex justify-between items-center gap-1" }, [
                    createVNode("span", { class: "font-medium" }, "کد سفارش:"),
                    createVNode("span", { class: "text-neutral-600 text-sm" }, toDisplayString(props.order.code), 1)
                  ]),
                  createVNode("span", null, "•"),
                  createVNode("div", { class: "flex justify-between items-center gap-1" }, [
                    createVNode("span", { class: "font-medium" }, "تاریخ سفارش:"),
                    createVNode("span", { class: "text-neutral-600 text-sm" }, toDisplayString(props.order.date), 1)
                  ]),
                  createVNode("span", null, "•"),
                  createVNode("div", { class: "flex justify-between items-center gap-1" }, [
                    createVNode("span", { class: "font-medium" }, "مبلغ سفارش:"),
                    createVNode("span", { class: "text-neutral-600 text-sm" }, toDisplayString(props.order.amount) + " تومان", 1)
                  ]),
                  createVNode("span", null, "•"),
                  createVNode("div", { class: "flex justify-between items-center gap-1" }, [
                    createVNode("span", { class: "font-medium" }, "تخفیف:"),
                    createVNode("span", { class: "text-neutral-600 text-sm" }, toDisplayString(props.order.discount) + " تومان", 1)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/OrderDetail.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const _sfc_main$4 = {
  __name: "PanelOrderCurrent",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "processing"
        // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
      },
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "readyToShip"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonOrderDetail = _sfc_main$5;
      _push(`<!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(ssrRenderComponent(_component_CommonOrderDetail, {
          type: "current",
          key: item.id,
          order: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/OrderCurrent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "PanelOrderDelivered",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
        // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
      },
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonOrderDetail = _sfc_main$5;
      _push(`<!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(ssrRenderComponent(_component_CommonOrderDetail, {
          key: item.id,
          order: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/OrderDelivered.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "PanelOrderReturned",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
        // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
      },
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonOrderDetail = _sfc_main$5;
      _push(`<!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(ssrRenderComponent(_component_CommonOrderDetail, {
          key: item.id,
          order: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/OrderReturned.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "PanelOrderCancelled",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
        // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
      },
      {
        code: "38663813136",
        date: "16 فروردین 14:03",
        amount: "15,123,800",
        discount: "55,800",
        deliveryDate: "پنج شنبه 23 فروردین 5 - 9 عصر",
        productImage: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
        status: "delivered"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonOrderDetail = _sfc_main$5;
      _push(`<!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(ssrRenderComponent(_component_CommonOrderDetail, {
          key: item.id,
          order: item
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/panel/OrderCancelled.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        label: "جاری",
        slot: "current"
      },
      {
        label: "تحویل شده",
        slot: "delivered"
      },
      {
        label: "مرجوع شده",
        slot: "returned"
      },
      {
        label: "لغو شده",
        slot: "cancelled"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_UCard = __nuxt_component_0;
      const _component_UTabs = __nuxt_component_2$1;
      const _component_PanelOrderCurrent = _sfc_main$4;
      const _component_PanelOrderDelivered = _sfc_main$3;
      const _component_PanelOrderReturned = _sfc_main$2;
      const _component_PanelOrderCancelled = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "panel" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, { class: "my-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-bold text-2xl mb-5"${_scopeId2}>تاریخچه سفارشات</p>`);
                  _push3(ssrRenderComponent(_component_UTabs, {
                    items,
                    variant: "link",
                    class: "gap-4 w-full",
                    ui: { trigger: "flex-1" }
                  }, {
                    current: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PanelOrderCurrent, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PanelOrderCurrent)
                        ];
                      }
                    }),
                    delivered: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PanelOrderDelivered, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PanelOrderDelivered)
                        ];
                      }
                    }),
                    returned: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PanelOrderReturned, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PanelOrderReturned)
                        ];
                      }
                    }),
                    cancelled: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_PanelOrderCancelled, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_PanelOrderCancelled)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "font-bold text-2xl mb-5" }, "تاریخچه سفارشات"),
                    createVNode(_component_UTabs, {
                      items,
                      variant: "link",
                      class: "gap-4 w-full",
                      ui: { trigger: "flex-1" }
                    }, {
                      current: withCtx(({ item }) => [
                        createVNode(_component_PanelOrderCurrent)
                      ]),
                      delivered: withCtx(({ item }) => [
                        createVNode(_component_PanelOrderDelivered)
                      ]),
                      returned: withCtx(({ item }) => [
                        createVNode(_component_PanelOrderReturned)
                      ]),
                      cancelled: withCtx(({ item }) => [
                        createVNode(_component_PanelOrderCancelled)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, { class: "my-4" }, {
                default: withCtx(() => [
                  createVNode("p", { class: "font-bold text-2xl mb-5" }, "تاریخچه سفارشات"),
                  createVNode(_component_UTabs, {
                    items,
                    variant: "link",
                    class: "gap-4 w-full",
                    ui: { trigger: "flex-1" }
                  }, {
                    current: withCtx(({ item }) => [
                      createVNode(_component_PanelOrderCurrent)
                    ]),
                    delivered: withCtx(({ item }) => [
                      createVNode(_component_PanelOrderDelivered)
                    ]),
                    returned: withCtx(({ item }) => [
                      createVNode(_component_PanelOrderReturned)
                    ]),
                    cancelled: withCtx(({ item }) => [
                      createVNode(_component_PanelOrderCancelled)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panel/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=orders.vue.mjs.map
