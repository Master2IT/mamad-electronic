import { _ as __nuxt_component_0$1 } from './nuxt-layout.mjs';
import { _ as __nuxt_component_1$3 } from './Icon.vue.mjs';
import { a as __nuxt_component_3, b as useAppConfig, c as useLocale, t as tv, d as __nuxt_component_3$1, e as _appConfig, f as buttonGroupInjectionKey, _ as __nuxt_component_1$2, U as UIcon, g as get } from './server.mjs';
import { mergeProps, useSSRContext, defineComponent, computed, watch, ref, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, renderSlot, provide, toDisplayString, createTextVNode, useSlots } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import useEmblaCarousel from 'embla-carousel-vue';
import { useForwardProps, Primitive, useForwardPropsEmits, AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui';
import { reactivePick, computedAsync } from '@vueuse/core';
import { P as PRODUCTS, _ as _sfc_main$d, C as CATEGORIES, B as BRANDS, F as FAQS, A as ARTICLES } from './index.mjs';
import { ChevronLeft } from 'lucide-vue-next';
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

const _sfc_main$c = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-8 md:gap-3 mt-5 h-auto md:h-[410px]" }, _attrs))}><div class="col-span-1 md:col-span-6">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "w-full h-[200px] md:h-[410px] rounded-md object-cover",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K3aqrxZ6ZRGdF1udMU_w9gHaEJ%26pid%3DApi&f=1&ipt=32ef0b7bdd8652ef9ec3454de585bd08d44f76d3f1e4f547b33350a27e22c221&ipo=images",
    alt: ""
  }, null, _parent));
  _push(`</div><div class="col-span-2 md:flex-col gap-4 mt-0 hidden md:flex">`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "h-[150px] md:h-[197px] w-full rounded-md object-cover",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images",
    alt: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtImg, {
    class: "h-[150px] md:h-[197px] w-full rounded-md object-cover",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images",
    alt: ""
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/Slider.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender]]), { __name: "ShopSlider" });

const theme$2 = {
  "slots": {
    "root": "relative focus:outline-none",
    "viewport": "overflow-hidden",
    "container": "flex items-start",
    "item": "min-w-0 shrink-0 basis-full",
    "controls": "",
    "arrows": "",
    "prev": "absolute rounded-full",
    "next": "absolute rounded-full",
    "dots": "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    "dot": [
      "cursor-pointer size-3 bg-(--ui-border-accented) rounded-full",
      "transition"
    ]
  },
  "variants": {
    "orientation": {
      "vertical": {
        "container": "flex-col -mt-4",
        "item": "pt-4",
        "prev": "-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90",
        "next": "-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90"
      },
      "horizontal": {
        "container": "flex-row -ms-4",
        "item": "ps-4",
        "prev": "-start-12 top-1/2 -translate-y-1/2",
        "next": "-end-12 top-1/2 -translate-y-1/2"
      }
    },
    "active": {
      "true": {
        "dot": "bg-(--ui-border-inverted)"
      }
    }
  }
};

