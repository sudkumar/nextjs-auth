import xhr, { AxiosRequestConfig } from "axios";
import { NextContext } from "next";

xhr.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
xhr.defaults.withCredentials = true;

/**
 * We need to inject the cookies into the request when request happens on server side.
 * When rendering page on server, axios has no way of knowing about the cookies on the server.
 * So on server, we take cookies from req object and pass them to the cookies on xhr requests
 */
function injectTokenForSSRRequest(config: AxiosRequestConfig) {
  const headers = config.headers;
  const ssrCookie = (xhr as any).ssrCookie;
  if (ssrCookie) {
    headers["Cookie"] = (headers["Cookie"] || "") + ssrCookie + ";";
  }
  config.headers = headers;
  return config;
}
xhr.interceptors.request.use(injectTokenForSSRRequest);

export default xhr;

/**
 * Set this in _app.js
 */
export async function bootstrapXHR({ req }: NextContext) {
  (xhr as any).ssrCookie = (req && req.headers && req.headers.cookie) || "";
  return {};
}
