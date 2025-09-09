import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import CookieStorage from "../utils/CookieStorage";
import { Storage } from "../utils/storage";
import { ERRORS } from "./error-handler";

interface ApiOpts {
  baseURL?: string;
  headers?: any;
}

class Api {
  private xhr: AxiosInstance;
  private maxRetries: number = 100;
  private retryDelay: number = 2000; // 2 second
  private pendingRequests: Map<string, CancelTokenSource> = new Map();

  constructor(opts: ApiOpts = { baseURL: "", headers: {} }) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const headers = {
      "Content-Type": "application/json; charset=UTF8",
      ...opts.headers,
    };

    // const token = CookieStorage.get("token");
    // if (token) headers["Authorization"] = "Bearer " + token;
    this.xhr = axios.create({
      baseURL: opts.baseURL || apiBaseUrl,
      headers,
    });

    this.xhr.interceptors.request.use((config) => {
      if (config.method === "options") {
        config.headers["Access-Control-Request-Method"] =
          config.method;
      }

      return config;
    });
  }

  // Generate a unique key for each request based on URL and parameters
  private getRequestKey(
    method: string,
    url: string,
    params?: any
  ): string {
    return `${method}:${url}:${JSON.stringify(params || {})}`;
  }

  // Cancel any pending request with the same key
  private cancelPendingRequests(requestKey: string): void {
    const source = this.pendingRequests.get(requestKey);
    if (source) {
      source.cancel("Request canceled due to duplicate request");
      this.pendingRequests.delete(requestKey);
    }
  }

  private handleErr = (
    err: any,
    retryCount: number = 0,
    originalRequest: any
  ) => {
    // Define error message types and handlers
    interface ErrorResponse {
      message?: string | { errors: Array<{ message: string }> };
      data?: {
        message?: string;
        errors?: { message: string };
      };
      status?: number;
    }

    const handleAuthError = (message = "لطفا دوباره وارد شوید") => {
      // toast.error(message);
      window.location.href = "/auth/login";
      ["token", "user_info", "permissions"].forEach((item) =>
        CookieStorage.delete(item)
      );
    };

    const handleForbiddenError = (message = "دسترسی نامعتبر") => {
      // toast.error(message);
      if (
        !["staff", "/auth/login"].includes(window.location.pathname)
      ) {
        setTimeout(() => {
          window.location.href = "/403";
        }, 1000);
      }
    };

    if (err.response) {
      const response = err.response as ErrorResponse;
      const message =
        ERRORS[response?.data?.message?.errors?.message] || ERRORS[response?.data?.message?.errors[0]]
      "خطا رخ داد";
      const status = response.status;

      switch (status) {
        case 400:
          if (
            message &&
            typeof message === "object" &&
            Array.isArray(message.errors)
          ) {
            message.errors.forEach((error) => {
              // toast.error(error.message || "خطا رخ داد");
            });
          } else
            // toast.error(message);
            break;

        case 401:
          handleAuthError(message);
          break;

        case 403:
          handleForbiddenError(message);
          break;

        case 404:
          // toast.error(message || "منبع یافت نشد!");
          break;

        case 422:
          if (
            message &&
            typeof message === "object" &&
            Array.isArray(message.errors)
          ) {
            // toast.error(message || "سرور مشغول است بعدا تماس بگیرید");
          }
          break;
        case 429:
          // toast.error("درخواست های بیش از حد زیاد ارسال شده است");
          break;
        case 500:
          return this.retryRequest(err, retryCount, originalRequest);

        default:
          if (
            status === 0 &&
            err.message?.includes("Network Error")
          ) {
            return this.retryRequest(
              err,
              retryCount,
              originalRequest
            );
          }
        // toast.error(message?.toString() || "Unknown error");
      }
    } else if (err.request) {
      // Handle network errors
      return this.retryRequest(err, retryCount, originalRequest);
    }

    console.error("API Error:", err);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleRes = (res: AxiosResponse) => {
    const responseCookie = res.data.cookie;
    if (responseCookie) {
      try {
        const existingCookie = Storage.get("cookie");
        const parsedExistingCookie = existingCookie
          ? JSON.parse(existingCookie)
          : null;
        const parsedResponseCookie = JSON.parse(responseCookie);

        if (parsedExistingCookie) {
          const isEqualCallStatus =
            parsedExistingCookie.callStatus ===
            parsedResponseCookie.callStatus;
          const isEqualGoftinoStatus =
            parsedExistingCookie.goftinoStatus ===
            parsedResponseCookie.goftinoStatus;
          const isEqualHighestRank =
            parsedExistingCookie.highestRank ===
            parsedResponseCookie.highestRank;
          const isEqualroles =
            parsedExistingCookie.roles.length ===
            parsedResponseCookie.roles.length;

          if (
            !isEqualCallStatus ||
            !isEqualGoftinoStatus ||
            !isEqualHighestRank ||
            !isEqualroles
          ) {
            window.location.reload();
            return;
          }
        }
      } catch (error) {
        console.error("Error handling cookie:", error);
      }
    }
  };

  private retryRequest = (
    err: any,
    retryCount: number,
    originalRequest: any
  ) => {
    if (retryCount < this.maxRetries) {
      retryCount++;
      console.log(
        `Retrying request (${retryCount}/${this.maxRetries})...`
      );

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.xhr(originalRequest));
        }, this.retryDelay * retryCount);
      }).catch((error) =>
        this.handleErr(error, retryCount, originalRequest)
      );
    }

    return Promise.reject(err);
  };

  get(url: string, params?: any): Promise<AxiosResponse> {
    const requestKey = this.getRequestKey("GET", url, params);
    this.cancelPendingRequests(requestKey);

    const source = axios.CancelToken.source();
    this.pendingRequests.set(requestKey, source);

    return new Promise((resolve, reject) => {
      this.xhr
        .get(url, {
          params,
          cancelToken: source.token,
        })
        .then((res) => {
          this.pendingRequests.delete(requestKey);
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          this.pendingRequests.delete(requestKey);
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          }
          reject(err);
          this.handleErr(err, 0, { method: "GET", url, params });
        });
    });
  }

  post(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const requestKey = this.getRequestKey("POST", url, params);
    this.cancelPendingRequests(requestKey);

    const source = axios.CancelToken.source();
    this.pendingRequests.set(requestKey, source);

    return new Promise((resolve, reject) => {
      this.xhr
        .post(url, params, {
          ...config,
          cancelToken: source.token,
        })
        .then((res) => {
          this.pendingRequests.delete(requestKey);
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          this.pendingRequests.delete(requestKey);
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          }
          reject(err);
          this.handleErr(err);
        });
    });
  }

  put(url: string, params?: any): Promise<AxiosResponse> {
    const requestKey = this.getRequestKey("PUT", url, params);
    this.cancelPendingRequests(requestKey);

    const source = axios.CancelToken.source();
    this.pendingRequests.set(requestKey, source);

    return new Promise((resolve, reject) => {
      this.xhr
        .put(url, params, { cancelToken: source.token })
        .then((res) => {
          this.pendingRequests.delete(requestKey);
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          this.pendingRequests.delete(requestKey);
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          }
          reject(err);
          this.handleErr(err);
        });
    });
  }

  patch(url: string, params?: any): Promise<AxiosResponse> {
    const requestKey = this.getRequestKey("PATCH", url, params);
    this.cancelPendingRequests(requestKey);

    const source = axios.CancelToken.source();
    this.pendingRequests.set(requestKey, source);

    return new Promise((resolve, reject) => {
      this.xhr
        .patch(url, params, { cancelToken: source.token })
        .then((res) => {
          this.pendingRequests.delete(requestKey);
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          this.pendingRequests.delete(requestKey);
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          }
          reject(err);
          this.handleErr(err);
        });
    });
  }

  delete(url: string, params?: any): Promise<AxiosResponse> {
    const requestKey = this.getRequestKey("DELETE", url, params);
    this.cancelPendingRequests(requestKey);

    const source = axios.CancelToken.source();
    this.pendingRequests.set(requestKey, source);

    return new Promise((resolve, reject) => {
      this.xhr
        .delete(url, {
          data: params,
          cancelToken: source.token,
        })
        .then((res) => {
          this.pendingRequests.delete(requestKey);
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          this.pendingRequests.delete(requestKey);
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
            return;
          }
          reject(err);
          this.handleErr(err);
        });
    });
  }
}

export default Api;
