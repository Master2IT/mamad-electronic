import { t as tv, e as _appConfig, q as useFormField, r as useButtonGroup, s as useComponentIcons, U as UIcon, j as __nuxt_component_1, v as looseToNumber, b as useAppConfig, w as isArrayOfArray, g as get, x as ULink, y as pickLinkProps, z as ULinkBase, a as __nuxt_component_3, d as __nuxt_component_3$1, _ as __nuxt_component_1$1, i as __nuxt_component_2$2 } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, mergeModels, useSlots, useModel, computed, ref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, toRef, createTextVNode, resolveDynamicComponent, createSlots, Fragment, renderList, resolveComponent, withModifiers, withDirectives, isRef, vModelText } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport } from 'reka-ui';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { Twitter, Instagram, Send } from 'lucide-vue-next';

const theme$4 = {
  "base": "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};

var _a$4;
const appConfigContainer = _appConfig;
const container = tv({ extend: tv(theme$4), ...((_a$4 = appConfigContainer.ui) == null ? void 0 : _a$4.container) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(container)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$6, { __name: "UContainer" });

const theme$3 = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-[calc(var(--ui-radius)*1.5)] border-0 placeholder:text-(--ui-text-dimmed) focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-(--ui-text-dimmed)",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-(--ui-text-dimmed)"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border-accented)",
      "soft": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-(--ui-bg-elevated)/50",
      "subtle": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated) ring ring-inset ring-(--ui-border-accented)",
      "ghost": "text-(--ui-text-highlighted) bg-transparent hover:bg-(--ui-bg-elevated) focus:bg-(--ui-bg-elevated) disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-(--ui-text-highlighted) bg-transparent"
    },
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
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-(--ui-text-muted) file:outline-none"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-secondary)"
    },
    {
      "color": "tertiary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-tertiary)"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-info)"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-success)"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-primary)"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-secondary)"
    },
    {
      "color": "tertiary",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-tertiary)"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-info)"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-success)"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-warning)"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-error)"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-border-inverted)"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-(--ui-border-inverted)"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};

