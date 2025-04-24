import { _ as __nuxt_component_1 } from './server.mjs';
import { ref, reactive, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useVuelidate } from '@vuelidate/core';
import { minLength, required, email } from '@vuelidate/validators';
import { defineStore } from 'pinia';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
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

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    async login(credentials) {
    }
  }
});

const _sfc_main$1 = {
  __name: "AuthLoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const loading = ref(false);
    const form = reactive({
      email: "",
      password: ""
    });
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    };
    const v$ = useVuelidate(rules, form);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "login-form" }, _attrs))} data-v-82b8863b><div class="form-group" data-v-82b8863b><label for="email" data-v-82b8863b>Email</label><input class="input"${ssrRenderAttr("value", form.email)} type="email" id="email" required data-v-82b8863b>`);
      if (unref(v$).email.$error) {
        _push(`<span class="error" data-v-82b8863b>${ssrInterpolate(unref(v$).email.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-82b8863b><label for="password" data-v-82b8863b>Password</label><input class="input"${ssrRenderAttr("value", form.password)} type="password" id="password" required minlength="6" data-v-82b8863b>`);
      if (unref(v$).password.$error) {
        _push(`<span class="error" data-v-82b8863b>${ssrInterpolate(unref(v$).password.$errors[0].$message)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} data-v-82b8863b>${ssrInterpolate(unref(loading) ? "Logging in..." : "Login")}</button><div class="form-footer" data-v-82b8863b>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/register" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create account`);
          } else {
            return [
              createTextVNode("Create account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/auth/forgot-password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Forgot password?`);
          } else {
            return [
              createTextVNode("Forgot password?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/auth/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-82b8863b"]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AuthLoginForm = __nuxt_component_0;
  _push(ssrRenderComponent(_component_AuthLoginForm, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login.vue.mjs.map
