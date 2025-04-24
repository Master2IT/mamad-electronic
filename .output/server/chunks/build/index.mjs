import { a as __nuxt_component_3, d as __nuxt_component_3$1 } from './server.mjs';
import { mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Heart } from 'lucide-vue-next';
import { a as __nuxt_component_0 } from './Icon.vue.mjs';

const _sfc_main = {
  __name: "CommonProductCard",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      required: true
    },
    type: {
      type: Number,
      default: 1
    },
    showReview: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_3;
      const _component_UButton = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative rounded-md w-full shadow-sm border-0 bg-[#F7F7F7] select-none" }, _attrs))}><div class="relative p-0 flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: __props.product.image,
        alt: __props.product.name,
        class: "h-[200px] w-[200px] object-contain rounded-md"
      }, null, _parent));
      if (__props.product.discount) {
        _push(`<span class="absolute top-2.5 left-2.5 bg-red-500 rounded-full text-white pt-0.5 px-3 text-xs">${ssrInterpolate(__props.product.discount)}% </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer">`);
      _push(ssrRenderComponent(unref(Heart), {
        class: { "text-red-500": __props.product.favorite, "text-gray-300": !__props.product.favorite },
        size: "24"
      }, null, _parent));
      _push(`</button></div><div class="px-5 pb-2"><h3 class="text-[14px] md:text-md font-semibold text-center line-clamp-1">${ssrInterpolate(__props.product.name)}</h3>`);
      if (__props.showReview) {
        _push(`<div class="flex gap-1 items-center justify-end my-3 text-sm"><span class="text-neutral-400 mt-0.5">(43 نظر)</span><div class="text-yellow-500 flex items-center font-medium"><span class="mt-0.5">4.4</span>`);
        _push(ssrRenderComponent(__nuxt_component_0, {
          name: "medal-star",
          size: "18"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["flex items-end mt-3", { "flex-col": __props.type == 1 }, { "justify-between gap-2": __props.type == 2 }])}"><p class="text-gray-500 hidden md:block text-sm line-through">${ssrInterpolate(Number(__props.product.discountedPrice).toLocaleString("fa-IR"))}</p>`);
      if (__props.product.discount) {
        _push(ssrRenderComponent(_component_UButton, {
          class: "!gap-1",
          size: "sm",
          block: __props.type == 2
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="!font-bold text-[14px]"${_scopeId}>${ssrInterpolate(Number(__props.product.price).toLocaleString("fa-IR"))}</span>تومان `);
            } else {
              return [
                createVNode("span", { class: "!font-bold text-[14px]" }, toDisplayString(Number(__props.product.price).toLocaleString("fa-IR")), 1),
                createTextVNode("تومان ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

const PRODUCTS = [
  {
    id: 1,
    name: "آی سی ATmega328",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    discount: 15,
    price: "2000000",
    discountedPrice: "1700000",
    favorite: false
  },
  {
    id: 2,
    name: "برد آردوینو نانو",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    discount: 20,
    price: "1500000",
    discountedPrice: "1200000",
    favorite: false
  },
  {
    id: 3,
    name: "سنسور دما DHT22",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    discount: 10,
    price: "500000",
    discountedPrice: "450000",
    favorite: false
  },
  {
    id: 4,
    name: "ماژول ESP8266",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    discount: 25,
    price: "800000",
    discountedPrice: "600000",
    favorite: false
  },
  {
    id: 5,
    name: "نمایشگر OLED",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    discount: 15,
    price: "900000",
    discountedPrice: "765000",
    favorite: false
  },
  {
    id: 6,
    name: "موتور سروو MG996R",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    discount: 30,
    price: "450000",
    discountedPrice: "315000",
    favorite: false
  },
  {
    id: 7,
    name: "ماژول رله ۴ کاناله",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    discount: 18,
    price: "350000",
    discountedPrice: "287000",
    favorite: false
  },
  {
    id: 8,
    name: "سنسور تشخیص حرکت PIR",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    discount: 12,
    price: "280000",
    discountedPrice: "246400",
    favorite: false
  },
  {
    id: 9,
    name: "برد رزبری پای ۴",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-05.jpg",
    discount: 8,
    price: "3500000",
    discountedPrice: "3220000",
    favorite: false
  },
  {
    id: 10,
    name: "ماژول بلوتوث HC-05",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg0",
    discount: 22,
    price: "420000",
    discountedPrice: "327600",
    favorite: false
  }
];
const FAQS = [
  {
    id: 1,
    label: "آیا ارسال به تمام نقاط ایران انجام می‌شود؟",
    content: "بله، ما به تمام نقاط ایران با استفاده از پست پیشتاز و تیپاکس ارسال انجام می‌دهیم. هزینه ارسال بر اساس وزن و مقصد محاسبه می‌شود."
  },
  {
    id: 2,
    label: "مدت زمان گارانتی محصولات چقدر است؟",
    content: "تمامی محصولات ما دارای ۶ ماه گارانتی تعویض هستند. برخی از محصولات خاص مانند بردهای آردوینو اصل و رزبری پای دارای ۱۲ ماه گارانتی می‌باشند."
  },
  {
    id: 3,
    label: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    content: "بله، تا ۷ روز پس از دریافت کالا، در صورت عدم استفاده و سالم بودن بسته‌بندی، می‌توانید کالا را مرجوع کنید. هزینه ارسال مرجوعی بر عهده مشتری است."
  },
  {
    id: 4,
    label: "آیا راهنمای استفاده از قطعات را ارائه می‌دهید؟",
    content: "بله، برای اکثر محصولات، دیتاشیت و راهنمای استفاده به صورت PDF در بخش دانلود سایت قرار داده شده است. همچنین برای برخی محصولات، ویدیوهای آموزشی نیز موجود است."
  },
  {
    id: 5,
    label: "آیا امکان خرید عمده وجود دارد؟",
    content: "بله، برای خریدهای بالای ۵ میلیون تومان، تخفیف ویژه در نظر گرفته می‌شود. برای اطلاع از قیمت‌های عمده با بخش فروش تماس بگیرید."
  },
  {
    id: 6,
    label: "روش‌های پرداخت چیست؟",
    content: "پرداخت آنلاین از طریق درگاه بانکی، کارت به کارت و پرداخت در محل (برای تهران) امکان‌پذیر است."
  },
  {
    id: 7,
    label: "آیا قطعات شما اورجینال هستند؟",
    content: "بله، تمامی قطعات ما اصل و با کیفیت هستند. ما تضمین اصالت کالا را به مشتریان خود ارائه می‌دهیم و در صورت مغایرت، کالا را تعویض می‌کنیم."
  },
  {
    id: 8,
    label: "مدت زمان ارسال سفارش چقدر است؟",
    content: "سفارشات در روزهای کاری، در صورت تایید تا ساعت ۱۴، همان روز ارسال می‌شوند. زمان تحویل برای تهران ۱ تا ۲ روز کاری و برای شهرستان‌ها ۲ تا ۴ روز کاری است."
  }
];
const CATEGORIES = [
  {
    id: 1,
    name: "میکروکنترلرها",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 2,
    name: "سنسورها",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 3,
    name: "بردهای توسعه",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 4,
    name: "قطعات الکترونیکی",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 5,
    name: "ماژول‌های ارتباطی",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  },
  {
    id: 6,
    name: "رباتیک و موتورها",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"
  }
];
const BRANDS = [
  {
    id: 1,
    name: "Arduino",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
  },
  {
    id: 2,
    name: "Raspberry Pi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.png"
  },
  {
    id: 3,
    name: "Texas Instruments",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
  },
  {
    id: 4,
    name: "STMicroelectronics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.png"
  },
  {
    id: 5,
    name: "Microchip",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.png"
  },
  {
    id: 6,
    name: "Atmel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.png"
  },
  {
    id: 7,
    name: "Intel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.png"
  },
  {
    id: 8,
    name: "Nvidia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.png"
  },
  {
    id: 9,
    name: "Samsung Electronics",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.png"
  },
  {
    id: 10,
    name: "Qualcomm",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.png"
  }
];
const ARTICLES = [
  {
    id: 1,
    name: "راهنمای جامع برنامه‌نویسی آردوینو برای مبتدیان",
    image: "https://www.digikala.com/mag/wp-content/uploads/2025/04/marinated-fish.jpg"
  },
  {
    id: 2,
    name: "آشنایی با سنسورهای پرکاربرد در پروژه‌های الکترونیکی",
    image: "https://www.digikala.com/mag/wp-content/uploads/2025/04/the-myth.jpg"
  },
  {
    id: 3,
    name: "مقایسه میکروکنترلرهای محبوب در بازار",
    image: "https://www.digikala.com/mag/wp-content/uploads/2025/04/facial-redness-home-remedies-1.jpg"
  },
  {
    id: 4,
    name: "آموزش راه‌اندازی پروژه خانه هوشمند با ESP8266",
    image: "https://www.digikala.com/mag/wp-content/uploads/2025/04/iphone-x-on-black-desk-2.jpg"
  }
];

export { ARTICLES as A, BRANDS as B, CATEGORIES as C, FAQS as F, PRODUCTS as P, _sfc_main as _ };
//# sourceMappingURL=index.mjs.map