var _a$3;
const appConfigInput = _appConfig;
const input = tv({ extend: tv(theme$3), ...((_a$3 = appConfigInput.ui) == null ? void 0 : _a$3.input) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "Input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: {},
    id: {},
    name: {},
    type: { default: "text" },
    placeholder: {},
    color: {},
    variant: {},
    size: {},
    required: { type: Boolean },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    autofocusDelay: { default: 0 },
    disabled: { type: Boolean },
    highlight: { type: Boolean },
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {},
    loading: { type: Boolean },
    loadingIcon: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "blur", "change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const [modelValue, modelModifiers] = useModel(__props, "modelValue");
    const { emitFormBlur, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, emitFormFocus, ariaAttrs } = useFormField(props, {});
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => input({
      type: props.type,
      color: color.value,
      variant: props.variant,
      size: inputSize == null ? void 0 : inputSize.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    const inputRef = ref(null);
    function updateInput(value) {
      if (modelModifiers.trim) {
        value = (value == null ? void 0 : value.trim()) ?? null;
      }
      if (modelModifiers.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.nullify) {
        value || (value = null);
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      if (!modelModifiers.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (modelModifiers.lazy) {
        updateInput(value);
      }
      if (modelModifiers.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: _ctx.type,
              value: unref(modelValue),
              name: unref(name),
              placeholder: _ctx.placeholder,
              class: ui.value.base({ class: (_a3 = props.ui) == null ? void 0 : _a3.base }),
              disabled: unref(disabled),
              required: _ctx.required,
              autocomplete: _ctx.autocomplete
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!_ctx.avatar || !!slots.leading) {
              _push2(`<span class="${ssrRenderClass(ui.value.leading({ class: (_b = props.ui) == null ? void 0 : _b.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b2, _c2;
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!_ctx.avatar) {
                  _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                    size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span class="${ssrRenderClass(ui.value.trailing({ class: (_c = props.ui) == null ? void 0 : _c.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a4;
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: _ctx.type,
                value: unref(modelValue),
                name: unref(name),
                placeholder: _ctx.placeholder,
                class: ui.value.base({ class: (_d = props.ui) == null ? void 0 : _d.base }),
                disabled: unref(disabled),
                required: _ctx.required,
                autocomplete: _ctx.autocomplete
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "type", "value", "name", "placeholder", "disabled", "required", "autocomplete", "onFocus"]),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!_ctx.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.leading({ class: (_e = props.ui) == null ? void 0 : _e.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => {
                  var _a4, _b2, _c2;
                  return [
                    unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                      key: 0,
                      name: unref(leadingIconName),
                      class: ui.value.leadingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.leadingIcon })
                    }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                      key: 1,
                      size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                    }, _ctx.avatar, {
                      class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                class: ui.value.trailing({ class: (_f = props.ui) == null ? void 0 : _f.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", {}, () => {
                  var _a4;
                  return [
                    unref(trailingIconName) ? (openBlock(), createBlock(UIcon, {
                      key: 0,
                      name: unref(trailingIconName),
                      class: ui.value.trailingIcon({ class: (_a4 = props.ui) == null ? void 0 : _a4.trailingIcon })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
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

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2$1 = Object.assign(_sfc_main$5, { __name: "UInput" });

const theme$2 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
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
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-(--ui-primary) text-(--ui-bg)"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-(--ui-secondary) text-(--ui-bg)"
    },
    {
      "color": "tertiary",
      "variant": "solid",
      "class": "bg-(--ui-tertiary) text-(--ui-bg)"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-(--ui-info) text-(--ui-bg)"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-(--ui-success) text-(--ui-bg)"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-(--ui-warning) text-(--ui-bg)"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-(--ui-error) text-(--ui-bg)"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/50"
    },
    {
      "color": "tertiary",
      "variant": "outline",
      "class": "text-(--ui-tertiary) ring ring-inset ring-(--ui-tertiary)/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
    },
    {
      "color": "tertiary",
      "variant": "soft",
      "class": "bg-(--ui-tertiary)/10 text-(--ui-tertiary)"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-(--ui-info)/10 text-(--ui-info)"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-(--ui-success)/10 text-(--ui-success)"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-(--ui-error)/10 text-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
    },
    {
      "color": "tertiary",
      "variant": "subtle",
      "class": "bg-(--ui-tertiary)/10 text-(--ui-tertiary) ring ring-inset ring-(--ui-tertiary)/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-bg-inverted)"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-(--ui-text) bg-(--ui-bg-elevated)"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};

var _a$2;
const appConfigBadge = _appConfig;
const badge = tv({ extend: tv(theme$2), ...((_a$2 = appConfigBadge.ui) == null ? void 0 : _a$2.badge) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    as: { default: "span" },
    label: {},
    color: {},
    variant: {},
    size: {},
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => badge({
      color: props.color,
      variant: props.variant,
      size: buttonGroupSize.value || props.size,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a3, _b, _c;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(UIcon, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!_ctx.avatar) {
                _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                  size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, _ctx.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3;
              if (_ctx.label) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a3;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(UIcon, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a3, _b, _c;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(UIcon, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                    key: 1,
                    size: ((_b = props.ui) == null ? void 0 : _b.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c = props.ui) == null ? void 0 : _c.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a3;
                return [
                  _ctx.label ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                  }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a3;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(UIcon, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UBadge = Object.assign(_sfc_main$4, { __name: "UBadge" });

const theme$1 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};

var _a$1;
const appConfigCollapsible = _appConfig;
const collapsible = tv({ extend: tv(theme$1), ...((_a$1 = appConfigCollapsible.ui) == null ? void 0 : _a$1.collapsible) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = collapsible();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a3, _b;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: unref(ui).content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: unref(ui).content({ class: (_b = props.ui) == null ? void 0 : _b.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const UCollapsible = Object.assign(_sfc_main$3, { __name: "UCollapsible" });

const theme = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-(--ui-text-highlighted) px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childList": "",
    "childItem": "",
    "childLink": "group size-full px-3 py-2 rounded-[calc(var(--ui-radius)*1.5)] flex items-start gap-2 text-start",
    "childLinkWrapper": "flex flex-col items-start",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "font-semibold text-sm relative inline-flex",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childLinkDescription": "text-sm text-(--ui-text-muted)",
    "separator": "px-2 h-px bg-(--ui-border)",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    "content": "absolute top-0 left-0 w-full",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-(--ui-border) bg-(--ui-bg) z-[1] rounded-[calc(var(--ui-radius)/2)]"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-(--ui-primary)",
        "childLink": "focus-visible:outline-(--ui-primary)"
      },
      "secondary": {
        "link": "focus-visible:before:ring-(--ui-secondary)",
        "childLink": "focus-visible:outline-(--ui-secondary)"
      },
      "tertiary": {
        "link": "focus-visible:before:ring-(--ui-tertiary)",
        "childLink": "focus-visible:outline-(--ui-tertiary)"
      },
      "info": {
        "link": "focus-visible:before:ring-(--ui-info)",
        "childLink": "focus-visible:outline-(--ui-info)"
      },
      "success": {
        "link": "focus-visible:before:ring-(--ui-success)",
        "childLink": "focus-visible:outline-(--ui-success)"
      },
      "warning": {
        "link": "focus-visible:before:ring-(--ui-warning)",
        "childLink": "focus-visible:outline-(--ui-warning)"
      },
      "error": {
        "link": "focus-visible:before:ring-(--ui-error)",
        "childLink": "focus-visible:outline-(--ui-error)"
      },
      "neutral": {
        "link": "focus-visible:before:ring-(--ui-border-inverted)",
        "childLink": "focus-visible:outline-(--ui-border-inverted)"
      }
    },
    "highlightColor": {
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
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewport": "",
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
        "content": ""
      }
    },
    "active": {
      "true": {
        "childLink": "bg-(--ui-bg-elevated) text-(--ui-text-highlighted)",
        "childLinkIcon": "text-(--ui-text)"
      },
      "false": {
        "link": "text-(--ui-text-muted)",
        "linkLeadingIcon": "text-(--ui-text-dimmed)",
        "childLink": [
          "hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "childLinkIcon": [
          "text-(--ui-text-dimmed) group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "tertiary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-tertiary)",
        "linkLeadingIcon": "text-(--ui-tertiary) group-data-[state=open]:text-(--ui-tertiary)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-(--ui-bg-elevated)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "class": {
        "link": [
          "hover:before:bg-(--ui-bg-elevated)/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "tertiary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-tertiary)",
        "linkLeadingIcon": "text-(--ui-tertiary) group-data-[state=open]:text-(--ui-tertiary)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-primary)"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-secondary)"
      }
    },
    {
      "highlightColor": "tertiary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-tertiary)"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-info)"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-success)"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-warning)"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-error)"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-(--ui-border)",
        "childItem": "ps-1.5 -ms-px"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};

var _a;
const appConfigNavigationMenu = _appConfig;
const navigationMenu = tv({ extend: tv(theme), ...((_a = appConfigNavigationMenu.ui) == null ? void 0 : _a.navigationMenu) || {} });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: {},
    trailingIcon: {},
    externalIcon: { type: [Boolean, String], default: true },
    items: {},
    color: {},
    variant: {},
    orientation: { default: "horizontal" },
    collapsed: { type: Boolean },
    highlight: { type: Boolean },
    highlightColor: {},
    content: {},
    contentOrientation: { default: "horizontal" },
    arrow: { type: Boolean },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    modelValue: {},
    defaultValue: {},
    delayDuration: { default: 0 },
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    skipDelayDuration: {},
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const contentProps = toRef(() => props.content);
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => navigationMenu({
      orientation: props.orientation,
      contentOrientation: props.contentOrientation,
      collapsed: props.collapsed,
      color: props.color,
      variant: props.variant,
      highlight: props.highlight,
      highlightColor: props.highlightColor || props.color
    }));
    const lists = computed(
      () => {
        var _a2;
        return ((_a2 = props.items) == null ? void 0 : _a2.length) ? isArrayOfArray(props.items) ? props.items : [props.items] : [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a3, _b, _c, _d, _e;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a4, _b2, _c2;
                if (item.avatar) {
                  _push2(ssrRenderComponent(__nuxt_component_1, mergeProps({
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && _ctx.externalIcon !== false) {
                  _push2(ssrRenderComponent(UIcon, {
                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                    class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index
                }, () => {
                  var _a4, _b2, _c2, _d2, _e2, _f;
                  if (item.badge) {
                    _push2(ssrRenderComponent(UBadge, mergeProps({
                      color: "neutral",
                      variant: "outline",
                      size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                    }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                      class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (_ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length)) {
                    _push2(ssrRenderComponent(UIcon, {
                      name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else if (item.trailingIcon) {
                    _push2(ssrRenderComponent(UIcon, {
                      name: item.trailingIcon,
                      class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a3, _b, _c, _d, _e;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a4, _b2, _c2;
                    return [
                      item.avatar ? (openBlock(), createBlock(__nuxt_component_1, mergeProps({
                        key: 0,
                        size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLeadingAvatar, active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(UIcon, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: (_c2 = props.ui) == null ? void 0 : _c2.linkLeadingIcon, active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                      key: 0,
                      name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                      class: ui.value.linkLabelExternalIcon({ class: (_b = props.ui) == null ? void 0 : _b.linkLabelExternalIcon, active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c = item.children) == null ? void 0 : _c.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a4, _b2, _c2, _d2, _e2, _f;
                      return [
                        item.badge ? (openBlock(), createBlock(UBadge, mergeProps({
                          key: 0,
                          color: "neutral",
                          variant: "outline",
                          size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                        }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                          class: ui.value.linkTrailingBadge({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkTrailingBadge })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                        _ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) ? (openBlock(), createBlock(UIcon, {
                          key: 1,
                          name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                          class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(UIcon, {
                          key: 2,
                          name: item.trailingIcon,
                          class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_a3 = item.children) == null ? void 0 : _a3.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || String(index),
              "default-open": item.defaultOpen,
              "unmount-on-hide": _ctx.orientation === "vertical" && ((_b = item.children) == null ? void 0 : _b.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
              open: item.open
            }, createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a4, _b2, _c2, _d2;
                if (_push3) {
                  if (_ctx.orientation === "vertical" && item.type === "label") {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(ULink, mergeProps(_ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a5, _b3, _c3, _d3, _e2, _f2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              var _a6, _b4;
                              if (_push5) {
                                _push5(ssrRenderComponent(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_b4 = props.ui) == null ? void 0 : _b4.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (_ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active,
                                    index
                                  }, () => {
                                    var _a6;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                var _a8, _b4;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a9, _b5, _c4, _d4, _e3, _f3, _g, _h, _i, _j;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(UIcon, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && _ctx.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(UIcon, {
                                                            name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_f3 = props.ui) == null ? void 0 : _f3.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_g = props.ui) == null ? void 0 : _g.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_h = props.ui) == null ? void 0 : _h.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_i = props.ui) == null ? void 0 : _i.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_j = props.ui) == null ? void 0 : _j.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_b4 = props.ui) == null ? void 0 : _b4.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b5, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active,
                                      index
                                    }, () => {
                                      var _a6;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a7;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                            }, [
                                              createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a9, _b4, _c4, _d4, _e3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                    key: 0,
                                                                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_d3 = item.children) == null ? void 0 : _d3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            _ctx.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: (_f2 = props.ui) == null ? void 0 : _f2.content })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active,
                                  index
                                }, () => {
                                  var _a6;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a7;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                        }, [
                                          createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b4, _c4, _d4, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_c2 = props.ui) == null ? void 0 : _c2.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b3, _c3;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b4, _c4, _d3, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d3 = props.ui) == null ? void 0 : _d3.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.orientation === "vertical" && ((_c = item.children) == null ? void 0 : _c.length) && !_ctx.collapsed ? {
                name: "content",
                fn: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a4, _b2;
                  if (_push3) {
                    _push3(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.children, (childItem, childIndex) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_b2 = props.ui) == null ? void 0 : _b2.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ])), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_d = item.children) == null ? void 0 : _d.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || String(index),
                "default-open": item.defaultOpen,
                "unmount-on-hide": _ctx.orientation === "vertical" && ((_e = item.children) == null ? void 0 : _e.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
                open: item.open
              }, createSlots({
                default: withCtx(() => {
                  var _a4, _b2;
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b3, _c2;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b3 = item.children) == null ? void 0 : _b3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c2 = props.ui) == null ? void 0 : _c2.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b4, _c3, _d2, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(UIcon, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b4 = props.ui) == null ? void 0 : _b4.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c3 = props.ui) == null ? void 0 : _c3.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(UIcon, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d2 = props.ui) == null ? void 0 : _d2.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                _ctx.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) && !_ctx.collapsed ? {
                  name: "content",
                  fn: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["value", "default-open", "unmount-on-hide", "open"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(rootProps), {
        "data-collapsed": _ctx.collapsed,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a4, _b2;
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(NavigationMenuList), {
                class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (_ctx.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            if (_ctx.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.viewportWrapper }))}"${_scopeId}>`);
              if (_ctx.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b = props.ui) == null ? void 0 : _b.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b2;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b2 = props.ui) == null ? void 0 : _b2.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c = props.ui) == null ? void 0 : _c.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a4, _b2;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  createVNode(unref(NavigationMenuList), {
                    class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  _ctx.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b2 = props.ui) == null ? void 0 : _b2.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              _ctx.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d = props.ui) == null ? void 0 : _d.viewportWrapper })
              }, [
                _ctx.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "UNavigationMenu" });

const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        label: "دسته‌بندی محصولات",
        icon: "i-lucide-layers",
        to: "/categories",
        children: [
          {
            label: "قطعات الکترونیکی",
            description: "انواع قطعات و کامپوننت‌های الکترونیکی",
            icon: "i-lucide-cpu"
          },
          {
            label: "ابزار و تجهیزات",
            description: "ابزارهای تخصصی تعمیرات و مونتاژ",
            icon: "i-lucide-wrench"
          },
          {
            label: "بردهای توسعه",
            description: "انواع آردوینو، رزبری‌پای و بردهای توسعه",
            icon: "i-lucide-circuit-board"
          },
          {
            label: "سنسورها و ماژول‌ها",
            description: "تجهیزات اندازه‌گیری و کنترل",
            icon: "i-lucide-radio-tower"
          },
          {
            label: "لوازم جانبی",
            description: "کابل، کانکتور و سایر لوازم جانبی",
            icon: "i-lucide-plug"
          }
        ]
      },
      {
        label: "تخفیفات",
        icon: "i-lucide-percent",
        to: "/discounts"
      },
      {
        label: "پیشنهاد ویژه",
        icon: "i-lucide-gift",
        to: "/special-offers"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UInput = __nuxt_component_2$1;
      const _component_UButton = __nuxt_component_3$1;
      const _component_UDivider = resolveComponent("UDivider");
      const _component_UNavigationMenu = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "border-b min-h-[174px] px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col md:flex-row justify-between gap-4 py-4"${_scopeId}><div class="flex items-center justify-center md:justify-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "logo.svg",
              alt: "logo",
              class: "w-[60px] md:w-[81px] ml-2"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="text-secondary-300 leading-6 font-bold text-xl md:text-2xl lg:text-4xl"${_scopeId}>محمد</p><span class="text-sm md:text-base"${_scopeId}>الکترونیک</span></div></div><div class="flex gap-2 w-full md:w-auto order-3 md:order-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              placeholder: "جستجو",
              icon: "i-heroicons-magnifying-glass",
              class: "w-full md:w-[300px] lg:w-[500px]",
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="hidden md:block md:space-y-4 w-full md:w-auto order-2 md:order-3"${_scopeId}><div class="flex md:hidden items-center justify-end gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              icon: "i-lucide-shopping-cart",
              class: "size-8 md:size-10"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "i-lucide-log-in",
              size: "sm",
              class: "text-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ورود `);
                } else {
                  return [
                    createTextVNode(" ورود ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden md:flex items-center justify-between gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              icon: "i-lucide-log-in",
              size: "lg",
              class: "text-sm md:text-base"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ورود / ثبت نام `);
                } else {
                  return [
                    createTextVNode(" ورود / ثبت نام ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UDivider, { vertical: "" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              variant: "ghost",
              icon: "i-lucide-shopping-cart",
              class: "size-10"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-between text-xs sm:text-sm md:text-base"${_scopeId}><p${_scopeId}>پشتیبانی</p><p class="text-secondary"${_scopeId}>۰۳۱-۳۲۳۷۲۷۶۷</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col md:flex-row justify-between gap-4 py-4" }, [
                createVNode("div", { class: "flex items-center justify-center md:justify-start" }, [
                  createVNode(_component_NuxtImg, {
                    src: "logo.svg",
                    alt: "logo",
                    class: "w-[60px] md:w-[81px] ml-2"
                  }),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-secondary-300 leading-6 font-bold text-xl md:text-2xl lg:text-4xl" }, "محمد"),
                    createVNode("span", { class: "text-sm md:text-base" }, "الکترونیک")
                  ])
                ]),
                createVNode("div", { class: "flex gap-2 w-full md:w-auto order-3 md:order-2" }, [
                  createVNode(_component_UInput, {
                    placeholder: "جستجو",
                    icon: "i-heroicons-magnifying-glass",
                    class: "w-full md:w-[300px] lg:w-[500px]",
                    size: "lg"
                  })
                ]),
                createVNode("div", { class: "hidden md:block md:space-y-4 w-full md:w-auto order-2 md:order-3" }, [
                  createVNode("div", { class: "flex md:hidden items-center justify-end gap-4" }, [
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      icon: "i-lucide-shopping-cart",
                      class: "size-8 md:size-10"
                    }),
                    createVNode(_component_UButton, {
                      color: "primary",
                      icon: "i-lucide-log-in",
                      size: "sm",
                      class: "text-sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ورود ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "hidden md:flex items-center justify-between gap-4" }, [
                    createVNode(_component_UButton, {
                      color: "primary",
                      icon: "i-lucide-log-in",
                      size: "lg",
                      class: "text-sm md:text-base"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" ورود / ثبت نام ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UDivider, { vertical: "" }),
                    createVNode(_component_UButton, {
                      variant: "ghost",
                      icon: "i-lucide-shopping-cart",
                      class: "size-10"
                    })
                  ]),
                  createVNode("div", { class: "flex justify-between text-xs sm:text-sm md:text-base" }, [
                    createVNode("p", null, "پشتیبانی"),
                    createVNode("p", { class: "text-secondary" }, "۰۳۱-۳۲۳۷۲۷۶۷")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="mt-3">`);
      _push(ssrRenderComponent(_component_UNavigationMenu, {
        items: unref(items),
        class: "w-full"
      }, null, _parent));
      _push(`</nav></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const subscribeNewsletter = () => {
      console.log("Subscribing email:", email.value);
      email.value = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_Icon = __nuxt_component_2$2;
      const _component_NuxtImg = __nuxt_component_3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))}><div class="bg-[#1F032F]">`);
      _push(ssrRenderComponent(_component_UContainer, { class: "mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center gap-2 w-full md:w-auto"${_scopeId}><p class="text-white w-full md:w-[400px] text-center"${_scopeId}>برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد نمایید</p><form class="flex gap-2 items-center w-full md:w-auto"${_scopeId}><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="ایمیل شما" class="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none w-full md:w-96"${_scopeId}><button type="submit" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md transition duration-300 whitespace-nowrap"${_scopeId}> ثبت </button></form></div><div class="flex flex-col items-center space-x-2 rtl:space-x-reverse"${_scopeId}><h3 class="text-white mb-2"${_scopeId}>شبکه های اجتماعی</h3><div class="flex space-x-2 rtl:space-x-reverse"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://twitter.com",
              class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Twitter), { class: "size-5 text-white" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Twitter), { class: "size-5 text-white" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://instagram.com",
              class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Instagram), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Instagram))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://telegram.org",
              class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Send), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Send))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center gap-2 w-full md:w-auto" }, [
                createVNode("p", { class: "text-white w-full md:w-[400px] text-center" }, "برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد نمایید"),
                createVNode("form", {
                  class: "flex gap-2 items-center w-full md:w-auto",
                  onSubmit: withModifiers(subscribeNewsletter, ["prevent"])
                }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                    type: "email",
                    placeholder: "ایمیل شما",
                    class: "px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none w-full md:w-96"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(email)]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    class: "px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md transition duration-300 whitespace-nowrap"
                  }, " ثبت ")
                ], 32)
              ]),
              createVNode("div", { class: "flex flex-col items-center space-x-2 rtl:space-x-reverse" }, [
                createVNode("h3", { class: "text-white mb-2" }, "شبکه های اجتماعی"),
                createVNode("div", { class: "flex space-x-2 rtl:space-x-reverse" }, [
                  createVNode(_component_NuxtLink, {
                    to: "https://twitter.com",
                    class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Twitter), { class: "size-5 text-white" })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://instagram.com",
                    class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Instagram))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtLink, {
                    to: "https://telegram.org",
                    class: "bg-gray-700 p-2 rounded-md hover:bg-gray-600"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Send))
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white text-gray-800 flex items-center justify-center min-h-[400px]">`);
      _push(ssrRenderComponent(_component_UContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 items-start gap-8"${_scopeId}><div class="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right"${_scopeId}><div${_scopeId}><h3 class="text-xl lg:text-2xl font-bold mb-4 text-secondary"${_scopeId}>خدمات</h3><ul class="space-y-4 lg:space-y-8"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/services/price",
              class: "text-secondary hover:text-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` قیمت آی سی `);
                } else {
                  return [
                    createTextVNode(" قیمت آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/services/selection",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` انتخاب هوشمند آی سی `);
                } else {
                  return [
                    createTextVNode(" انتخاب هوشمند آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/services/selection",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` انتخاب هوشمند آی سی `);
                } else {
                  return [
                    createTextVNode(" انتخاب هوشمند آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/services/selection",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` انتخاب هوشمند آی سی `);
                } else {
                  return [
                    createTextVNode(" انتخاب هوشمند آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><div${_scopeId}><h3 class="text-xl lg:text-2xl font-bold mb-4 text-secondary"${_scopeId}>خرید آی سی</h3><ul class="space-y-4 lg:space-y-8"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/ic/price",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` قیمت آی سی `);
                } else {
                  return [
                    createTextVNode(" قیمت آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/ic/price",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` قیمت آی سی `);
                } else {
                  return [
                    createTextVNode(" قیمت آی سی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/ic/warranty",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` گارانتی `);
                } else {
                  return [
                    createTextVNode(" گارانتی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/ic/installment",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` خرید اقساطی `);
                } else {
                  return [
                    createTextVNode(" خرید اقساطی ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><div${_scopeId}><h3 class="text-xl lg:text-2xl font-bold mb-4 text-secondary"${_scopeId}>فروشگاه اینترنتی</h3><ul class="space-y-4 lg:space-y-8"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/store/about",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` درباره ما `);
                } else {
                  return [
                    createTextVNode(" درباره ما ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/store/contact",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` تماس با ما `);
                } else {
                  return [
                    createTextVNode(" تماس با ما ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/store/terms",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` شرایط و قوانین `);
                } else {
                  return [
                    createTextVNode(" شرایط و قوانین ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/store/comments",
              class: "text-secondary hover:text-purple-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` نظرات کاربران `);
                } else {
                  return [
                    createTextVNode(" نظرات کاربران ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><div${_scopeId}><h3 class="text-xl lg:text-2xl font-bold mb-4 text-secondary"${_scopeId}>پشتیبانی</h3><p class="text-secondary mb-4 lg:mb-8"${_scopeId}>شنبه تا پنجشنبه ۹ الی ۱۸:۳۰</p><div class="mb-4 lg:mb-8"${_scopeId}><a href="mailto:Merqc.Shop@Gmail.Com" class="text-secondary hover:text-purple-600 flex items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:mail",
              class: "text-purple-600"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm lg:text-base"${_scopeId}>Merqc.Shop@Gmail.Com</span></a></div><div class="mb-4 lg:mb-8"${_scopeId}><a href="tel:+989123456789" class="text-secondary hover:text-purple-600 flex items-center justify-center gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:phone",
              class: "text-purple-600"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-sm lg:text-base"${_scopeId}>تلفن امور مشتریان: ۰۹۱۲۳۴۵۶۷۸۹</span></a></div></div></div><div class="col-span-1 md:col-span-2 lg:col-span-3"${_scopeId}><div class="flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "logo.svg",
              alt: "logo",
              class: "w-16 md:w-auto"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="text-primary font-bold text-2xl md:text-4xl"${_scopeId}>محمد</p><span${_scopeId}>الکترونیک</span></div></div><div class=""${_scopeId}><h4 class="text-lg font-bold mt-4 mb-2 text-secondary text-center lg:text-right"${_scopeId}>آدرس فروشگاه</h4><p class="text-secondary text-center lg:text-right"${_scopeId}> اصفهان، خیابان هاتف، بازار بزرگ، پاساژ صنف الکترونیک، مجتمع الکترونیک </p><div class="flex justify-center items-center mt-8 space-x-4 rtl:space-x-reverse"${_scopeId}><div class="bg-gray-100 p-2 rounded-lg"${_scopeId}><img${ssrRenderAttr("src", "")} alt="E-Namad" class="h-8 w-auto"${_scopeId}></div><div class="bg-gray-100 p-2 rounded-lg"${_scopeId}><img${ssrRenderAttr("src", "")} alt="Samandehi" class="h-8 w-auto"${_scopeId}></div><div class="bg-gray-100 p-2 rounded-lg"${_scopeId}><img${ssrRenderAttr("src", "")} alt="Electronic Union" class="h-8 w-auto"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 items-start gap-8" }, [
                createVNode("div", { class: "col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-xl lg:text-2xl font-bold mb-4 text-secondary" }, "خدمات"),
                    createVNode("ul", { class: "space-y-4 lg:space-y-8" }, [
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/services/price",
                          class: "text-secondary hover:text-secondary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" قیمت آی سی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/services/selection",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" انتخاب هوشمند آی سی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/services/selection",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" انتخاب هوشمند آی سی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/services/selection",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" انتخاب هوشمند آی سی ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-xl lg:text-2xl font-bold mb-4 text-secondary" }, "خرید آی سی"),
                    createVNode("ul", { class: "space-y-4 lg:space-y-8" }, [
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/ic/price",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" قیمت آی سی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/ic/price",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" قیمت آی سی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/ic/warranty",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" گارانتی ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/ic/installment",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" خرید اقساطی ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-xl lg:text-2xl font-bold mb-4 text-secondary" }, "فروشگاه اینترنتی"),
                    createVNode("ul", { class: "space-y-4 lg:space-y-8" }, [
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/store/about",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" درباره ما ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/store/contact",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" تماس با ما ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/store/terms",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" شرایط و قوانین ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("li", null, [
                        createVNode(_component_NuxtLink, {
                          to: "/store/comments",
                          class: "text-secondary hover:text-purple-600"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" نظرات کاربران ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-xl lg:text-2xl font-bold mb-4 text-secondary" }, "پشتیبانی"),
                    createVNode("p", { class: "text-secondary mb-4 lg:mb-8" }, "شنبه تا پنجشنبه ۹ الی ۱۸:۳۰"),
                    createVNode("div", { class: "mb-4 lg:mb-8" }, [
                      createVNode("a", {
                        href: "mailto:Merqc.Shop@Gmail.Com",
                        class: "text-secondary hover:text-purple-600 flex items-center justify-center gap-2"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:mail",
                          class: "text-purple-600"
                        }),
                        createVNode("span", { class: "text-sm lg:text-base" }, "Merqc.Shop@Gmail.Com")
                      ])
                    ]),
                    createVNode("div", { class: "mb-4 lg:mb-8" }, [
                      createVNode("a", {
                        href: "tel:+989123456789",
                        class: "text-secondary hover:text-purple-600 flex items-center justify-center gap-2"
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:phone",
                          class: "text-purple-600"
                        }),
                        createVNode("span", { class: "text-sm lg:text-base" }, "تلفن امور مشتریان: ۰۹۱۲۳۴۵۶۷۸۹")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-span-1 md:col-span-2 lg:col-span-3" }, [
                  createVNode("div", { class: "flex items-center justify-center" }, [
                    createVNode(_component_NuxtImg, {
                      src: "logo.svg",
                      alt: "logo",
                      class: "w-16 md:w-auto"
                    }),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-primary font-bold text-2xl md:text-4xl" }, "محمد"),
                      createVNode("span", null, "الکترونیک")
                    ])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode("h4", { class: "text-lg font-bold mt-4 mb-2 text-secondary text-center lg:text-right" }, "آدرس فروشگاه"),
                    createVNode("p", { class: "text-secondary text-center lg:text-right" }, " اصفهان، خیابان هاتف، بازار بزرگ، پاساژ صنف الکترونیک، مجتمع الکترونیک "),
                    createVNode("div", { class: "flex justify-center items-center mt-8 space-x-4 rtl:space-x-reverse" }, [
                      createVNode("div", { class: "bg-gray-100 p-2 rounded-lg" }, [
                        createVNode("img", {
                          src: "",
                          alt: "E-Namad",
                          class: "h-8 w-auto"
                        })
                      ]),
                      createVNode("div", { class: "bg-gray-100 p-2 rounded-lg" }, [
                        createVNode("img", {
                          src: "",
                          alt: "Samandehi",
                          class: "h-8 w-auto"
                        })
                      ]),
                      createVNode("div", { class: "bg-gray-100 p-2 rounded-lg" }, [
                        createVNode("img", {
                          src: "",
                          alt: "Electronic Union",
                          class: "h-8 w-auto"
                        })
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-primary-800 py-4 text-center"><p class="text-gray-300 text-sm md:text-base"> تمامی حقوق محفوظ و متعلق به این سایت محفوظ می‌باشد © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</p></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main$1 as a, _sfc_main as b, __nuxt_component_2 as c };
//# sourceMappingURL=Footer.vue.mjs.map
