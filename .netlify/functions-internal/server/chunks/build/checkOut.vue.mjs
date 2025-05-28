import { _ as __nuxt_component_0, a as _sfc_main$2, b as _sfc_main$3 } from './Footer.vue.mjs';
import { _ as __nuxt_component_0$1 } from './Card.vue3.mjs';
import { defineComponent, mergeModels, useSlots, useModel, computed, unref, mergeProps, withCtx, renderSlot, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, createVNode, createCommentVNode, renderList, useSSRContext, ref } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardProps, StepperRoot, StepperItem, StepperTrigger, StepperIndicator, StepperSeparator, StepperTitle, StepperDescription } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { t as tv, U as UIcon, e as _appConfig, h as useRoute } from './server.mjs';
import 'lucide-vue-next';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';

const theme = {
  "slots": {
    "root": "flex gap-4",
    "header": "flex",
    "item": "group text-center relative w-full",
    "container": "relative",
    "trigger": "rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-(--ui-bg) group-data-[state=active]:text-(--ui-bg) text-(--ui-text-muted) bg-(--ui-bg-elevated) focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full",
    "icon": "shrink-0",
    "separator": "absolute rounded-full group-data-[disabled]:opacity-75 bg-(--ui-border-accented)",
    "wrapper": "",
    "title": "font-medium text-(--ui-text)",
    "description": "text-(--ui-text-muted) text-wrap",
    "content": "size-full"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-col",
        "container": "flex justify-center",
        "separator": "top-[calc(50%-2px)] h-0.5",
        "wrapper": "mt-1"
      },
      "vertical": {
        "header": "flex-col gap-4",
        "item": "flex text-start",
        "separator": "start-[calc(50%-1px)] -bottom-[10px] w-0.5"
      }
    },
    "size": {
      "xs": {
        "trigger": "size-6 text-xs",
        "icon": "size-3",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-1.5"
      },
      "sm": {
        "trigger": "size-8 text-sm",
        "icon": "size-4",
        "title": "text-xs",
        "description": "text-xs",
        "wrapper": "mt-2"
      },
      "md": {
        "trigger": "size-10 text-base",
        "icon": "size-5",
        "title": "text-sm",
        "description": "text-sm",
        "wrapper": "mt-2.5"
      },
      "lg": {
        "trigger": "size-12 text-lg",
        "icon": "size-6",
        "title": "text-base",
        "description": "text-base",
        "wrapper": "mt-3"
      },
      "xl": {
        "trigger": "size-14 text-xl",
        "icon": "size-7",
        "title": "text-lg",
        "description": "text-lg",
        "wrapper": "mt-3.5"
      }
    },
    "color": {
      "primary": {
        "trigger": "group-data-[state=completed]:bg-(--ui-primary) group-data-[state=active]:bg-(--ui-primary) focus-visible:outline-(--ui-primary)",
        "separator": "group-data-[state=completed]:bg-(--ui-primary)"
      },
      "secondary": {
        "trigger": "group-data-[state=completed]:bg-(--ui-secondary) group-data-[state=active]:bg-(--ui-secondary) focus-visible:outline-(--ui-secondary)",
        "separator": "group-data-[state=completed]:bg-(--ui-secondary)"
      },
      "tertiary": {
        "trigger": "group-data-[state=completed]:bg-(--ui-tertiary) group-data-[state=active]:bg-(--ui-tertiary) focus-visible:outline-(--ui-tertiary)",
        "separator": "group-data-[state=completed]:bg-(--ui-tertiary)"
      },
      "info": {
        "trigger": "group-data-[state=completed]:bg-(--ui-info) group-data-[state=active]:bg-(--ui-info) focus-visible:outline-(--ui-info)",
        "separator": "group-data-[state=completed]:bg-(--ui-info)"
      },
      "success": {
        "trigger": "group-data-[state=completed]:bg-(--ui-success) group-data-[state=active]:bg-(--ui-success) focus-visible:outline-(--ui-success)",
        "separator": "group-data-[state=completed]:bg-(--ui-success)"
      },
      "warning": {
        "trigger": "group-data-[state=completed]:bg-(--ui-warning) group-data-[state=active]:bg-(--ui-warning) focus-visible:outline-(--ui-warning)",
        "separator": "group-data-[state=completed]:bg-(--ui-warning)"
      },
      "error": {
        "trigger": "group-data-[state=completed]:bg-(--ui-error) group-data-[state=active]:bg-(--ui-error) focus-visible:outline-(--ui-error)",
        "separator": "group-data-[state=completed]:bg-(--ui-error)"
      },
      "neutral": {
        "trigger": "group-data-[state=completed]:bg-(--ui-bg-inverted) group-data-[state=active]:bg-(--ui-bg-inverted) focus-visible:outline-(--ui-border-inverted)",
        "separator": "group-data-[state=completed]:bg-(--ui-bg-inverted)"
      }
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "separator": "start-[calc(50%+16px)] end-[calc(-50%+16px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "separator": "start-[calc(50%+20px)] end-[calc(-50%+20px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "separator": "start-[calc(50%+28px)] end-[calc(-50%+28px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "separator": "start-[calc(50%+32px)] end-[calc(-50%+32px)]"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "separator": "start-[calc(50%+36px)] end-[calc(-50%+36px)]"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "separator": "top-[30px]",
        "item": "gap-1.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "separator": "top-[38px]",
        "item": "gap-2"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "separator": "top-[46px]",
        "item": "gap-2.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "separator": "top-[54px]",
        "item": "gap-3"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "separator": "top-[62px]",
        "item": "gap-3.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};

var _a;
const appConfigStepper = _appConfig;
const stepper = tv({ extend: tv(theme), ...((_a = appConfigStepper.ui) == null ? void 0 : _a.stepper) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    items: {},
    size: {},
    color: {},
    orientation: { default: "horizontal" },
    defaultValue: {},
    disabled: { type: Boolean },
    ui: {},
    class: {},
    linear: { type: Boolean, default: true }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["next", "prev"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const rootProps = useForwardProps(reactivePick(props, "as", "orientation", "linear"));
    const ui = computed(() => stepper({
      orientation: props.orientation,
      size: props.size,
      color: props.color
    }));
    const currentStepIndex = computed({
      get() {
        const value = modelValue.value ?? props.defaultValue;
        return (typeof value === "string" ? props.items.findIndex((item) => item.value === value) : value) ?? 0;
      },
      set(value) {
        var _a2, _b;
        modelValue.value = ((_b = (_a2 = props.items) == null ? void 0 : _a2[value]) == null ? void 0 : _b.value) ?? value;
      }
    });
    const currentStep = computed(() => {
      var _a2;
      return (_a2 = props.items) == null ? void 0 : _a2[currentStepIndex.value];
    });
    const hasNext = computed(() => {
      var _a2;
      return currentStepIndex.value < ((_a2 = props.items) == null ? void 0 : _a2.length) - 1;
    });
    const hasPrev = computed(() => currentStepIndex.value > 0);
    __expose({
      next() {
        if (hasNext.value) {
          currentStepIndex.value += 1;
          emits("next", currentStep.value);
        }
      },
      prev() {
        if (hasPrev.value) {
          currentStepIndex.value -= 1;
          emits("prev", currentStep.value);
        }
      },
      hasNext,
      hasPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps(unref(rootProps), {
        modelValue: currentStepIndex.value,
        "onUpdate:modelValue": ($event) => currentStepIndex.value = $event,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, count) => {
              var _a4;
              _push2(ssrRenderComponent(unref(StepperItem), {
                key: item.value ?? count,
                step: count,
                disabled: item.disabled || props.disabled,
                class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a5, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k, _l;
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(ui.value.container({ class: (_a5 = props.ui) == null ? void 0 : _a5.container }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTrigger), {
                      class: ui.value.trigger({ class: (_b2 = props.ui) == null ? void 0 : _b2.trigger })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a6, _b3;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(StepperIndicator), {
                            class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(UIcon, {
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!--[-->${ssrInterpolate(count + 1)}<!--]-->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(StepperIndicator), {
                              class: ui.value.indicator({ class: (_b3 = props.ui) == null ? void 0 : _b3.indicator })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                  var _a7;
                                  return [
                                    item.icon ? (openBlock(), createBlock(UIcon, {
                                      key: 0,
                                      name: item.icon,
                                      class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                    }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(count + 1), 1)
                                    ], 64))
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (count < _ctx.items.length - 1) {
                      _push3(ssrRenderComponent(unref(StepperSeparator), {
                        class: ui.value.separator({ class: (_c2 = props.ui) == null ? void 0 : _c2.separator })
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="${ssrRenderClass(ui.value.wrapper({ class: (_d2 = props.ui) == null ? void 0 : _d2.wrapper }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(StepperTitle), {
                      class: ui.value.title({ class: (_e2 = props.ui) == null ? void 0 : _e2.title })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "title", { item }, () => {
                            _push4(`${ssrInterpolate(item.title)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "title", { item }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(StepperDescription), {
                      class: ui.value.description({ class: (_f2 = props.ui) == null ? void 0 : _f2.description })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "description", { item }, () => {
                            _push4(`${ssrInterpolate(item.description)}`);
                          }, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "description", { item }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ui.value.container({ class: (_g2 = props.ui) == null ? void 0 : _g2.container })
                      }, [
                        createVNode(unref(StepperTrigger), {
                          class: ui.value.trigger({ class: (_h2 = props.ui) == null ? void 0 : _h2.trigger })
                        }, {
                          default: withCtx(() => {
                            var _a6;
                            return [
                              createVNode(unref(StepperIndicator), {
                                class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                      }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(count + 1), 1)
                                      ], 64))
                                    ];
                                  })
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["class"]),
                        count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                          key: 0,
                          class: ui.value.separator({ class: (_i2 = props.ui) == null ? void 0 : _i2.separator })
                        }, null, 8, ["class"])) : createCommentVNode("", true)
                      ], 2),
                      createVNode("div", {
                        class: ui.value.wrapper({ class: (_j2 = props.ui) == null ? void 0 : _j2.wrapper })
                      }, [
                        createVNode(unref(StepperTitle), {
                          class: ui.value.title({ class: (_k = props.ui) == null ? void 0 : _k.title })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "title", { item }, () => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"]),
                        createVNode(unref(StepperDescription), {
                          class: ui.value.description({ class: (_l = props.ui) == null ? void 0 : _l.description })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "description", { item }, () => [
                              createTextVNode(toDisplayString(item.description), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["class"])
                      ], 2)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
            if (((_b = currentStep.value) == null ? void 0 : _b.content) || !!slots.content || ((_c = currentStep.value) == null ? void 0 : _c.slot)) {
              _push2(`<div class="${ssrRenderClass(ui.value.content({ class: (_d = props.ui) == null ? void 0 : _d.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, ((_e = currentStep.value) == null ? void 0 : _e.slot) || "content", {
                item: currentStep.value
              }, () => {
                var _a4;
                _push2(`${ssrInterpolate((_a4 = currentStep.value) == null ? void 0 : _a4.content)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: ui.value.header({ class: (_f = props.ui) == null ? void 0 : _f.header })
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, count) => {
                  var _a4;
                  return openBlock(), createBlock(unref(StepperItem), {
                    key: item.value ?? count,
                    step: count,
                    disabled: item.disabled || props.disabled,
                    class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                  }, {
                    default: withCtx(() => {
                      var _a5, _b2, _c2, _d2, _e2, _f2;
                      return [
                        createVNode("div", {
                          class: ui.value.container({ class: (_a5 = props.ui) == null ? void 0 : _a5.container })
                        }, [
                          createVNode(unref(StepperTrigger), {
                            class: ui.value.trigger({ class: (_b2 = props.ui) == null ? void 0 : _b2.trigger })
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(unref(StepperIndicator), {
                                  class: ui.value.indicator({ class: (_a6 = props.ui) == null ? void 0 : _a6.indicator })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "indicator", { item }, () => {
                                      var _a7;
                                      return [
                                        item.icon ? (openBlock(), createBlock(UIcon, {
                                          key: 0,
                                          name: item.icon,
                                          class: ui.value.icon({ class: (_a7 = props.ui) == null ? void 0 : _a7.indicator })
                                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(count + 1), 1)
                                        ], 64))
                                      ];
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["class"]),
                          count < _ctx.items.length - 1 ? (openBlock(), createBlock(unref(StepperSeparator), {
                            key: 0,
                            class: ui.value.separator({ class: (_c2 = props.ui) == null ? void 0 : _c2.separator })
                          }, null, 8, ["class"])) : createCommentVNode("", true)
                        ], 2),
                        createVNode("div", {
                          class: ui.value.wrapper({ class: (_d2 = props.ui) == null ? void 0 : _d2.wrapper })
                        }, [
                          createVNode(unref(StepperTitle), {
                            class: ui.value.title({ class: (_e2 = props.ui) == null ? void 0 : _e2.title })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "title", { item }, () => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(unref(StepperDescription), {
                            class: ui.value.description({ class: (_f2 = props.ui) == null ? void 0 : _f2.description })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "description", { item }, () => [
                                createTextVNode(toDisplayString(item.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ], 2)
                      ];
                    }),
                    _: 2
                  }, 1032, ["step", "disabled", "class"]);
                }), 128))
              ], 2),
              ((_g = currentStep.value) == null ? void 0 : _g.content) || !!slots.content || ((_h = currentStep.value) == null ? void 0 : _h.slot) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.content({ class: (_i = props.ui) == null ? void 0 : _i.description })
              }, [
                renderSlot(_ctx.$slots, ((_j = currentStep.value) == null ? void 0 : _j.slot) || "content", {
                  item: currentStep.value
                }, () => {
                  var _a4;
                  return [
                    createTextVNode(toDisplayString((_a4 = currentStep.value) == null ? void 0 : _a4.content), 1)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Stepper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "UStepper" });

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkOut",
  __ssrInlineRender: true,
  setup(__props) {
    const currentStep = ref(0);
    const items = ref([
      {
        // title: 'مرحله اول',
        description: "سبد خرید شما",
        disabled: useRoute().path !== "/basket",
        icon: "i-lucide-shopping-basket",
        complete: computed(() => currentStep.value > 0)
      },
      {
        // title: 'مرحله  دوم',
        description: "ارسال اطلاعات",
        icon: "i-lucide-map-pin",
        complete: computed(() => currentStep.value > 1)
      },
      {
        // title: 'مرحله سوم',
        description: "پرداخت و ثبت نهایی",
        icon: "i-lucide-credit-card",
        complete: computed(() => currentStep.value > 2)
      },
      {
        // title: 'مرحله چهارم',
        description: "اتمام خرید و ارسال",
        icon: "i-lucide-truck",
        complete: computed(() => currentStep.value > 3)
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UCard = __nuxt_component_0$1;
      const _component_UStepper = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UCard, { class: "p-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UStepper, {
                    items: unref(items),
                    value: unref(currentStep)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UStepper, {
                      items: unref(items),
                      value: unref(currentStep)
                    }, null, 8, ["items", "value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2),
              createVNode("div", null, [
                createVNode(_component_UCard, { class: "p-5" }, {
                  default: withCtx(() => [
                    createVNode(_component_UStepper, {
                      items: unref(items),
                      value: unref(currentStep)
                    }, null, 8, ["items", "value"])
                  ]),
                  _: 1
                }),
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/checkOut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkOut.vue.mjs.map