var _a$2;
const appConfigCarousel = _appConfig;
const carousel = tv({ extend: tv(theme$2), ...((_a$2 = appConfigCarousel.ui) == null ? void 0 : _a$2.carousel) || {} });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    as: {},
    prev: {},
    prevIcon: {},
    next: {},
    nextIcon: {},
    arrows: { type: Boolean, default: false },
    dots: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    items: {},
    autoplay: { type: [Boolean, Object], default: false },
    autoScroll: { type: [Boolean, Object], default: false },
    autoHeight: { type: [Boolean, Object], default: false },
    classNames: { type: [Boolean, Object], default: false },
    fade: { type: [Boolean, Object], default: false },
    wheelGestures: { type: Boolean, default: false },
    class: {},
    ui: {},
    align: { type: [String, Function], default: "center" },
    containScroll: { type: [Boolean, String], default: "trimSnaps" },
    slidesToScroll: { default: 1 },
    dragFree: { type: Boolean, default: false },
    dragThreshold: { default: 10 },
    inViewThreshold: { default: 0 },
    loop: { type: Boolean, default: false },
    skipSnaps: { type: Boolean, default: false },
    duration: { default: 25 },
    startIndex: { default: 0 },
    watchDrag: { type: [Boolean, Function], default: true },
    watchResize: { type: [Boolean, Function], default: true },
    watchSlides: { type: [Boolean, Function], default: true },
    watchFocus: { type: [Boolean, Function], default: true },
    active: { type: Boolean, default: true },
    breakpoints: { default: () => ({}) }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const appConfig = useAppConfig();
    const { dir, t } = useLocale();
    const rootProps = useForwardProps(reactivePick(props, "active", "align", "breakpoints", "containScroll", "dragFree", "dragThreshold", "duration", "inViewThreshold", "loop", "skipSnaps", "slidesToScroll", "startIndex", "watchDrag", "watchResize", "watchSlides", "watchFocus"));
    const prevIcon = computed(() => props.prevIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowRight : appConfig.ui.icons.arrowLeft));
    const nextIcon = computed(() => props.nextIcon || (dir.value === "rtl" ? appConfig.ui.icons.arrowLeft : appConfig.ui.icons.arrowRight));
    const ui = computed(() => carousel({
      orientation: props.orientation
    }));
    const options = computed(() => ({
      ...props.fade ? { align: "center", containScroll: false } : {},
      ...rootProps.value,
      axis: props.orientation === "horizontal" ? "x" : "y",
      direction: dir.value === "rtl" ? "rtl" : "ltr"
    }));
    const plugins = computedAsync(async () => {
      const plugins2 = [];
      if (props.autoplay) {
        const AutoplayPlugin = await import('embla-carousel-autoplay').then((r) => r.default);
        plugins2.push(AutoplayPlugin(typeof props.autoplay === "boolean" ? {} : props.autoplay));
      }
      if (props.autoScroll) {
        const AutoScrollPlugin = await import('embla-carousel-auto-scroll').then((r) => r.default);
        plugins2.push(AutoScrollPlugin(typeof props.autoScroll === "boolean" ? {} : props.autoScroll));
      }
      if (props.autoHeight) {
        const AutoHeightPlugin = await import('embla-carousel-auto-height').then((r) => r.default);
        plugins2.push(AutoHeightPlugin(typeof props.autoHeight === "boolean" ? {} : props.autoHeight));
      }
      if (props.classNames) {
        const ClassNamesPlugin = await import('embla-carousel-class-names').then((r) => r.default);
        plugins2.push(ClassNamesPlugin(typeof props.classNames === "boolean" ? {} : props.classNames));
      }
      if (props.fade) {
        const FadePlugin = await import('embla-carousel-fade').then((r) => r.default);
        plugins2.push(FadePlugin(typeof props.fade === "boolean" ? {} : props.fade));
      }
      if (props.wheelGestures) {
        const { WheelGesturesPlugin } = await import('embla-carousel-wheel-gestures');
        plugins2.push(WheelGesturesPlugin(typeof props.wheelGestures === "boolean" ? {} : props.wheelGestures));
      }
      return plugins2;
    });
    const [emblaRef, emblaApi] = useEmblaCarousel(options.value, plugins.value);
    watch([options, plugins], () => {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.reInit(options.value, plugins.value);
    });
    function scrollPrev() {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollPrev();
    }
    function scrollNext() {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollNext();
    }
    function scrollTo(index) {
      var _a2;
      (_a2 = emblaApi.value) == null ? void 0 : _a2.scrollTo(index);
    }
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    const selectedIndex = ref(0);
    const scrollSnaps = ref([]);
    __expose({
      emblaRef,
      emblaApi
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0",
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] }),
        onKeydown: onKeyDown
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(ui.value.viewport({ class: (_a3 = props.ui) == null ? void 0 : _a3.viewport }))}"${_scopeId}><div class="${ssrRenderClass(ui.value.container({ class: (_b = props.ui) == null ? void 0 : _b.container }))}"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.items, (item, index) => {
              var _a4;
              _push2(`<div role="group" aria-roledescription="slide" class="${ssrRenderClass(ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {
                item,
                index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (_ctx.arrows || _ctx.dots) {
              _push2(`<div class="${ssrRenderClass(ui.value.controls({ class: (_c = props.ui) == null ? void 0 : _c.controls }))}"${_scopeId}>`);
              if (_ctx.arrows) {
                _push2(`<div class="${ssrRenderClass(ui.value.arrows({ class: (_d = props.ui) == null ? void 0 : _d.arrows }))}"${_scopeId}>`);
                _push2(ssrRenderComponent(__nuxt_component_3$1, mergeProps({
                  disabled: !canScrollPrev.value,
                  icon: prevIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.prev")
                }, typeof _ctx.prev === "object" ? _ctx.prev : void 0, {
                  class: ui.value.prev({ class: (_e = props.ui) == null ? void 0 : _e.prev }),
                  onClick: scrollPrev
                }), null, _parent2, _scopeId));
                _push2(ssrRenderComponent(__nuxt_component_3$1, mergeProps({
                  disabled: !canScrollNext.value,
                  icon: nextIcon.value,
                  size: "md",
                  color: "neutral",
                  variant: "outline",
                  "aria-label": unref(t)("carousel.next")
                }, typeof _ctx.next === "object" ? _ctx.next : void 0, {
                  class: ui.value.next({ class: (_f = props.ui) == null ? void 0 : _f.next }),
                  onClick: scrollNext
                }), null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.dots) {
                _push2(`<div class="${ssrRenderClass(ui.value.dots({ class: (_g = props.ui) == null ? void 0 : _g.dots }))}"${_scopeId}><!--[-->`);
                ssrRenderList(scrollSnaps.value, (_2, index) => {
                  var _a4;
                  _push2(`<button${ssrRenderAttr("aria-label", unref(t)("carousel.goto", { slide: index + 1 }))} class="${ssrRenderClass(ui.value.dot({ class: (_a4 = props.ui) == null ? void 0 : _a4.dot, active: selectedIndex.value === index }))}"${_scopeId}></button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                ref_key: "emblaRef",
                ref: emblaRef,
                class: ui.value.viewport({ class: (_h = props.ui) == null ? void 0 : _h.viewport })
              }, [
                createVNode("div", {
                  class: ui.value.container({ class: (_i = props.ui) == null ? void 0 : _i.container })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    var _a4;
                    return openBlock(), createBlock("div", {
                      key: index,
                      role: "group",
                      "aria-roledescription": "slide",
                      class: ui.value.item({ class: (_a4 = props.ui) == null ? void 0 : _a4.item })
                    }, [
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index
                      })
                    ], 2);
                  }), 128))
                ], 2)
              ], 2),
              _ctx.arrows || _ctx.dots ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.controls({ class: (_j = props.ui) == null ? void 0 : _j.controls })
              }, [
                _ctx.arrows ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.arrows({ class: (_k = props.ui) == null ? void 0 : _k.arrows })
                }, [
                  createVNode(__nuxt_component_3$1, mergeProps({
                    disabled: !canScrollPrev.value,
                    icon: prevIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.prev")
                  }, typeof _ctx.prev === "object" ? _ctx.prev : void 0, {
                    class: ui.value.prev({ class: (_l = props.ui) == null ? void 0 : _l.prev }),
                    onClick: scrollPrev
                  }), null, 16, ["disabled", "icon", "aria-label", "class"]),
                  createVNode(__nuxt_component_3$1, mergeProps({
                    disabled: !canScrollNext.value,
                    icon: nextIcon.value,
                    size: "md",
                    color: "neutral",
                    variant: "outline",
                    "aria-label": unref(t)("carousel.next")
                  }, typeof _ctx.next === "object" ? _ctx.next : void 0, {
                    class: ui.value.next({ class: (_m = props.ui) == null ? void 0 : _m.next }),
                    onClick: scrollNext
                  }), null, 16, ["disabled", "icon", "aria-label", "class"])
                ], 2)) : createCommentVNode("", true),
                _ctx.dots ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.dots({ class: (_n = props.ui) == null ? void 0 : _n.dots })
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(scrollSnaps.value, (_2, index) => {
                    var _a4;
                    return openBlock(), createBlock("button", {
                      key: index,
                      "aria-label": unref(t)("carousel.goto", { slide: index + 1 }),
                      class: ui.value.dot({ class: (_a4 = props.ui) == null ? void 0 : _a4.dot, active: selectedIndex.value === index }),
                      onClick: ($event) => scrollTo(index)
                    }, null, 10, ["aria-label", "onClick"]);
                  }), 128))
                ], 2)) : createCommentVNode("", true)
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$b, { __name: "UCarousel" });

