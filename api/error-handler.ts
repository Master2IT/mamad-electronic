export const ERRORS = {
  ORDER_NOT_FOUND: "سفارش پیدا نشد",
  THERE_IS_NO_ONE_TO_CONTINUE_REFUND:
    "هیچ کسی برای ادامه بازپرداخت وجود ندارد",
  YOU_CANT_CREATE_REFUND_FOR_NOT_CANCELED_ORDERS:
    "شما نمی‌توانید برای سفارش‌های لغو نشده درخواست بازپرداخت ایجاد کنید",
  THERE_IS_NO_NEXT_ASSIGNEE_TO_CONTINUE_REFUND:
    "شخص بعدی برای ادامه بازپرداخت وجود ندارد",
  YOUVE_PURCHASED_YOUR_ORDER_WITH_DISCOUNT:
    "شما سفارش خود را با تخفیف خریداری کرده‌اید",
  YOUR_REFUND_FOR_THIS_ORDER_COMPLETED_BEFORE:
    "بازپرداخت شما برای این سفارش قبلاً تکمیل شده است",
  YOUR_REFUND_FOR_THIS_ORDER_REJECTED_BEFORE:
    "بازپرداخت شما برای این سفارش قبلاً رد شده است",
  AMOUNT_IS_HIGHER_THAN_ITEM_PRICE: "مبلغ بیشتر از قیمت کالا است",
  YOU_HAVE_REFUND_FOR_THIS_ORDER_ALREADY:
    "شما قبلاً برای این سفارش درخواست بازپرداخت داده‌اید",
  REFUND_NOT_FOUND: "بازپرداخت پیدا نشد",
  RECEIPT_URL_REQUIRED_IN_LAST_STEP:
    "آدرس رسید در مرحله آخر الزامی است",
  YOU_CANT_DO_THIS_STEP: "شما نمی‌توانید این مرحله را انجام دهید",
  STATUS_OR_RECIEPT_URL_IS_MISSING: "وضعیت یا آدرس رسید موجود نیست",
  YOU_CANT_COMPLETE_REFUND: "شما نمی‌توانید بازپرداخت را تکمیل کنید",
  WRONG_STATUS_FOR_LAST_STEP: "وضعیت نادرست برای مرحله آخر",
  YOU_CANT_CREATE_REFUND_FOR_PENDING_ORDERS:
    'شما نمی‌توانید برای سفارش‌های "در انتظار" درخواست بازپرداخت ایجاد کنید',
  YOU_ARE_NOT_THE_PRODUCT_ASSIGNEE:
    "شما نمی‌توانید این محصول را ویرایش کنید",
  FILE_NOT_FOUND: "فایل یافت نشد",
  ROLE_NOT_FOUND: "نقش یافت نشد",
  OPERATOR_NOT_FOUND: "اپراتور یافت نشد",
  CODE_OR_HASH_NOT_FOUND: "کد یا هش یافت نشد",
  UPDATE_ORDER_FAILED: "به‌روزرسانی سفارش ناموفق بود",
  INVALID_TOKEN: "توکن نامعتبر است",
  INVALID_PAGINATION_LIMIT: "حد صفحه‌بندی نامعتبر است",
  INVALID_FORMAT: "فرمت نامعتبر است",
  ANNOUNCEMENT_TYPE_DOES_NOT_EXIST: "نوع اطلاعیه وجود ندارد",
  FORGOT_TO_ADD_PERSIAN: "فراموش کردید فارسی اضافه کنید",
  MOBILE_OR_PASSWORD_IS_WRONG: "موبایل یا رمز عبور اشتباه است",
  SOMETHING_IS_WRONG: "مشکلی پیش آمده است",
  ORDER_ALREADY_COMPLETED: "سفارش قبلاً تکمیل شده است",
  PRODUCT_NOT_FOUND: "محصول یافت نشد",
  FILTER_AND_TYPE_IS_REQUIRED: "فیلتر و نوع الزامی است",
  TICKET_FOR_ORDER_ALREADY_EXIST: "تیکت برای سفارش قبلاً وجود دارد",
  TOKEN_IS_NOT_VALID: "توکن معتبر نیست",
  DATABASE_IS_UNREACHABLE: "پایگاه داده در دسترس نیست",
  INVALID_FORMAT_OF_PAGINATION_OPTION:
    "فرمت گزینه صفحه‌بندی نامعتبر است",
  SYNC_PRODUCT_WITH_VARIANT_GOT_ERROR:
    "خطا در همگام‌سازی محصول با نوع",
  INVALID_TOKNE_FOR_DECRYPTING: "توکن برای رمزگشایی نامعتبر است",
  NO_RESPONSE_FROM_SERVER: "پاسخی از سرور دریافت نشد",
  ERROR_IN_SETTING_UP_REQUEST: "خطا در تنظیم درخواست",
  UN_EXPECTED_ERROR: "خطای غیرمنتظره",
  CANNOT_PERFORM_ACTION: "نمی‌توان این اقدام را انجام داد",
  UNEXPECTED_ERROR: "خطای غیرمنتظره",
  ORDER_SUMMARY_PASSED_THE_FIRSSST_FIFTEEN_MINUTE:
    "خلاصه سفارش از ۱۵ دقیقه اول گذشته است",
  INVALID_MOBILE_FORMAT: "فرمت موبایل نامعتبر است",
  CARD_NNUMBER_AND_NATIONAL_CODE_IS_NOT_MATCH:
    "شماره کارت و کد ملی مطابقت ندارد",
  START_DATE_CANNOT_BE_EARLIER_THAN_LAST_MONTH:
    "تاریخ شروع نمی‌تواند زودتر از ماه گذشته باشد",
  ORDER_PLANNING_ALREADY_EXECUTED:
    "برنامه‌ریزی سفارش قبلاً اجرا شده است",
  ACTIVE_ORDER_PLANNING_ALREADY_EXIST:
    "برنامه‌ریزی سفارش فعال قبلاً وجود دارد",
  ORDER_PLANNING_ALREADY_DEACTIVATED:
    "برنامه‌ریزی سفارش قبلاً غیرفعال شده است",
  OPERATOR_CAN_ONLY_UPDATE_ITS_OWN_OREDR_SUMMARY:
    "اپراتور فقط می‌تواند خلاصه سفارش خود را به‌روزرسانی کند",
  INVALID_TYPE_FOR_PAGE_PROPERTY: "نوع نامعتبر برای ویژگی صفحه",
  ORDER_END_AT_IS_NOT_OPTIONAL: "پایان سفارش اختیاری نیست",
  ORDER_STARTED_AT_IS_NOT_OPTIONAL: "شروع سفارش اختیاری نیست",
  ORDER_STATUSES_IS_NOT_OPTIONAL: "وضعیت‌های سفارش اختیاری نیست",
  BUSINESS_ID_NOT_FOUND: "شناسه کسب‌وکار یافت نشد",
  MOBILE_OR_CARD_NUMBER_NOT_VALID: "شماره موبایل یا کارت معتبر نیست",
  INVALID_ORDER_NUMBER: "شماره سفارش نامعتبر است",
  PLEASE_TRY_AGIAN_AFTER_FIVE_MINUTE:
    "لطفاً پنج دقیقه دیگر دوباره امتحان کنید",
  YOU_TRIED_ENOUGH_FOR_THIS_STEP:
    "شما به اندازه کافی برای این مرحله تلاش کرده‌اید",
  CARD_NUMBER_IS_NOT_MATCH_FOR_ORDER_NUMBER:
    "شماره کارت با شماره سفارش مطابقت ندارد",
  OTP_CODE_IS_NOT_VALID: "کد OTP معتبر نیست",
  VANDAR_VERIFICATION_FAILED: "تأیید وندار ناموفق بود",
  PAYMENT_TYPE_IS_NOT_MATCH_TO_RECEIPT:
    "نوع پرداخت با رسید مطابقت ندارد",
  IBAN_NOT_VALID: "شماره IBAN معتبر نیست",
  USER_IS_BANNED: "کاربر مسدود شده است",
  TICKET_NOT_FOUND: "تیکت یافت نشد",
  TICKET_REVIEW_ALREADY_EXIST_FOR_TICKET:
    "بررسی تیکت برای این تیکت قبلاً وجود دارد",
  USER_IS_NOT_ALLOWED_TO_SEND_MESSAGE: "کاربر اجازه ارسال پیام ندارد",
  FILE_TYPE_IS_NOT_ALLOWED_TO_UPLOAD: "نوع فایل برای آپلود مجاز نیست",
  ONE_OF_THE_MEMBERS_IS_ALREADY_IN_ANOTHER_CAPSULE:
    "یکی از اعضا قبلاً در کپسول دیگری است",
  FILE_TYPE_IS_NOT_VALID: "نوع فایل معتبر نیست",
  AMOUNT_IS_MORE_THAN_RECEIPT: "مبلغ بیشتر از رسید است",
  INSUFFICIENT_VANDAR_BALANCE: "موجودی وندار کافی نیست",
  AMOUNT_IS_MORE_THAN_RECEIPT_FOR_AUTOMATIC_REFUND:
    "مبلغ بیشتر از رسید برای بازپرداخت خودکار است",
  THERE_IS_NO_TICKET_FOR_CREATING_REFUND:
    "تیکتی برای ایجاد بازپرداخت وجود ندارد",
  VOICE_IS_UNAVAILABLE_AT_THIS_TIME: "فایل صدا در دسترس نیست",
  "email must be an email": "ایمیل معتبر نیست",
};