const _sfc_main$a = {
  __name: "ShopCategoryCard",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[195px] bg-white shadow-xs flex flex-col items-center justify-center gap-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "w-[100px] h-[100px] object-cover",
        src: __props.image,
        loading: "lazy",
        alt: __props.name
      }, null, _parent));
      _push(`<span class="font-bold text-center text-lg">${ssrInterpolate(__props.name)}</span></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/CategoryCard.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};

const _sfc_main$9 = {
  __name: "ShopCategoriesCard",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UCarousel = __nuxt_component_1$1;
      const _component_ShopCategoryCard = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 h-auto" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        align: "start",
        skipSnaps: "",
        items: __props.items,
        autoHeight: "",
        class: "w-full",
        arrows: "",
        loop: "",
        autoplay: { delay: 2e3 },
        ui: {
          item: "basis-full md:basis-1/6",
          prev: "left-0 right-auto",
          next: "right-0 left-auto"
        }
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ShopCategoryCard, {
              image: item.image,
              name: item.name
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-1" }, [
                createVNode(_component_ShopCategoryCard, {
                  image: item.image,
                  name: item.name
                }, null, 8, ["image", "name"])
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/CategoriesCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const theme$1 = {
  "base": "relative",
  "variants": {
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "orientation": {
      "horizontal": "inline-flex -space-x-px",
      "vertical": "flex flex-col -space-y-px"
    }
  }
};

var _a$1;
const appConfigButtonGroup = _appConfig;
const buttonGroup = tv({ extend: tv(theme$1), ...(_a$1 = appConfigButtonGroup.ui) == null ? void 0 : _a$1.buttonGroup });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ButtonGroup",
  __ssrInlineRender: true,
  props: {
    as: {},
    size: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    provide(buttonGroupInjectionKey, computed(() => ({
      orientation: props.orientation,
      size: props.size
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(buttonGroup)({ orientation: _ctx.orientation, class: props.class })
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

const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$8, { __name: "UButtonGroup" });

const _sfc_main$7 = {
  __name: "ShopAmazingProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref(PRODUCTS);
    const timer = ref({
      hours: "2",
      minutes: "33",
      seconds: "45"
    });
    const times = ref([
      { label: "ساعت", value: timer.value.hours },
      { label: "دقیقه", value: timer.value.minutes },
      { label: "ثانیه", value: timer.value.seconds }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButtonGroup = __nuxt_component_0;
      const _component_UButton = __nuxt_component_3$1;
      const _component_NuxtLink = __nuxt_component_1$2;
      const _component_UCarousel = __nuxt_component_1$1;
      const _component_CommonProductCard = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary-700 rounded-lg p-4 my-6 grid grid-cols-4 gap-2 items-center" }, _attrs))}><div class="flex justify-center items-center gap-10 flex-col relative mt-10 col-span-2 md:col-span-1"><h2 class="text-3xl md:text-4xl text-center text-white mt-5 font-black w-[150px] md:w-[200px] wrap-normal">تخفیف های شگفت انگیز </h2>`);
      _push(ssrRenderComponent(_component_UButtonGroup, { orientation: "horizontal" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(times.value, (time, i) => {
              _push2(ssrRenderComponent(_component_UButton, {
                key: i,
                class: "flex flex-col px-3 md:px-5 bg-white hover:bg-white"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-xl md:text-2xl font-bold text-primary-700 leading-3 mt-2"${_scopeId2}>${ssrInterpolate(time.value)}</p><span class="text-primary-700 text-xs"${_scopeId2}>${ssrInterpolate(time.label)}</span>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-xl md:text-2xl font-bold text-primary-700 leading-3 mt-2" }, toDisplayString(time.value), 1),
                      createVNode("span", { class: "text-primary-700 text-xs" }, toDisplayString(time.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(times.value, (time, i) => {
                return openBlock(), createBlock(_component_UButton, {
                  key: i,
                  class: "flex flex-col px-3 md:px-5 bg-white hover:bg-white"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-xl md:text-2xl font-bold text-primary-700 leading-3 mt-2" }, toDisplayString(time.value), 1),
                    createVNode("span", { class: "text-primary-700 text-xs" }, toDisplayString(time.label), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "#",
        class: "text-white flex gap-1 mt-auto self-start w-full justify-center md:w-auto md:mr-10 items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>مشاهده همه</span>`);
            _push2(ssrRenderComponent(unref(ChevronLeft), { size: 18 }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, "مشاهده همه"),
              createVNode(unref(ChevronLeft), { size: 18 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full col-span-2 md:col-span-3">`);
      _push(ssrRenderComponent(_component_UCarousel, {
        align: "start",
        skipSnaps: "",
        items: products.value,
        autoHeight: "",
        class: "w-full",
        arrows: "",
        loop: "",
        autoplay: { delay: 2e3 },
        ui: { item: "basis-full md:basis-1/5", prev: "left-0 right-auto", next: "right-0 left-auto" }
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommonProductCard, {
              type: 1,
              product: item
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommonProductCard, {
                type: 1,
                product: item
              }, null, 8, ["product"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/AmazingProducts.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = {
  __name: "ShopProductsCategory",
  __ssrInlineRender: true,
  props: {
    products: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3$1;
      const _component_UCarousel = __nuxt_component_1$1;
      const _component_CommonProductCard = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 h-auto" }, _attrs))}><div class="flex items-center justify-between mb-2"><h2 class="text-xl md:text-2xl text-primary-700 font-black">${ssrInterpolate(__props.title)}</h2>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        href: __props.link,
        class: "flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` مشاهده همه `);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" مشاهده همه "),
              createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        align: "start",
        skipSnaps: "",
        items: __props.products,
        autoHeight: "",
        class: "w-full",
        arrows: "",
        loop: "",
        autoplay: { delay: 2e3 },
        ui: { item: "basis-1/2 md:basis-1/6", prev: "left-0 right-auto", next: "right-0 left-auto" }
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonProductCard, {
              showReview: "",
              type: 2,
              product: item
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-1" }, [
                createVNode(_component_CommonProductCard, {
                  showReview: "",
                  type: 2,
                  product: item
                }, null, 8, ["product"])
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ProductsCategory.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const _sfc_main$5 = {
  __name: "ShopBrands",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3$1;
      const _component_UCarousel = __nuxt_component_1$1;
      const _component_NuxtImg = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 h-auto" }, _attrs))}><div class="flex items-center justify-between mb-2"><h2 class="text-xl md:text-2xl text-primary-700 font-black">${ssrInterpolate(__props.title)}</h2>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        href: __props.link,
        class: "flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` مشاهده همه `);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" مشاهده همه "),
              createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCarousel, {
        align: "start",
        skipSnaps: "",
        items: __props.items,
        autoHeight: "",
        class: "w-full",
        arrows: "",
        loop: "",
        autoplay: { delay: 2e3 },
        ui: { item: "basis-1/2 md:basis-1/6", prev: "left-0 right-auto", next: "right-0 left-auto" }
      }, {
        default: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              key: item.id || _ctx.index,
              class: "w-full h-[100px] sm:h-[120px] md:h-[150px] object-contain",
              src: item.image,
              sizes: "sm:50vw md:33vw lg:16.67vw",
              loading: "lazy",
              alt: item.name || "Brand logo"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "py-1" }, [
                (openBlock(), createBlock(_component_NuxtImg, {
                  key: item.id || _ctx.index,
                  class: "w-full h-[100px] sm:h-[120px] md:h-[150px] object-contain",
                  src: item.image,
                  sizes: "sm:50vw md:33vw lg:16.67vw",
                  loading: "lazy",
                  alt: item.name || "Brand logo"
                }, null, 8, ["src", "alt"]))
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/Brands.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};

const theme = {
  "slots": {
    "root": "w-full",
    "item": "border-b border-(--ui-border) last:border-b-0",
    "header": "flex",
    "trigger": "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-(--ui-primary) min-w-0",
    "content": "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
    "body": "text-sm pb-3.5",
    "leadingIcon": "shrink-0 size-5",
    "trailingIcon": "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
    "label": "text-start break-words"
  },
  "variants": {
    "disabled": {
      "true": {
        "trigger": "cursor-not-allowed opacity-75"
      }
    }
  }
};

var _a;
const appConfigAccordion = _appConfig;
const accordion = tv({ extend: tv(theme), ...((_a = appConfigAccordion.ui) == null ? void 0 : _a.accordion) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    as: {},
    items: {},
    trailingIcon: {},
    labelKey: { default: "label" },
    class: {},
    ui: {},
    collapsible: { type: Boolean, default: true },
    defaultValue: {},
    modelValue: {},
    type: { default: "single" },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "collapsible", "defaultValue", "disabled", "modelValue", "type", "unmountOnHide"), emits);
    const ui = computed(() => accordion({
      disabled: props.disabled
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(rootProps), {
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(props.items, (item, index) => {
              var _a3;
              _push2(ssrRenderComponent(unref(AccordionItem), {
                key: index,
                value: item.value || String(index),
                disabled: item.disabled,
                class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item })
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  var _a4, _b, _c, _d;
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AccordionHeader), {
                      class: ui.value.header({ class: (_a4 = props.ui) == null ? void 0 : _a4.header })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        var _a5, _b2;
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AccordionTrigger), {
                            class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger, disabled: item.disabled })
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              var _a6, _b3;
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "leading", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a7;
                                  if (item.icon) {
                                    _push5(ssrRenderComponent(UIcon, {
                                      name: item.icon,
                                      class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                }, _push5, _parent5, _scopeId4);
                                if (unref(get)(item, props.labelKey) || !!slots.default) {
                                  _push5(`<span class="${ssrRenderClass(ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label }))}"${_scopeId4}>`);
                                  ssrRenderSlot(_ctx.$slots, "default", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    _push5(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                  }, _push5, _parent5, _scopeId4);
                                  _push5(`</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                ssrRenderSlot(_ctx.$slots, "trailing", {
                                  item,
                                  index,
                                  open
                                }, () => {
                                  var _a7;
                                  _push5(ssrRenderComponent(UIcon, {
                                    name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                    class: ui.value.trailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.trailingIcon })
                                  }, null, _parent5, _scopeId4));
                                }, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: (_b3 = props.ui) == null ? void 0 : _b3.label })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      createVNode(UIcon, {
                                        name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.trailingIcon })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: (_b2 = props.ui) == null ? void 0 : _b2.trigger, disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      createVNode(UIcon, {
                                        name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.trailingIcon })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`]) {
                      _push3(ssrRenderComponent(unref(AccordionContent), {
                        class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            ssrRenderSlot(_ctx.$slots, item.slot || "content", {
                              item,
                              index,
                              open
                            }, () => {
                              var _a5;
                              _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_a5 = props.ui) == null ? void 0 : _a5.body }))}"${_scopeId3}>`);
                              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                item,
                                index,
                                open
                              }, () => {
                                _push4(`${ssrInterpolate(item.content)}`);
                              }, _push4, _parent4, _scopeId3);
                              _push4(`</div>`);
                            }, _push4, _parent4, _scopeId3);
                          } else {
                            return [
                              renderSlot(_ctx.$slots, item.slot || "content", {
                                item,
                                index,
                                open
                              }, () => {
                                var _a5;
                                return [
                                  createVNode("div", {
                                    class: ui.value.body({ class: (_a5 = props.ui) == null ? void 0 : _a5.body })
                                  }, [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ])
                                  ], 2)
                                ];
                              })
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
                      createVNode(unref(AccordionHeader), {
                        class: ui.value.header({ class: (_c = props.ui) == null ? void 0 : _c.header })
                      }, {
                        default: withCtx(() => {
                          var _a5;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger, disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      createVNode(UIcon, {
                                        name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.trailingIcon })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: (_d = props.ui) == null ? void 0 : _d.content })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a5;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: (_a5 = props.ui) == null ? void 0 : _a5.body })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(props.items, (item, index) => {
                var _a3;
                return openBlock(), createBlock(unref(AccordionItem), {
                  key: index,
                  value: item.value || String(index),
                  disabled: item.disabled,
                  class: ui.value.item({ class: (_a3 = props.ui) == null ? void 0 : _a3.item })
                }, {
                  default: withCtx(({ open }) => {
                    var _a4, _b;
                    return [
                      createVNode(unref(AccordionHeader), {
                        class: ui.value.header({ class: (_a4 = props.ui) == null ? void 0 : _a4.header })
                      }, {
                        default: withCtx(() => {
                          var _a5;
                          return [
                            createVNode(unref(AccordionTrigger), {
                              class: ui.value.trigger({ class: (_a5 = props.ui) == null ? void 0 : _a5.trigger, disabled: item.disabled })
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  renderSlot(_ctx.$slots, "leading", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      item.icon ? (openBlock(), createBlock(UIcon, {
                                        key: 0,
                                        name: item.icon,
                                        class: ui.value.leadingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.leadingIcon })
                                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                    ];
                                  }),
                                  unref(get)(item, props.labelKey) || !!slots.default ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: ui.value.label({ class: (_a6 = props.ui) == null ? void 0 : _a6.label })
                                  }, [
                                    renderSlot(_ctx.$slots, "default", {
                                      item,
                                      index,
                                      open
                                    }, () => [
                                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                    ])
                                  ], 2)) : createCommentVNode("", true),
                                  renderSlot(_ctx.$slots, "trailing", {
                                    item,
                                    index,
                                    open
                                  }, () => {
                                    var _a7;
                                    return [
                                      createVNode(UIcon, {
                                        name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                                        class: ui.value.trailingIcon({ class: (_a7 = props.ui) == null ? void 0 : _a7.trailingIcon })
                                      }, null, 8, ["name", "class"])
                                    ];
                                  })
                                ];
                              }),
                              _: 2
                            }, 1032, ["class"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["class"]),
                      item.content || !!slots.content || item.slot && !!slots[item.slot] || !!slots.body || item.slot && !!slots[`${item.slot}-body`] ? (openBlock(), createBlock(unref(AccordionContent), {
                        key: 0,
                        class: ui.value.content({ class: (_b = props.ui) == null ? void 0 : _b.content })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, item.slot || "content", {
                            item,
                            index,
                            open
                          }, () => {
                            var _a5;
                            return [
                              createVNode("div", {
                                class: ui.value.body({ class: (_a5 = props.ui) == null ? void 0 : _a5.body })
                              }, [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-body` : "body", {
                                  item,
                                  index,
                                  open
                                }, () => [
                                  createTextVNode(toDisplayString(item.content), 1)
                                ])
                              ], 2)
                            ];
                          })
                        ]),
                        _: 2
                      }, 1032, ["class"])) : createCommentVNode("", true)
                    ];
                  }),
                  _: 2
                }, 1032, ["value", "disabled", "class"]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$4, { __name: "UAccordion" });

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3$1;
      const _component_UAccordion = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-10 h-auto" }, _attrs))}><div class="flex items-center justify-between mb-3"><h2 class="text-xl md:text-2xl text-primary-700 font-black">${ssrInterpolate(__props.title)}</h2>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        href: __props.link,
        class: "flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` مشاهده همه `);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" مشاهده همه "),
              createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UAccordion, {
        items: __props.items,
        ui: {
          item: "bg-white rounded-md shadow-xs p-2 px-5 mb-2"
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/FAQ.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$3, { __name: "ShopFAQ" });

const _sfc_main$2 = {
  __name: "ShopArticleCard",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        name: "",
        image: ""
      })
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden" }, _attrs))}><div class="relative">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.article.image,
        alt: __props.article.name,
        class: "w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div></div><div class="p-4"><h3 class="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors duration-300 line-clamp-2">${ssrInterpolate(__props.article.name)}</h3></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/ArticleCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "ShopArticles",
  __ssrInlineRender: true,
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_3$1;
      const _component_ShopArticleCard = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:hidden grid gap-2" }, _attrs))}><div class="my-10 h-auto"><div class="flex items-center justify-between mb-2"><h2 class="text-xl md:text-2xl text-primary-700 font-black">مقالات</h2>`);
      _push(ssrRenderComponent(_component_UButton, {
        variant: "link",
        href: _ctx.link,
        class: "flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` مشاهده همه `);
            _push2(ssrRenderComponent(unref(ChevronLeft), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" مشاهده همه "),
              createVNode(unref(ChevronLeft), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(__props.articles, (article) => {
        _push(ssrRenderComponent(_component_ShopArticleCard, {
          key: article.id,
          article
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shop/Articles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_1$3;
      const _component_ShopSlider = __nuxt_component_2;
      const _component_ShopCategoriesCard = _sfc_main$9;
      const _component_ShopAmazingProducts = _sfc_main$7;
      const _component_ShopProductsCategory = _sfc_main$6;
      const _component_ShopBrands = _sfc_main$5;
      const _component_ShopFAQ = __nuxt_component_7;
      const _component_ShopArticles = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "shop" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopCategoriesCard, { items: unref(CATEGORIES) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopAmazingProducts, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopProductsCategory, {
              link: "#",
              title: "جدید ترین محصولات",
              products: unref(PRODUCTS)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopProductsCategory, {
              link: "#",
              title: "پیشنهادات",
              products: unref(PRODUCTS)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopBrands, {
              link: "#",
              title: "محبوب ترین برند ها",
              items: unref(BRANDS)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopFAQ, {
              link: "#",
              title: "سوالات متداول",
              items: unref(FAQS)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShopArticles, { articles: unref(ARTICLES) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_client_only, null, {
                default: withCtx(() => [
                  createVNode(_component_ShopSlider)
                ]),
                _: 1
              }),
              createVNode(_component_ShopCategoriesCard, { items: unref(CATEGORIES) }, null, 8, ["items"]),
              createVNode(_component_ShopAmazingProducts),
              createVNode(_component_ShopProductsCategory, {
                link: "#",
                title: "جدید ترین محصولات",
                products: unref(PRODUCTS)
              }, null, 8, ["products"]),
              createVNode(_component_ShopProductsCategory, {
                link: "#",
                title: "پیشنهادات",
                products: unref(PRODUCTS)
              }, null, 8, ["products"]),
              createVNode(_component_ShopBrands, {
                link: "#",
                title: "محبوب ترین برند ها",
                items: unref(BRANDS)
              }, null, 8, ["items"]),
              createVNode(_component_ShopFAQ, {
                link: "#",
                title: "سوالات متداول",
                items: unref(FAQS)
              }, null, 8, ["items"]),
              createVNode(_component_ShopArticles, { articles: unref(ARTICLES) }, null, 8, ["articles"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
